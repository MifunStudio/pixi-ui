import PIXI from '@mifunstudio/pixi.js';
import {Tween, Ease} from '@mifunstudio/pixi.js';
import {UIContainer} from '../UIContainer';
import {Size, Padding} from '../math';

const ticker = PIXI.ticker.shared;

export const HORIZONTAL = 'Horizontal';
export const VERTICAL = 'Vertical';
export const BOTH = 'Both';

function middle(a, b, c) {
    return (a < b ? (b < c ? b : a < c ? c : a) : (b > c ? b : a > c ? c : a));
}

export class ScrollView extends UIContainer {

    get container() { return this._container; }
    set container(value) {
        if(this._container) {
            this._container.parent.removeChild(this._container);
        }
        this._container = value;
        if(this._container) {
            this.addChild(this._container);
        }
    }

    get viewRect() { return this._viewRect; }
    get clipRect() { return this._clipRect; }

    get enabled() { return this._enabled; }
    set enabled(value) { this._enabled = value; }

    get direction() { return this._direction; }
    set direction(value) { this._direction = value; }

    get bufferBackEnabled() { return this._bufferBackEnabled; }
    set bufferBackEnabled(value) { this._bufferBackEnabled = value; }

    get momentumEnabled() { return this._momentumEnabled; }
    set momentumEnabled(value) { this._momentumEnabled = value; }

    constructor(width, height, container) {
        super(width, height);

        this.container = container;
        this.interactive = true;
        this.onSizeChange();

        this._direction = ScrollView.VERTICAL;
        this._enabled = true;
        this._bufferBackEnabled = true;
        this._momentumEnabled = true;

        this._bufferBackCheckRequired = false;
        this._dragMovedInLastSession = false;
        this._dragging = false;
        this._values = {
            velocityX: 0,
            velocityY: 0,
            momentumX: 0,
            momentumY: 0,
            lastDragX: 0,
            lastDragY: 0,
            momentumXTween: undefined,
            momentumYTween: undefined,
            bufferXTween: undefined,
            bufferYTween: undefined
        };

        this.on('panstart', this.onPanStart, this);
        this.on('panmove', this.onPanMove, this);
        this.on('panend', this.onPanEnd, this);
    }

    destroy(destroyChildren) {
        this.off('panstart', this.onPanStart, this);
        this.off('panmove', this.onPanMove, this);
        this.off('panend', this.onPanEnd, this);
        this.clearTweens();
        super.destroy(destroyChildren);
    }

    updateTransform() {
        this._updateScroll();
        super.updateTransform();
    }

    onSizeChange() {
        this._viewRect = new PIXI.Rectangle(0, 0, this.size.width, this.size.height);
        this._clipRect = new PIXI.Rectangle(0, 0, this.size.width, this.size.height);
        this.hitArea = this._viewRect;
        this.updateClipMask();
    }

    updateClipMask() {
        let clipRect = this.clipRect;
        if(!this.mask) {
            this.mask = new PIXI.Graphics();
        }
        this.mask.clear();
        this.mask.beginFill(0x000000);
        this.mask.drawRect(clipRect.x, clipRect.y, clipRect.width, clipRect.height);
        this.addChild(this.mask);
    }

    getContentSize() {
        if(this.container.isUIContainer) {
            return this.container.size;
        }
        return this.container;
    }

    getMinScrollX() {
        return this._viewRect.width - this.getContentSize().width;
    }

    getMinScrollY() {
        return this._viewRect.height - this.getContentSize().height;
    }

    isScrollable() {
        return this.enabled && this.container;
    }

    requestCheckBufferBack() {
        this._bufferBackCheckRequired = true;
    }

    stopScroll() {
        this.clearScrollTweens();
        this._values.lastDragX = 0;
        this._values.lastDragY = 0;
        this._values.velocityX = 0;
        this._values.velocityY = 0;
        this._values.momentumX = 0;
        this._values.momentumY = 0;
    }

    clearScrollTweens() {
        if (this._values.momentumXTween) {
            this._values.momentumXTween.setPaused(true);
            this._values.momentumXTween = null;
        }
        if (this._values.momentumYTween) {
            this._values.momentumYTween.setPaused(true);
            this._values.momentumYTween = null;
        }
        if (this._values.bufferXTween) {
            this._values.bufferXTween.setPaused(true);
            this._values.bufferXTween = null;
        }
        if (this._values.bufferYTween) {
            this._values.bufferYTween.setPaused(true);
            this._values.bufferYTween = null;
        }
    }

    onPanStart(e) {
        if(!this.isScrollable()) return;
        this._dragging = true;
        this._dragMovedInLastSession = true;
        this._values.lastDragX = e.x;
        this._values.lastDragY = e.y;
        this._values.velocityX = 0;
        this._values.velocityY = 0;
        this._values.momentumX = 0;
        this._values.momentumY = 0;
        this.clearScrollTweens();
    }

    onPanMove(e) {
        if(!this.isScrollable() || !this._dragging) return;
        var container = this._container;
        if(this._direction === ScrollView.BOTH || this._direction === ScrollView.HORIZONTAL) {
            var deltaX = e.x - this._values.lastDragX;
            var minScrollX = this.getMinScrollX();
            if(minScrollX === 0 ||
                (container.x >= 0 && deltaX >  0) ||
                (container.x <= minScrollX && deltaX < 0)) {
                deltaX /= 10;
            }
            container.x += deltaX;
            this._values.lastDragX += deltaX;
            if(!this._bufferBackEnabled) {
                container.x = middle(container.x, minScrollX, 0);
            }
        }
        if(this._direction === ScrollView.BOTH || this._direction === ScrollView.VERTICAL) {
            var deltaY = e.y - this._values.lastDragY;
            var minScrollY = this.getMinScrollY();
            if(minScrollY === 0 ||
                (container.y >= 0 && deltaY >  0) ||
                (container.y <= minScrollY && deltaY < 0)) {
                deltaY /= 10;
            }
            container.y += deltaY;
            this._values.lastDragY += deltaY;
            if(!this._bufferBackEnabled) {
                container.y = middle(container.y, minScrollY, 0);
            }
        }
    }

