var express = require('express');
var app = express();
var path = require('path');
var port = 9091;
var host = '127.0.0.1';

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:9091');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(express.static(__dirname+'/../client'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var cars = [
    {
        'id': 1,
        'name': 'Toyota',
        'description': 'Japanese car',
        'year': 2010,
    },
    {
        'id': 2,
        'name': 'Ford',
        'description': 'American car',
        'year': 2004
    }
];

var id = 2;

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname+'/../client/index.html'));
});

app.get('/get-cars', (req,res)=>{
    res.json(cars);
});

app.get('/cars/:id', (req,res)=>{
    var car = cars.find(car=>{
        return car.id == req.params.id;
    });
    res.json(lion || {});
});

app.post('/lions', (req,res)=>{
    var lion = req.body;
    i++;
    lion.id = id+'';
    lions.push(lion);
});

app.put('/lions/:id', (req,res)=>{
    var update = req.body;
    if(update.id) delete update.id;
    var lion = lions.findIndex(lion=> lion.id = req.params.id);    
    if(!lions[lion]){
        res.send();
    }else{
        var updatedLion = Object.assign(lions[lion], updated);
        res.json(updatedLion);
    };
});

app.delete('/lions/:id', (req,res)=>{
    var lion = lions.findIndex(lion=> lion.id == req.params.id);
    if(!lions[lion]){
        res.send();
    }else{
        var deletedLion = lions[lion];
        lions.splice(lion,1);
        res.json(deletedLion);
    };
});

app.listen(port, host, () => {
    console.log('Listening on http://localhost:', port);

});