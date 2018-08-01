var express = require('express');
var app = express();
var port = 9091;
var host = '127.0.0.1';

app.use(express.static('client'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var lions = [
    {
        'id': 1,
        'name': 'Simba',
        'pride': 'The cool cats',
        'age': 3,
        'gender': 'male'
    },
    {
        'id': 2,
        'name': 'Mufasa',
        'pride': 'The bad cats',
        'age': 4,
        'gender': 'male'
    }
];
var id = 2;

app.get('/lion', (req,res)=>{
    res.json(lions);
});

app.get('/lions/:id', (req,res)=>{
    var lion = lions.find(lion=>{
        return lion.id == req.params.id;
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