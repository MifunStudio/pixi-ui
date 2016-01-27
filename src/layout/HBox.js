import {LayoutManager} from '../LayoutManager';
import {Size} from '../math';

export class HBox extends LayoutManager {

    doLayout() {
        let size = new Size(0, 0);
        let start = this.padding.left;
        let children = this.container.children;
        for(let i=0,len=children.length; i<len; i++) {
            let child = children[i];
            start += this.childMargin.left;
            child.position.x = start;
            start += this.getUIWidth(child) + this.childMargin.right;
            size.height = Math.max(this.getUIHeight(child), size.height);
        }
        size.width = start;
        size.height += this.padding.top + this.padding.bottom;
        this.container.size = size;
    }

}
