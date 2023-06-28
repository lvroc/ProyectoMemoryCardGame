import { MenuController } from "./controllers/menu/menuController.js";

export class GameManager{
    constructor(){
        this.navigationContainer = document.getElementById('navigationContainer');
        this.contentContainer = document.getElementById('contentContainer')
        this.controller = new MenuController(this,this.contentContainer);
    }
}