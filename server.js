// 1
const express = require('express') ;

// 5
const fs = require('fs') ;

const v = require('./verifv') ;

// 2
const app = express();

// 3
const PORT = 6300 ;


// 6
app.get('/',v,(req,res)=>{
    fs.readFile('./Homepage.html','utf8',(err,data)=>{
        err?res.end('FILE NOT FOUND')&&console.error(err) :res.end(data);
    })
})

app.get('/Homepage.html',v,(req,res)=>{
    fs.readFile('./Homepage.html','utf8',(err,data)=>{
        err?res.end('FILE NOT FOUND')&&console.error(err) :res.end(data);
    })
})

app.get('/Contactus.html',v,(req,res)=>{
    fs.readFile('./Contactus.html','utf8',(err,data)=>{
        err?res.end('FILE NOT FOUND')&&console.error(err) :res.end(data);
    })
})

app.get('/OurServices.html',v,(req,res)=>{
    fs.readFile('./OurServices.html','utf8',(err,data)=>{
        err?res.end('FILE NOT FOUND')&&console.error(err) :res.end(data);
    })
})







// 4
app.listen(PORT,(req,res)=>{
    console.log(`server runnig : port ${PORT}...`)
}) ;
