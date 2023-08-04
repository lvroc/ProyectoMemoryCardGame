const express = require('express');
const app = express();
const port = 3000;
app.get('/cards',(request,response)=>{
    console.log(request);
    console.log(request);
    response.send('card list');
});
app.get('/cards', (request, response) => {
    console.log(request);
    console.log(request);
    response.send('card list');
});

app.get('/scores', (request, response) => {
    console.log(request);
    console.log(request);
    response.send('score list');
});



app.listen(port, () =>{
    console.log(`App is listening on port ${port}`)
});

