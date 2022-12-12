import React, { useState } from 'react'

const Login = () => {

    const [state, setState] = useState({
        email:"",
        password:""
    })

    const {email,password}= state;

    const handleOnChange=((e)=>{
        const {name,value} = e.target;
        setState({...state,[name]:value});
    })

    const handleSubmit = ((e)=>{
        e.preventDefault();
        fetch("https://vast-blue-elk-slip.cyclic.app/users/login",{
            method:"POST",
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify(state)
        }).then((res)=>res.json())
        .then((res)=>console.log(res))
        localStorage.setItem("todotoken",res.token)
        .catch((err)=>console.log(err));
        setState({email:"",password:""})
    })

  return (
    <div>
          <h1>Login Page</h1>
          <form onSubmit={handleSubmit}>
          <br /><br />
            <label htmlFor="Email">Email</label>
            <input type="email" name="email" value={email} placeholder="email" onChange={handleOnChange} required />
            <br /><br />
            <label htmlFor="Password">Password</label>
            <input type="password" name="password" value={password} placeholder="password" onChange={handleOnChange} required />
            <br /><br />
            <input type="submit" value={"Login"}/>
          </form>        
        

    </div>
  )
}

export default Login