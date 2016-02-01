import {LayoutManager} from '../LayoutManager';
import {Size} from '../math';
import * as UI from '../UI';

export class VBox extends LayoutManager {

    doLayout() {
        let size = new Size(0, 0);
        let start = this.padding.top;
        let children = this.container.children;
        for(let i=0,len=children.length; i<len; i++) {
            let child = children[i];
            start += this.childMargin.top;
            child.position.y = start;
            start += UI.getHeight(child) + this.childMargin.right;
            size.width = Math.max(UI.getWidth(child), size.width);
        }
        size.height = start;
        size.width += this.padding.left + this.padding.right;
        this.container.setSize(size);
    }

}