    onPanEnd(e) {
        if(!this.isScrollable() || !this._dragging) return;
        if(this._direction === ScrollView.BOTH || this._direction === ScrollView.HORIZONTAL) {
            if(!this._tryBufferBackX()) {
                if(this._momentumEnabled) {
                    this._values.velocityX = e.hammerEvent.velocityX;
                    if (this._values.momentumXTween) {
                        this._values.momentumXTween.setPaused(true);
                    }
                    this._values.momentumXTween = Tween.get(this._values).to({
                        velocityX: 0
                    }, 1000);
                } else {
                    this._values.velocityX = 0;
                    this._values.momentumY = 0;
                }
            }
        }
        if(this._direction === ScrollView.BOTH || this._direction === ScrollView.VERTICAL) {
            if(!this._tryBufferBackY()) {
                if(this._momentumEnabled) {
                    this._values.velocityY = e.hammerEvent.velocityY;
                    if (this._values.momentumYTween) {
                        this._values.momentumYTween.setPaused(true);
                    }
                    this._values.momentumYTween = Tween.get(this._values).to({
                        velocityY: 0
                    }, 1000);
                } else {
                    this._values.velocityY = 0;
                    this._values.momentumY = 0;
                }
            }
        }
        this._dragging = false;
    }

    _tryBufferBackX() {
        if(!this._bufferBackEnabled) {
            return false;
        }
        var minScrollX = this.getMinScrollX();
        var container = this._container;
        if(container.x > 0) {
            if(this._values.bufferXTween) {
                this._values.bufferXTween.setPaused(true);
            }
            this._values.bufferXTween = container.tween(false).to({
                x : 0
            }, 100);
            return true;
        }
        else if(container.x < minScrollX) {
            if(this._values.bufferXTween) {
                this._values.bufferXTween.setPaused(true);
            }
            this._values.bufferXTween = container.tween(false).to({
                x : minScrollX
            }, 100);
            return true;
        }
        return false;
    }

    _tryBufferBackY() {
        if(!this._bufferBackEnabled) {
            return false;
        }
        var minScrollY = this.getMinScrollY();
        var container = this._container;
        if(container.y > 0) {
            if(this._values.bufferYTween) {
                this._values.bufferYTween.setPaused(true);
            }
            this._values.bufferYTween = container.tween(false).to({
                y : 0
            }, 100);
            return true;
        }
        else if(container.y < minScrollY) {
            if(this._values.bufferYTween) {
                this._values.bufferYTween.setPaused(true);
            }
            this._values.bufferYTween = container.tween(false).to({
                y : minScrollY
            }, 100);
            return true;
        }
        return false;
    }

    _updateScroll() {
        if(!this._container) return;

        if(!this._bufferBackEnabled && !this._momentumEnabled) return;

        let container = this._container;
        if(this._direction === ScrollView.BOTH || this._direction === ScrollView.HORIZONTAL) {
            container.x += (this._values.velocityX + this._values.momentumX) * ticker.elapsedMS;
            var minScrollX = this.getMinScrollX();
            if(!this._bufferBackEnabled) {
                container.x = middle(container.x, minScrollX, 0);
            }
            var bufferMomentumX = false;
            if (container.x > 0 && this._values.velocityX !== 0 || this._bufferBackCheckRequired) {
                container.x = 0;
                this._values.momentumX = this._values.velocityX;
                bufferMomentumX = true;
                this._bufferBackCheckRequired = false;
            } else if (container.x < minScrollX && this._values.velocityX !== 0 || this._bufferBackCheckRequired) {
                container.x = minScrollX;
                this._values.momentumX = this._values.velocityX;
                bufferMomentumX = true;
                this._bufferBackCheckRequired = false;
            }
            if (bufferMomentumX) {
                if (this._values.momentumXTween) {
                    this._values.momentumXTween.setPaused(true);
                }
                this._values.momentumXTween = Tween.get(this._values).to({
                    momentumX: 0
                }, 100).call(() => {
                    this._tryBufferBackX();
                });
            }
        }

        if(this._direction === ScrollView.BOTH || this._direction === ScrollView.VERTICAL) {
            container.y += (this._values.velocityY + this._values.momentumY) * ticker.elapsedMS;
            var minScrollY = this.getMinScrollY();
            if(!this._bufferBackEnabled) {
                container.y = middle(container.y, minScrollY, 0);
            }
            var bufferMomentumY = false;
            if(container.y > 0 && this._values.velocityY !== 0 || this._bufferBackCheckRequired) {
                container.y = 0;
                this._values.momentumY = this._values.velocityY;
                bufferMomentumY = true;
                this._bufferBackCheckRequired = false;
            } else if(container.y < minScrollY && this._values.velocityY !== 0 || this._bufferBackCheckRequired) {
                container.y = minScrollY;
                this._values.momentumY = this._values.velocityY;
                bufferMomentumY = true;
                this._bufferBackCheckRequired = false;
            }
            if(bufferMomentumY) {
                if(this._values.momentumYTween) {
                    this._values.momentumYTween.setPaused(true);
                }
                this._values.momentumYTween = Tween.get(this._values).to({
                    momentumY: 0
                }, 100).call(() => {
                    this._tryBufferBackY();
                });
            }
        }
    }

}