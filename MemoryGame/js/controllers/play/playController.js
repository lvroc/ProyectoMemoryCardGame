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
        this.timer = null;
        this.time = 0;
        this.clicks= 0;

    }

    showCards(cards){
        this.cards = cards;
        this.view.showCards(cards);
        this.timer = window.setInterval(this.gameTick.bind(this),1000);
    }

    resetGame(){
        window.clearInterval(this.timer);
        this.timer = null;
        this.time = 0;
        this.clicks = 0;
        this.view.updateHUD(this.clicks,this.time)
        this.service.getCards(this.gameManager.difficulty, this.gameManager.theme);
    }

    gameTick(){
        this.time +=1;
        this.view.updateHUD(this.clicks,this.time);
    }




}