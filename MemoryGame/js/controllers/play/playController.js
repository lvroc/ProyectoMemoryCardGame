import { Controller } from "../controller.js";
import { PlayService } from "./playService.js";
import { PlayView } from "./playView.js";

export class PlayController extends Controller{
    constructor(gameManager,parent){
        super(gameManager);
        this.view = new PlayView(this,parent);
        this.cards = null;
        this.service = new PlayService(this);
        this.service.getCards(this.gameManager.difficulty,this.gameManager.theme);
        this.time = 0;
        this.clicks=0;

    }

    showCards(cards){
        this.cards = cards;
        this.view.showCards(cards);
    }

    resetGame(){
        this.service.getCards(this.gameManager.difficulty, this.gameManager.theme);
    }



    
}