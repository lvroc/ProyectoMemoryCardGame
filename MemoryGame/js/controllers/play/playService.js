import {
    Card
} from "../models/card.js";
import {
    Service
} from "../service.js";

export class PlayService extends Service {
    constructor(controller) {
        super(controller);
    }

    getCards(difficulty, theme) {
        let cards = [];
        let url = `https://flip-and-match-game.vercel.app/cards/${difficulty}/${theme}`
        /* let url = `http://localhost:3000/cards/${difficulty}/${theme}` */
        /* var url = `https://us-central1-cenfoprojectsbackend.cloudfunctions.net/app/cards/${difficulty}/type/${theme}` */
        var request = new XMLHttpRequest();
        request.open('get', url);
        request.onload = () => {
            if (request.status === 200) {
                var data = JSON.parse(request.response);
                data.cards.forEach(cardData => {
                    var card = new Card(cardData.id, cardData.icon);
                    cards.push(card);
                });
            } else {
                console.error('Error requesting cards');
            }
            this.controller.showCards(cards);
        }
        request.send();
    }
    sendScore(score, clicks, time, username) {
        console.log(`SCORE: ${score}, CLICKS: ${clicks}, TIME: ${time}, USERNAME: ${username}`);
        /* var url = `https://us-central1-cenfoprojectsbackend.cloudfunctions.net/app/scores`; */
       /*  var url = 'http://localhost:3000/score' */
        let url = `https://flip-and-match-game.vercel.app/score`
        var request = new XMLHttpRequest();
        request.open('post', url);
        request.send(JSON.stringify({
            score: score,
            clicks: clicks,
            time: time,
            username: username
        }));
    }
}