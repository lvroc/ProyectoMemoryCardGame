import { HomeController } from "./controllers/home/homeController.js";
import { DifficultyController } from "./controllers/difficulty/difficultyController.js";
import { ThemesController} from "./controllers/themes/themeController.js"
import { LoginController } from "./controllers/login/loginController.js";
import {CreditsController} from "./controllers/credits/creditsController.js";
import {PlayController} from "./controllers/play/playController.js";
import {ScoresController} from "./controllers/scores/scoresController.js";
import {CREDITS_STATE, DIFFICULTY_STATE, HOME_STATE, LOGIN_STATE, PLAY_STATE, SCORES_STATE, THEMES_STATE } from "./libs/constants.js";

export class GameManager{
    constructor(){
        this.controller = null;
        this.navigationContainer = document.getElementById('navigationContainer');
        this.contentContainer = document.getElementById('contentContainer');
        this.backBtn = document.getElementById('navigationContainer-back-button');
        this.title = document.getElementById('navigationContainer-title');
        this.goto(HOME_STATE)
        this.backBtn.onclick = this.goto.bind(this, HOME_STATE)
        

        
    }
    goto(state){
        if(this.controller != null){
            this.controller.delete();
        }
        this.backBtn.classList.remove('hidden');

        switch (state){
            case HOME_STATE:
                this.backBtn.classList.add('hidden')
                this.title.innerHTML = 'Home'
                this.controller = new HomeController(this, contentContainer);
                break;
            case DIFFICULTY_STATE:
                this.title.innerHTML = 'Difficulty'
                this.controller = new DifficultyController(this, contentContainer);
                break;
            case THEMES_STATE:
                this.title.innerHTML = 'Themes'
                this.controller = new ThemesController(this, contentContainer);
                break;
            case LOGIN_STATE:
                this.title.innerHTML = 'Login'
                this.controller = new LoginController(this, contentContainer);
            break;
            case CREDITS_STATE:
                this.title.innerHTML = 'Credits';
                this.controller = new CreditsController(this, contentContainer);
            break;
            case PLAY_STATE:
                this.title.innerHTML = 'Play';
                this.controller = new PlayController(this, contentContainer);
                break;

            case SCORES_STATE:
                this.title.innerHTML = 'Scores';
            this.controller = new ScoresController(this, contentContainer);
            break;

        }
    }
}