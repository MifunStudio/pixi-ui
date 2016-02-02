import PIXI from '@mifunstudio/pixi.js';
import {Size} from './math';

export const ALIGN_START = 'start';
export const ALIGN_CENTER = 'center';
export const ALIGN_END = 'end';
export const ALIGN_TOP = 'top';
export const ALIGN_MIDDLE = 'middle';
export const ALIGN_BOTTOM = 'bottom';
export const ALIGN_NONE = 'none';

export var debugDraw = true;
export var debugDrawGraphics = null;

export function debugDrawUIContainer(renderer, uiContainer, color) {
    let size = uiContainer.size
    if(size.width === 0 || size.height === 0) return;
    debugDrawGraphics = debugDrawGraphics || new PIXI.Graphics();
    debugDrawGraphics.clear();
    debugDrawGraphics.lineStyle(1, color || 0xFF00FF);
    debugDrawGraphics.drawRect(0, 0, size.width, size.height);
    uiContainer.worldTransform.copy(debugDrawGraphics.worldTransform);
    if(renderer.type === PIXI.RENDERER_TYPE.WEBGL) {
        debugDrawGraphics.renderWebGL(renderer);
    } else {
        debugDrawGraphics.renderCanvas(renderer);
    }
}


let uiStage;
let uiStageFactory;

export function getWidth(ui) {
    if(ui.isUIContainer) {
        return ui.size.width;
    }
    return ui.width || 0;
}

export function getHeight(ui) {
    if(ui.isUIContainer) {
        return ui.size.height;
    }
    return ui.height || 0;
}

export function getSize(ui) {
    if(ui.isUIContainer) {
        return ui.size;
    }
    return new Size(ui.width || 0, ui.height || 0);
}

export function createUIStage(stage) {
    uiStage = uiStageFactory(stage);
    return uiStage;
}

export function setUIStageFactory(factory) {
    uiStageFactory = factory;
}

export function getUIStage() {
    return uiStage;
}

export function invalidateUIStage() {
    uiStage && uiStage.invalidate();
}

export function invalidate(view) {
    if(view.parent && view.parent.isUIContainer) {
        view.parent.invalidate();
    } else {
        invalidateUIStage();
    }
}
