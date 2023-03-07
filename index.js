const express = require('express')
const bodyParser = require('body-parser')
const path= require('path');
const trello= require('./auth')
var myListId ='64061fc09ee54fc14109fe6b'

const app = express();
app.use(express.static(__dirname))

app.use(bodyParser.urlencoded({ extended: true }))


app.get('/', (req,res)=>{
     res.sendFile(path.join(__dirname+'/index.html'),(err)=>{
        if(err)
            console.log(err)
     });
     

})
  

app.post('/',(req,res)=>{
    var name=req.body.name;
     var extraParam ={
        desc:req.body.description,
        due:new Date(req.body.due_date),
        start:new Date(req.body.start_date),
        pos:'top' 
     }
    //  creating trello card using addCardWithExtraParams function
     trello.addCardWithExtraParams(name,extraParam,myListId,(err,card)=>{
        if(err){
             console.log(err.message)
        }
        else{
            console.log(card.name)
             res.sendFile(path.join(__dirname+'/success.html'));
        }    
     } )  
})

app.listen(5000, ()=>{
    console.log("server is running on port 5000")
})


