import { DIFFICULTY_HIGH, DIFFICULTY_LOW, DIFFICULTY_MEDIUM } from "../../libs/constants.js";
import { div } from "../../libs/html.js";
import { ControllerView } from "../controllerView.js";

export class DifficultyView extends ControllerView{
    constructor(controller, parent){
        super(controller,parent);
        this.elementsContainer.className = 'difficultyView';

        var lowBtn = div({innerHTML:'Low',appendChild:'lowBtn',className:'game-button', onclick: this.onButtonClick.bind(this,DIFFICULTY_LOW)},this.elementsContainer);

        var mediumBtn = div({innerHTML: 'Medium',appendChild: 'mediumBtn',className: 'game-button', onclick:this.onButtonClick.bind(this,DIFFICULTY_MEDIUM)}, this.elementsContainer);

        var highBtn = div({innerHTML: 'High',appendChild: 'highBtn',className: 'game-button', onclick: this.onButtonClick.bind(this,DIFFICULTY_HIGH)}, this.elementsContainer);

        
        }
        onButtonClick(difficulty){
            let event = new CustomEvent('save-difficulty', {
                detail: {
                    difficulty: difficulty
                },
                bubbles: true,
                cancelable: true,
                composed: false,
            });
            this.container.dispatchEvent(event)

        }
    }