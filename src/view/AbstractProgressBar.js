import {ImageView} from './ImageView';
import {UIContainer} from '../UIContainer';

export class AbstractProgressBar extends UIContainer {

    get progress() {
        return this.getProgress();
    }

    constructor() {
        super();
        this._progress = 0;
    }

    getProgress() {
        return this._progress;
    }

    setProgressValue(progress, max) {
        this.setProgress(progress/max * 100);
    }

    setProgress(progress) {
        if(this._progress === progress) return;
        this._progress = progress > 100 ? 100 : progress;
        this.onProgressUpdate();
    }

    onProgressUpdate() {

    }
}
