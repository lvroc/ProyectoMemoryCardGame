import {div,p} from "../../libs/html.js";
import { CardView } from "../../views/cardView.js";
import {ControllerView} from "../controllerView.js";

export class PlayView extends ControllerView {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.id = 'playView';
        this.elementsContainer.className = 'playView-elementsContainer';
        this.hudContainer = div({
            className: 'playView-hudContainer'
        }, this.elementsContainer)
        this.cardsContainer = div({
            className: 'playView-cardsContainer'
        }, this.elementsContainer);

        this.clicksText = p({
            innerHTML: '<i class="fas fa-mouse-pointer"></i>Clicks: 0',
            className: 'playView-text'
        }, this.hudContainer);
        this.timerText = p({
            innerHTML: '<i class="fas fa-stopwatch"></i>Time 0',
            className: 'playView-text'
        }, this.hudContainer);
        this.resetBtn = div({
            innerHTML: '<i class="fas fa-undo-alt"></i>Reset',
            className: 'game-button playView-resetBtn',
            onclick: this.onResetBtn.bind(this)
        }, this.hudContainer);
    }

    showCards(cards) {
        this.cardsContainer.innerHTML = '';
        cards.forEach(card => {
            let cardView = new CardView(this.cardsContainer, card);
        });
    }

    onResetBtn() {
        this.controller.resetGame();

    }

    updateHUD(clicks, time) {
        this.clicksText.innerHTML = `<i class="fas fa-mouse-pointer"></i>Clicks: ${clicks}`;
        this.timerText.innerHTML = `<i class="fas fa-stopwatch"></i>Time: ${time}`;
    }
}