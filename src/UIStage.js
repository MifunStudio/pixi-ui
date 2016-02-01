import PIXI from '@mifunstudio/pixi.js';
import {UIContainer} from './UIContainer';
import {Size} from './math';
import * as UI from './UI';

UI.setUIStageFactory(function(stage) {
    return new UIStage(stage);
});

export class UIStage extends UIContainer {

    constructor(stage) {
        super();
        this.stage = stage;
        this._bounds = new PIXI.Rectangle(0, 0, 0, 0);
        this._frameEnd = false;

        this._doRenderChildren = false;
        this._renderTexture = new PIXI.RenderTexture(this.stage.renderer,
            this.stage.viewport.width, this.stage.viewport.height);
        this._renderSprite = new PIXI.Sprite(this._renderTexture);

        this._onViewportResize();
        this._updateRenderTexture();
        this.stage.on('viewport.resize', this._onViewportResize, this);
    }

    getLocalBounds() {
        return this._bounds;
    }

    invalidate() {
        if(!this._renderSchedule) {
            this._renderSchedule = this.stage.scheduler.frame(() => {
                this._renderToRenderTexture();
                this._renderSchedule = null;
                console.log('invalidate');
            }, 0);
        }
    }

    renderCanvas(renderer) {
        if(this._doRenderChildren) {
            super.renderCanvas(renderer);
        } else {
            this._renderSprite.renderCanvas(renderer);
        }
    }

    renderWebGL(renderer) {
        if(this._doRenderChildren) {
            super.renderWebGL(renderer);
        } else {
            this._renderSprite.renderWebGL(renderer);
        }
    }

    destroy(destroyChildren) {
        this._renderSprite.destroy(true);
        super.destroy(destroyChildren);
        this.stage.off('viewport.resize', this._onViewportResize, this);
    }

    _renderToRenderTexture() {
        this._doRenderChildren = true;
        this._renderTexture.render(this, this.stage.worldTransform, true);
        this._doRenderChildren = false;
    }

    _updateRenderTexture() {
        this._renderTexture.resize(this._bounds.width, this._bounds.height, true);
        this.invalidate();
    }

    _onViewportResize() {
        this._bounds.width = this.stage.viewport.width;
        this._bounds.height = this.stage.viewport.height;
        this.setSize(new Size(this.stage.viewport.width, this.stage.viewport.height));
        this._updateRenderTexture();
    }

}
