import { View } from "../view.js";
import {div } from "../../libs/html.js";

export class HomeView extends View{
    constructor(controller, parent){
        super(controller,parent);
        this.container.className = 'homeView';

        var loginBtn = div({innerHTML: 'Login',className: 'game-button'}, this.container);
        var playBtn = div({innerHTML: 'Play',className: 'game-button'},this.container);
        var scoresBtn = div({innerHTML: 'Scores',className: 'game-button'}, this.container);
        var difficultyBtn = div({innerHTML: 'Difficulty',className: 'game-button'}, this.container);
        var themesBtn = div({innerHTML: 'Scores',className: 'game-button'}, this.container);
        var creditsBtn = div({innerHTML: 'Credits',className: 'game-button'}, this.container);
    }
}









