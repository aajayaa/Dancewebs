const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 80;

// EXPRESS RELATED STUFF
app.use('/static',express.static('static'))  // For serving static files
app.use(express.urlencoded())

// PUG RELATED STUFF
app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))

app.get('/',(req ,res)=>{
    const params  = {'title':'Dance Website',  'message':'Welcome to my dance website..'}
    res.status(200).render('home.pug',params)
})
app.get('/contact',(req ,res)=>{
    const params  = {'title':'Dance Website',  'message':'Welcome to my dance website..'}
    res.status(200).render('contact.pug',params)
})


// Start the server 
app.listen(port , ()=>{
    console.log('The server has been started successfully..')
})