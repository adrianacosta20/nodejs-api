var express = require('express');
var app = express();
var port = 9091;
var host = '127.0.0.1';

var jsonData = { count: 12, message : 'hey'};

app.get('/', (req,res)=>{
    //res.sendFile takes an absolute path to a file and sets the mime type based on file extension
    res.sendfile(__dirname+'/index.html', (err)=>{
        if(err) res.status(500).send(err);
    });
});

app.get('data', (res,req)=>{
    res.json(jsonData);
})

app.listen(port, host, () =>{
    console.log('Listening on http://localhost:',port);

})