const express = require("express");
const app = express();
const PORT=process.env.PORT || 3000;

const fs =  require("fs");

app.use(express.json())

app.get("/pages",(req,res)=>{

   // const pN =req.query.pN
   // const name =req.query.un;
    //const email = req.query.email;
    const {un,email} = req.query;
    res.send(`${un} and ${email}`);

})


app.get("/login",(req,res)=>{
    res.send("logged in secessfully");
})

app.post("/userl",(req,res)=>{
   

    const name = req.body.name;


    fs.writeFile("./a.txt",name,
    (err)=>{
    res.send(name)
    console.log('write file ');
    
    }
    
    )

})




app.post("/user",(req,res)=>{
    const name = req.headers.name;
    const pwd1 = req.headers.pwd;

    fs.readFile("./a.json","utf8",(err,data)=>{
       

        console.log("loaded")
        const user = JSON.parse(data);
        var un =user.name;
        var pwdd=user.pwd;
        console.log(`${user.name}  ${user.pwd}`);
        console.log(`${name}  ${pwd1}`);
        

        if(un === name && pwdd ===pwd1)
            res.send("logged in secessfully");
        else
             res.send("wrong user name or password");

    })


})








app.put("/putstuff",(req,res)=>{
    res.send("putting stuff")
})


app.delete("/del",(req,res)=>{
    res.send("delete")

})



app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`);
});


