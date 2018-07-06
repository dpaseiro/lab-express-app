const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/Street-Fighter');
app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: true}));

const fighterSchema = new Schema ({
    name: String,
    country: String,
    SignatureMove: String
})

const Fighters = mongoose.model('Character', fighterSchema);

app.get('/', (req, res, next) => {
    res.render('index');
});

app.get('/fighters', (req, res, next)=>{
    Fighters.find()
    .then((listOfFighters)=>{
        console.log("========================= ", listOfFighters)
        res.render('fighters', {fightersArray: listOfFighters})
    })
    .catch((err)=>{
        res.send(err);
    })

})

app.get('/fighters/:id', function (req, res, next) {
    const theID = req.params.id;

    Fighters.findById(theID)
    .then((oneFighter)=>{
        console.log("------------------ ", oneFighter);
        res.render('singleFighter', {fighter: oneFighter})
    })
    .catch((err) => {
        res.send(err);
    })
})







app.listen(3000, () => console.log('example app listening on port 3000!'))