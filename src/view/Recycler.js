export class Recycler {

    constructor() {
        this._scrapViewMap = {};
    }

    clear() {
        let viewMap = this._scrapViewMap;
        for(let viewType in viewMap) {
            let views = viewMap[viewType];
            views.forEach((view) => {
                view.destroy();
            });
        }
    }

    addScrap(view, viewType) {
        this._scrapViewMap[viewType] = this._scrapViewMap[viewType] || [];
        this._scrapViewMap[viewType].push(view);
        console.log(1, viewType);
    }

    shiftScrap(viewType) {
        this._scrapViewMap[viewType] = this._scrapViewMap[viewType] || [];
        return this._scrapViewMap[viewType].shift();
    }

}
