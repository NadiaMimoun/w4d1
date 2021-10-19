
var express = require('express');
var cookieParser = require('cookie-parser');
const path = require('path');
const app=express();


app.use (cookieParser());
app.use(express.urlencoded({extended:false}));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));


app.get('/',(req,res)=>{ 

    res.render("form",{
        cookie:req.cookies,
    });
});


app.post('/',(req,res)=>{
  
   res.cookie(req.body.key,req.body.value);
        res.redirect('/');
    
})
app.listen(3000);
