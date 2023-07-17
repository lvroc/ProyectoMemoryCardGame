import { p } from "../../libs/html.js";
import { ControllerView } from "../controllerView.js";

export class CreditsView extends ControllerView{
    constructor(controller, parent){
        super(controller,parent);
        this.elementsContainer.className = 'creditsView';

        let text = p({appendChild:'text',innerHTML:'Add credits here'},this.elementsContainer);




        }
    }