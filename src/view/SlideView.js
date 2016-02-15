import PIXI from '@mifunstudio/pixi.js';
import {Tween, Ease} from '@mifunstudio/pixi.js';
import {ListView} from './ListView';
import {LayoutManager} from '../LayoutManager';

const ticker = PIXI.ticker.shared;

export const HORIZONTAL = 'Horizontal';
export const VERTICAL = 'Vertical';

export class SlideView extends ListView {

    get direction() {
        return this._direction;
    }

    get enabled() { return this._enabled; }
    set enabled(value) { this._enabled = value; }

    get swipeOffset() { return this._swipeOffset; }
    set swipeOffset(value) {
        this._swipeOffset = value;
        this.onSlideMove();
    }

    constructor(direction, size) {
        super(new SlideLayout());
        this._direction = direction;
        this.setSize(size);

        this._swipeOffset = 0;
        this._enabled = true;

        this._dragMovedInLastSession = false;
        this._dragging = false;
        this._values = {
            velocityX: 0,
            velocityY: 0,
            lastDragX: 0,
            lastDragY: 0,
            _swipeOffsetTween: null
        };

        this.interactive = true;
        this.on('panstart', this.onPanStart, this);
        this.on('panmove', this.onPanMove, this);
        this.on('panend', this.onPanEnd, this);

        if(this._direction === HORIZONTAL) {
            this.on('swipeleft', this.onSwipe, this);
            this.on('swiperight', this.onSwipe, this);
        } else {
            this.on('swipeup', this.onSwipe, this);
            this.on('swipedown', this.onSwipe, this);
        }
    }

    destroy(destroyChildren) {
        this.off('panstart', this.onPanStart, this);
        this.off('panmove', this.onPanMove, this);
        this.off('panend', this.onPanEnd, this);
        if(this._direction === HORIZONTAL) {
            this.off('swipeleft', this.onSwipe, this);
            this.off('swiperight', this.onSwipe, this);
        } else {
            this.off('swipeup', this.onSwipe, this);
            this.off('swipedown', this.onSwipe, this);
        }
        super.destroy(destroyChildren);
    }

    updateTransform() {
        if(this._values.swipeOffsetTween) {
            this._values.swipeOffsetTween.tick(ticker.elapsedMS);
        }
        super.updateTransform();
    }

    isSwipable() {
        return this._enabled;
    }

    clearSlideTweens() {
        if(this._values.swipeOffsetTween) {
            this._values.swipeOffsetTween.setPaused(true);
            this._values.swipeOffsetTween = null;
        }
    }

    onSizeChange() {
        this.hitArea = new PIXI.Rectangle(0, 0, this.size.width, this.size.height);
        super.onSizeChange();
    }

    onPanStart(e) {
        this.clearSlideTweens();
        if(!this.isSwipable()) return;
        this._dragging = true;
        this._dragMovedInLastSession = true;
        this._values.lastDragX = e.x;
        this._values.lastDragY = e.y;
        this._values.velocityX = 0;
        this._values.velocityY = 0;
    }

    onPanMove(e) {
        if(!this.isSwipable() || !this._dragging) return;
        if(this.direction === HORIZONTAL) {
            this.swipeOffset += e.x - this._values.lastDragX;
            this._values.lastDragX = e.x;
        } else {
            this.swipeOffset += e.y - this._values.lastDragY;
            this._values.lastDragY = e.y;
        }
    }

    onPanEnd(e) {
        if(!this.isSwipable() || !this._dragging) return;
        this._dragging = false;

        if(this.direction === HORIZONTAL) {
            this.swipeOffset += e.x - this._values.lastDragX;
        } else {
            this.swipeOffset += e.y - this._values.lastDragY;
        }

        this._values.lastDragX = e.x;
        this._values.lastDragY = e.y;
        this._values.velocityX = e.hammerEvent.velocityX;
        this._values.velocityY = e.hammerEvent.velocityY;

        this.snap();
    }

    onSwipe(e) {
        this._dragging = false;
        this.clearSlideTweens();
        switch(e.type) {
            case 'swipeleft':
            case 'swipeup':
                this.swipeToPrevious();
                break;
            case 'swiperight':
            case 'swipedown':
                this.swipeToNext();
                break;
        }
    }

    snap() {
        let sizeV = this.direction === HORIZONTAL ? this.size.width : this.size.height;
        let indexF = this.swipeOffset / sizeV;
        let preIndex = Math.floor(indexF);
        let nextIndex = Math.ceil(indexF);
        if(preIndex === nextIndex) {
            return;
        }

        if(indexF - preIndex < 0.5) {
            this.snapTo(preIndex);
        } else {
            this.snapTo(nextIndex);
        }
    }

    snapTo(index, time) {
        if(index > 0) {
            index = 0;
        } else if(index < -this.children.length+1) {
            index = -this.children.length + 1;
        }
        let sizeV = this.direction === HORIZONTAL ? this.size.width : this.size.height;
        let targetOffset = index * sizeV;
        this._values.swipeOffsetTween = Tween.get(this).to({
            swipeOffset: targetOffset
        }, time || 500).call(() => {
            this._values.swipeOffsetTween = null;
        });
    }

    swipeToPrevious() {
        let sizeV = this.direction === HORIZONTAL ? this.size.width : this.size.height;
        let index = Math.floor(this.swipeOffset / sizeV);
        this.snapTo(index);
    }

    swipeToNext() {
        let sizeV = this.direction === HORIZONTAL ? this.size.width : this.size.height;
        let index = Math.floor(this.swipeOffset / sizeV) + 1;
        this.snapTo(index);
    }

    onSlideMove() {
        this.requestLayout();
        this.invalidate();
    }

}

export class SlideLayout extends LayoutManager {

    getSlideView() {
        return this.container;
    }

    doLayout() {
        let slideView = this.getSlideView();
        let children = slideView.children;
        let direction = slideView.direction;
        let swipeOffset = slideView.swipeOffset;

        if(direction === HORIZONTAL) {
            for(let i=0,len=children.length; i<len; i++) {
                let child = children[i];
                child.x = swipeOffset + slideView.size.width * i + slideView.size.width/2;
                child.y = slideView.size.height / 2;
            }
        } else {
            for(let i=0,len=children.length; i<len; i++) {
                let child = children[i];
                child.y = swipeOffset + slideView.size.height * i + slideView.size.height/2;
                child.x = slideView.size.width / 2;
            }
        }
    }

}
