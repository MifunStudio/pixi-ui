import {UIStage} from './UIStage';

let uiStage;

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
    uiStage = new UIStage(stage);
    return uiStage;
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
