const jwt = require("jsonwebtoken")



const name ="nito";
const secret ="124";
const token = jwt.sign(name,secret);

const verfyresp= jwt.verify(token,secret);




console.log(token);
console.log(verfyresp);