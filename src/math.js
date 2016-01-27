import PIXI from '@mifunstudio/pixi.js';

export class Margin {
    constructor(top, right, bottom, left) {
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.left = left;
    }
}

export class Padding extends Margin {

}

export class Size extends PIXI.Point {

    get width() { return this.x; }
    get height() { return this.y; }
    set width(value) { this.x = value; }
    set height(value) { this.y = value; }

}
