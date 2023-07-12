import { div,p,input} from "../../libs/html.js";
import { View } from "../view.js";

export class LoginView extends View{
    constructor(controller, parent){
        super(controller,parent);
        this.container.className = 'loginView';

        

        var pf_login = p({
            innerHTML: 'Enter your username to play',
            appendChild: 'pf_login',
            className: 'pf_login'
        }, this.container);

        var input_login = input({
            innerHTML: 'Enter your username to play',
            appendChild: 'input_login',
            className: 'input_login',
            placeholder: 'Username'
        }, this.container);
        
        var loginBtn = div({
            innerHTML: 'Login',
            appendChild: 'loginBtn',
            className: 'game-button'
        }, this.container);
        

    



        }
    }