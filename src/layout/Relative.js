import {LayoutManager} from '../LayoutManager';
import {Size} from '../math';
import * as UI from '../UI';

export class Relative extends LayoutManager {

    setContainer(container) {
        if(this._container) {
            this._container.off('alignchange', this._onAlignChange, this);
        }
        this._container = container;
        this._container.on('alignchange', this._onAlignChange, this);
    }

    doLayout() {
        this._container.children.forEach((child) => {
            this.layoutChild(child);
        });
    }

    layoutChild(child) {
        let size = this._container.size;
        switch(child.align) {
            case UI.ALIGN_CENTER:
                child.x = size.width/2 - child.alignWidth/2;
                break;
            case UI.ALIGN_END:
                child.x = size.width - child.alignWidth;
                break;
            case UI.ALIGN_START:
                child.x = -child.alignWidth;
                break;
        }
        switch(child.valign) {
            case UI.ALIGN_MIDDLE:
                child.y = size.height/2 - child.valignHeight/2;
                break;
            case UI.ALIGN_BOTTOM:
                child.y = size.height - child.valignHeight;
                break;
            case UI.ALIGN_TOP:
                child.y = -child.valignHeight;
                break;
        }
    }

    _onAlignChange() {
        this._container.requestLayout();
        this._container.invalidate();
    }

}
