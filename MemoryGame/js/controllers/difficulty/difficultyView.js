import { div } from "../../libs/html.js";
import { View } from "../view.js";

export class DifficultyView extends View{
    constructor(controller, parent){
        super(controller,parent);
        this.container.className = 'difficultyView';

        var lowBtn = div({innerHTML:'Low',appendChild:'lowBtn',className:'game-button'},this.container);

        var mediumBtn = div({innerHTML: 'Medium',appendChild: 'mediumBtn',className: 'game-button'}, this.container);

        var highBtn = div({innerHTML: 'High',appendChild: 'highBtn',className: 'game-button'}, this.container);

        
        }
    }