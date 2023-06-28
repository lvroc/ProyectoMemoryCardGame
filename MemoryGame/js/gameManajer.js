import { MenuController } from "./controllers/menu/menuController.js";

export class GameManager{
    constructor(){
        let navigationContainer = document.getElementById('navigationContainer');
        let contentContainer = document.getElementById('contentContainer')
        this.controller = new MenuController(this,contentContainer);
    }
}