import axios from "axios";
import { useState } from "react";


export default function Form(props) {
  const [user,setUser] = useState("");
  const [pwd,setPwd] = useState("");


async function handleSubmit(e){

  e.preventDefault();
  console.log(user);

const response = await axios.post("http://localhost:3000/user",{details})
.then((response) => {
  console.log(response.data);
  console.log(response.data.success)
    props.setIsLogedIn(response.data.success)
})
.catch((error) => {
  console.error(error);
})
setUser("");

}



  return (
    <>
    <h1>hallo</h1>

    <form onSubmit={handleSubmit}>
      <input type="text" value={user} id="un1" onChange={(e)=>{setUser(e.target.value)}} placeholder='enter username'required/>
      <input type="password" value={pwd} id="pwd1" onChange={(e)=>{setPwd(e.target.value)}} placeholder='enter password'required/>
      <input type="submit" value="submit" />
    </form>
    {user}




    </>
  )
}

