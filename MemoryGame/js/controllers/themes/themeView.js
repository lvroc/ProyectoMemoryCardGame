import { div } from "../../libs/html.js";
import { View } from "../view.js";

export class ThemesView extends View{
    constructor(controller, parent){
        super(controller,parent);
        this.container.className = 'themesView';

        var foodBtn = div({appendChild:'foodBtn',innerHTML:'Food',className:'game-button'},this.container);

        var facesBtn = div({
            appendChild: 'facesBtn',
            innerHTML: 'Faces',
            className: 'game-button'
        }, this.container);

        var flagsBtn = div({
            appendChild: 'flagsBtn',
            innerHTML: 'Flags',
            className: 'game-button'
        }, this.container);

        



        }
    }