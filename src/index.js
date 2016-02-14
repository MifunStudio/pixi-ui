import PIXI from '@mifunstudio/pixi.js';

module.exports = PIXI.ui = {

    LayoutManager: require('./LayoutManager').LayoutManager,

    Margin: require('./math').Margin,
    Padding: require('./math').Padding,
    Size: require('./math').Size,

    UI: require('./UI'),

    UIStage: require('./UIStage').UIStage,

    layout: require('./layout'),

    view: require('./view')

};
