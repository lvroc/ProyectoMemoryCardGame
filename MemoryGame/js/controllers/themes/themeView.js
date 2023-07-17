import { THEME_FACES, THEME_FLAGS, THEME_FOOD } from "../../libs/constants.js";
import { div } from "../../libs/html.js";
import { ControllerView } from "../controllerView.js";

export class ThemesView extends ControllerView{
    constructor(controller, parent){
        super(controller,parent);
        this.elementsContainer.className = 'themesView';
        var facesBtn = div({
            appendChild: 'facesBtn',
            innerHTML: 'Faces',
            className: 'game-button',
            onclick: this.onButtonClick.bind(this, THEME_FACES)
        }, this.elementsContainer);

        var foodBtn = div({
            appendChild: 'foodBtn',
            innerHTML: 'Food',
            className: 'game-button',
            onclick: this.onButtonClick.bind(this, THEME_FOOD)
        }, this.elementsContainer);

        var flagsBtn = div({
            appendChild: 'flagsBtn',
            innerHTML: 'Flags',
            className: 'game-button',
            onclick: this.onButtonClick.bind(this, THEME_FLAGS)
        }, this.elementsContainer);
    }
    onButtonClick(theme) {
        let event = new CustomEvent('save-theme', {
            detail: {
                theme: theme
            },
            bubbles: true,
            cancelable: true,
            composed: false,
        });
        this.container.dispatchEvent(event)

    }





}