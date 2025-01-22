const express = require('express');
const app = express();
const mongoose =require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');


app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/gat')
.then(()=>{
    console.log("coneected to mongodb");
})
.catch(()=>{
    console.log("not connected");
});



const mschema = mongoose.Schema({
    user:{
        type:String,
        required:true
    },
    pwd:{
        type:String,
        required:true
    },
    isLogedIn:{
        type:Boolean,
        default:false
    }   
});


const user = mongoose.model("user",mschema);
const mysecret = "124";


app.post("/user",async(req,res)=>{
    const username = req.body.details.username;
    const password = req.body.details.password;
    const cypherpwd = jwt.sign(password,mysecret);

    if(username || password){
        const details = {
            user:username,
            pwd:cypherpwd,
            isLogedIn:true
        }
    
    

    const newuser = new user(details);

    const response =await newuser.save()
    .then((response)=>{
        if (response) {
            console.log("sent is logged in ");
            res.json({success:true,user:username});

          } else {
            res.send("not saved");
          }
    
        console.log(response);
    })
    .catch(()=>{
        res.send("user noit added ");
    })
    }

})



app.delete("/deluser",(req,res)=>{

    const username = req.body.username;

    


    user.deleteOne({user :username})
    .then(()=>{
        res.send("user deleted");
    })
    .catch(()=>{
        res.send("user note deleted")
    })


})




app.get("/find",(req,res)=>{

    const username = req.query.username;

    

    user.findOne({user :username})
    .then((docs)=>{
        console.log(docs);
        res.send("user found");
     
    })
    .catch(()=>{
        res.send("user note found")
    })


})
   
 




app.get("/",(req,res)=>{
    res.send("backend message done broo ")
});

















app.listen(3000, () => {

    console.log('Server is running on port 3000');

});