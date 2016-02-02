import PIXI from '@mifunstudio/pixi.js';
import {ImageView} from './ImageView';
import {AbstractProgressBar} from './AbstractProgressBar';

export const L2R = 'left2right';
export const R2L = 'right2left';
export const U2D = 'up2down';
export const D2U = 'down2up';
export const CLOCK = 'clock';
export const ANTI_CLOCK = 'anticlock';

export class ProgressBar extends AbstractProgressBar {

    get direction() {
         return this._direction;
    }

    get offset() {
        return this._offset;
    }

    constructor(direction, progressTexture, backgroundTexture) {
        super();
        this._direction = direction;
        this._offset = new PIXI.Point(0, 0);
        this._progressTexture = progressTexture;
        this._progressImageView = new ImageView(progressTexture);
        if(backgroundTexture) {
            this.addChild(new ImageView(backgroundTexture));
        }
        this.addChild(this._progressImageView);

        this._clockMask = null;
        this.onProgressUpdate();
    }

    setOffset(offset) {
        this._offset = offset;
    }

    setDirection(direction) {
        this._direction = direction;
    }

    onProgressUpdate() {
        let texture = this._progressTexture;
        let baseTexture = texture.baseTexture;
        if(baseTexture.hasLoaded) {
            let progressView = this._progressImageView;
            let frame = texture.frame.clone();
            let frameW = frame.width;
            let frameH = frame.height;
            let radius;
            let mask;
            if(this.progress === 0) {
                progressView.renderable = false;
                this.invalidate();
                return;
            }
            progressView.renderable = true;
            if(this.direction === CLOCK || this.direction === ANTI_CLOCK) {
                if(!this._clockMask) {
                    this._clockMask = new PIXI.Graphics();
                    progressView.addChild(this._clockMask);
                    progressView.mask = this._clockMask;
                }
                this._clockMask.position.set(frameW/2, frameH/2);
                radius = Math.max(frameW, frameH) / 2;
            } else {
                if(this._clockMask) {
                    progressView.removeChild(this._clockMask);
                    progressView.mask = null;
                    this._clockMask.destroy(true);
                    this._clockMask = null;
                }
            }
            switch(this.direction) {
                case CLOCK:
                    mask = this._clockMask;
                    mask.clear();
                    mask.lineStyle(0);
                    mask.beginFill(0xFFFFFF);
                    mask.arc(0, 0, radius, 0, this.progress / 100 * Math.PI * 2);
                    mask.lineTo(0, 0);
                    mask.endFill();
                    progressView.x = this.offset.x;
                    progressView.y = this.offset.y;
                    break;
                case ANTI_CLOCK:
                    mask = this._clockMask;
                    mask.clear();
                    mask.lineStyle(0);
                    mask.beginFill(0xFFFFFF);
                    mask.arc(0, 0, radius, 0, -this.progress / 100 * Math.PI * 2, true);
                    mask.lineTo(0, 0);
                    mask.endFill();
                    break;
                case R2L:
                    frame.width = frame.width * this.progress / 100;
                    frame.x = frame.x + frameW - frame.width;
                    progressView.x = this.offset.x + frameW - frame.width;
                    progressView.y = this.offset.y;
                    break;
                case U2D:
                    frame.height = frame.height * this.progress / 100;
                    progressView.x = this.offset.x;
                    progressView.y = this.offset.y;
                    break;
                case D2U:
                    frame.height = frame.height * this.progress / 100;
                    frame.y = frame.y + frameH - frame.height;
                    progressView.x = this.offset.x;
                    progressView.y = this.offset.y + frameH - frame.height;
                    break;
                default:
                    frame.width = frame.width * this.progress / 100;
                    progressView.x = this.offset.x;
                    progressView.y = this.offset.y;
                    break;
            }
            progressView.texture = new PIXI.Texture(baseTexture, frame);
            this.invalidate();
        }
    }
}
