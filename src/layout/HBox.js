import {LayoutManager} from '../LayoutManager';
import {Size} from '../math';
import * as UI from '../UI';

export class HBox extends LayoutManager {

    doLayout() {
        let size = new Size(0, 0);
        let start = this.padding.left;
        let children = this.container.children;
        for(let i=0,len=children.length; i<len; i++) {
            let child = children[i];
            start += this.childMargin.left;
            child.position.x = start;
            start += UI.getWidth(child) + this.childMargin.right;
            size.height = Math.max(UI.getHeight(child), size.height);
        }
        size.width = start;
        size.height += this.padding.top + this.padding.bottom;
        this.container.setSize(size);
    }

}
