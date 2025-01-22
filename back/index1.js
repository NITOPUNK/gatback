const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.json());

app.use(express.static("public"));




app.set("view engine","ejs");

app.get("/",(req,res)=>{

    res.render("home");

})










function sampleMiddleware(req,res,next)
{
    const name = req.body.name;
    if(name === "nit")
        next();
    else
        res.send("fail");
      
}


function samIpAddress(req,res,next){
    const ip = req.headers.ip;
    if(ip == 1234)
        next();
    else
        res.send("invalid ip ");

}



app.post("/user", sampleMiddleware,samIpAddress,(req,res)=>{
   
    res.send("succes in use route ");
 
})

app.put("/log",sampleMiddleware,samIpAddress,(req,res)=>{
 
    res.send("succes in use route ");
 
 
})

app.put("/sign",sampleMiddleware,samIpAddress,(req,res)=>{

    res.send("succes in use route ");
 
  
 
})




app.listen(3000,()=>{
    console.log("server started")
});

