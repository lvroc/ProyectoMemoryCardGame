const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());
const food = ['🥝','🍅','🥑','🍆','🥒','🥦','🌽','🥕','🥗','🥔','🍠','🥜','🍯','🍞','🥐','🥖','🥨','🥞','🧀','🍗','🍖','🥩','🍤','🥚','🍳','🥓','🍔','🍟','🌭','🍕','🍝','🥪','🥙','🌮','🌯','🍜','🥘','🍲','🥫','🍥','🍣','🍱','🍛','🍙','🍚','🍘','🥟','🍢','🍡','🍧','🍨','🍦','🍰','🎂','🥧','🍮','🍭','🍬','🍫','🍿','🍩','🍪','🥠','☕','🍵','🥣','🍼','🥤','🥛','🍺','🍻','🍷','🥂','🥃','🍸','🍹','🍾','🥡'];

const animals = ['🐶', '🐱', '🐭', '🐹', '🐰', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐽', '🐸 🐵', '🙈', '🙉', '🙊', '🐒', '🦍', '🐔', '🐧', '🐦', '🐤', '🐣', '🐥', '🐺', '🦊','🐗', '🐴', '🦓', '🦒', '🦌', '🦄', '🐝', '🐛', '🦋', '🐌', '🐞', '🐜', '🦗','🦂', '🐢', '🐍', '🦎', '🦀', '🦑', '🐙', '🦐', '🐠', '🐟', '🐡', '🐬', '🦈', '🐳', '🐋', '🐊', '🐆', '🐅', '🐃', '🐂', '🐄', '🐪', '🐫', '🐘', '🦏', '🐐', '🐏', '🐑', '🐎', '🐖', ' 🦇', '🐓', '🦃', '🦅', '🦆', '🦉', '🐕', '🐩', '🐈', '🐇', '🐀', '🐁', '🦔', '🐉', '🐲', ' 🦕', '🦖'];

const faces = ['😀', '😬', '😁', '😂', '😃', '😄', '🤣', '😅', '😆', '😇', '😉', '😊', '🙂', '🙃', '😋', '😌', '😍', '😘', '😗', '😙', '😚', '🤪', '😜', '😝', '😛', '🤑', '😎', '🤓', '🧐', '🤠', '🤗', '🤡', '😏', '😶', '😐', '😑', '😒', '🙄', '🤨', '🤔', '🤫', '🤭', '🤥', '😳', '😞', '😟', '😠', '😡', '🤬', '😔', '😕', '🙁','😣', '😖', '😫', '😩', '😤', '😮', '😱', '😨', '😰', '😯', '😦', '😧', '😢', '😥', '😪', '🤤', '😓', '😭', '🤩', '😵', '😲', '🤯', '🤐', '😷', '🤕', '🤒', '🤮', '🤢', '🤧', '😴', '😈', '👿', '👹', '👺', '💩', '👻', '💀', '👽', '🤖', '🎃', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾'];

const vehicles = ['🚗', '🚕', '🚙', '🚌', '🚎', '🚓', '🚑', '🚒', '🚐', '🚚', '🚛', '🚜','🛵', '🚲', '🛴', '🚨', '🚔', '🚍', '🚘', '🚖', '🚡', '🚠', '🚟', '🚃', '🚋', '🚝', '🚄', '🚅', '🚈', '🚞', '🚂', '🚆', '🚇', '🚊', '🚉', '🚁','🛫', '🛬', '🛶', '⛵', '🚤', '🚀', '🛸','🚢'];


app.get('/cards/:difficulty/:theme',(request,response)=>{
    let data = {cards:[]};

    if(request.params !== null){
        if(request.params.difficulty !== null && request.params.theme !== null){
            const difficulty = request.params.difficulty;
            const theme = request.params.theme;
            var cards = getCards(difficulty,theme);
            cards.forEach(card =>{
                data.cards.push(card);
            });

            cards.forEach(card => {
                data.cards.push(card);
            });
            shuffleArray(data.cards);
            
        }
    }
    response.send(JSON.stringify(data));
});

app.get('/scores', (request, response) => {
    console.log(request);
    console.log(request);
    response.send('score list');
});



app.listen(port, () =>{
    console.log(`App is listening on port ${port}`)
});

function randomInteger(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getIconIndex(inconIndex,iconList){
    let newIconIndex = randomInteger(0, (iconList.length - 1));
    if(inconIndex === newIconIndex){
        return getIconIndex(inconIndex,iconList);
    }
    return newIconIndex; 
}

function getCards(difficulty,theme){
    let cards = [];
    let iconList = null;
    switch (theme){
        case 'food':
            iconList = food;
            break;
        case 'animals':
            iconList = animals;
            break;
        case 'faces':
            iconList = faces;
            break;
        case 'vehicles':
            iconList = vehicles;
            break;
        default:
            break;
    }

    for(let i=0; i<difficulty;i++){
        let index = getIconIndex(-1,iconList);
        let card = {
            "isDiscovered":false,
            "icon": iconList[index],
            "id":index
        }
        cards.push(card);
    }
    return cards;
};

function shuffleArray(array){
    for(let i= array.length - 1; i > 8; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [array[i],array[j]] = [array[j],array[i]];
    }
}



