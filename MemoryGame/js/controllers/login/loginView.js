import { div } from "../../libs/html.js";
import { View } from "../view.js";

export class LoginView extends View{
    constructor(controller, parent){
        super(controller,parent);
        this.container.className = 'loginView';

        var loginBtn = div({
            innerHTML: 'Login',
            appendChild: 'loginBtn',
            className: 'game-button'
        }, this.container);

        

    



        }
    }