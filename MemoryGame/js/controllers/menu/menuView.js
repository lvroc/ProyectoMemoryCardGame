import { View } from "../view.js";

export class MenuView extends View{
    constructor(controller, parent){
        super(controller,parent);
        this.container.className = 'menuView';

        var loginBtn = document.createElement('div');
        this.container.appendChild(loginBtn);
        loginBtn.innerHTML = 'Login';
        loginBtn.className = 'game-button';

        var playBtn = document.createElement('div');
        this.container.appendChild(playBtn);
        playBtn.innerHTML = 'Play';
        playBtn.className = 'game-button';

        var scoresBtn = document.createElement('div');
        this.container.appendChild(scoresBtn);
        scoresBtn.innerHTML = 'Scores';
        scoresBtn.className = 'game-button';

        var difficultyBtn = document.createElement('div');
        this.container.appendChild(difficultyBtn);
        difficultyBtn.innerHTML = 'Difficulty';
        difficultyBtn.className = 'game-button';


        var themesBtn = document.createElement('div');
        this.container.appendChild(themesBtn);
        themesBtn.innerHTML = 'Scores';
        themesBtn.className = 'game-button';


        var creditsBtn = document.createElement('div');
        this.container.appendChild(creditsBtn);
        creditsBtn.innerHTML = 'Credits';
        creditsBtn.className = 'game-button';



        }
    }