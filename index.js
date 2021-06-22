const express = require('express');
const app = express();
const port = 8000;

//using express.router
app.use('/', require('./routes'));

//set up the view engin
app.set('view engine', 'ejs');
app.set('views', './views'); 


app.listen(port, function(err){
    if(err){
        console.log(`Error while running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
})