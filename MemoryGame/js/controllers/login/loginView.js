import { div,p,input} from "../../libs/html.js";
import { ControllerView } from "../controllerView.js";

export class LoginView extends ControllerView{
    constructor(controller, parent){
        super(controller,parent);
        this.elementsContainer.className = 'loginView';

        

        this.pf_login = p({
            innerHTML: 'Enter your username to play',
            appendChild: 'pf_login',
            className: 'pf_login'
        }, this.elementsContainer);

        this.usernameInput = input({
            innerHTML: 'Enter your username to play',
            appendChild: 'input_login',
            className: 'input_login',
            placeholder: 'Username'
        }, this.elementsContainer);
        
        this.loginBtn = div({
            innerHTML: 'Login',
            appendChild: 'loginBtn',
            className: 'game-button',
            onclick:this.onLoginBtn.bind(this)
        }, this.elementsContainer);
    }
    onLoginBtn(){
        let username =  this.usernameInput.value;
        if(username!==''){
            let event = new CustomEvent('username-entered',{
                detail:{
                    username:username,
                },
                bubbles:true,
                cancelable:true,
                composed: false
            });
            this.container.dispatchEvent(event);

        }else{

        }
    }
}
        

    


