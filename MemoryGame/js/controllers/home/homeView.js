import {
    div, img
} from "../../libs/html.js";
import {
    CREDITS_STATE,
    DIFFICULTY_STATE,
    LOGIN_STATE,
    PLAY_STATE,
    SCORES_STATE,
    THEMES_STATE
} from "../../libs/constants.js";
import { ControllerView } from "../controllerView.js";

export class HomeView extends ControllerView {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.id='homeView';
        this.elementsContainer.className = 'homeView-elementsContainer';

        img({src:'./src/img/logo.svg',className:'homeView-logo'},this.elementsContainer);
        
        var loginBtn = div({
            innerHTML: '<i class="fas fa-user"></i>Login',
            className: 'game-button',
            onclick: this.onButtonClick.bind(this, LOGIN_STATE)
        }, this.elementsContainer);
        var playBtn = div({
            innerHTML: '<i class="fas fa-gamepad"></i>Play',
            className: 'game-button',
            onclick: this.onButtonClick.bind(this, PLAY_STATE)
        }, this.elementsContainer);
        var scoresBtn = div({
            innerHTML: '<i class="fas fa-trophy"></i>Scores',
            className: 'game-button',
            onclick: this.onButtonClick.bind(this, SCORES_STATE)
        }, this.elementsContainer);
        var difficultyBtn = div({
            innerHTML: '<i class="fas fa-cogs"></i>Difficulty',
            className: 'game-button',
            onclick: this.onButtonClick.bind(this, DIFFICULTY_STATE)
        }, this.elementsContainer);
        var themesBtn = div({
            innerHTML: '<i class="fas fa-paint-brush"></i>Themes',
            className: 'game-button',
            onclick: this.onButtonClick.bind(this, THEMES_STATE)
        }, this.elementsContainer);
        var creditsBtn = div({
            innerHTML: '<i class="fas fa-info-circle"></i>Credits',
            className: 'game-button',
            onclick: this.onButtonClick.bind(this, CREDITS_STATE)
        }, this.elementsContainer);
    }

    onButtonClick(state) {
        /* this.controller.goto(state); */
        let event = new CustomEvent('home-button-click',{
            detail:{
                state: state
            },
            bubbles: true,
            cancelable: true,
            composed:false,
        });
        this.container.dispatchEvent(event)
    }
}