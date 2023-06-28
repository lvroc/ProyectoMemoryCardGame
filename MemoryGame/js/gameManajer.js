import { HomeController } from "./controllers/home/homeController.js";
import { DifficultyController } from "./controllers/difficulty/difficultyController.js";
import { ThemesController} from "./controllers/themes/themeController.js"

export class GameManager{
    constructor(){
        let navigationContainer = document.getElementById('navigationContainer');
        let contentContainer = document.getElementById('contentContainer');
        this.backBtn = document.getElementById('navigationContainer-back-button');
        this.title = document.getElementById('navigationContainer-title');
        this.goto(1);
        

        
    }
    goto(controllerID){
        switch (controllerID){
            case 1:
                this.title.innerHTML = 'Menu'
                this.controller = new HomeController(this, contentContainer);
                break;
            case 2:
                this.title.innerHTML = 'Difficulty'
                this.controller = new DifficultyController(this, contentContainer);
                break;
            case 3:
                this.title.innerHTML = 'Themes'
                this.controller = new ThemesController(this, contentContainer);
                break;

        }
    }
}