import { p } from "../../libs/html.js";
import { View } from "../view.js";

export class CreditsView extends View{
    constructor(controller, parent){
        super(controller,parent);
        this.container.className = 'creditsView';

        let text = p({appendChild:'text',innerHTML:'Add credits here'},this.container);




        }
    }