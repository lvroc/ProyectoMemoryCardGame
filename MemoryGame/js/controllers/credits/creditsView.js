import { img, p } from "../../libs/html.js";
import { ControllerView } from "../controllerView.js";

export class CreditsView extends ControllerView{
    constructor(controller, parent){
        super(controller,parent);
        this.elementsContainer.className = 'creditsView';
        img({
            src: './src/img/logo.svg',
            className: 'homeView-logo'
        }, this.elementsContainer);
        let text = p({appendChild:'text',innerHTML:'Developed and design by'},this.elementsContainer);

        p({
            innerHTML: 'LVROC StellarWebCraft',className:'p_credits_companyname'
        }, this.elementsContainer);

        p({
            innerHTML: '2023©'
        }, this.elementsContainer);




        }
    }