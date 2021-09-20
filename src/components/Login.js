import { Link,useHistory } from "react-router-dom";
import "./styles/Login.css"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";


const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (event)=>{
        event.preventDefault();
        const auth  = getAuth();//remove this if now working 
        signInWithEmailAndPassword(auth,email,password)
        .then((auth)=>{
            //logging in success
            history.push('/');

        }).catch((e)=>alert(e.message));
    }

    const register = (event)=>{
        event.preventDefault();
        const auth  = getAuth();//remove this if not working 
        createUserWithEmailAndPassword(auth,email,password)
        .then(auth=>{
            //creating a user,redirecting to home
            history.push('/');
        }).catch((e)=>alert(e.message));
        

    }


    return ( 
        <div className="login">
        <Link to= "/">
        <img className = 'login__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
        </Link>

        <div className="login__container">
            <h1>Sign in</h1>
            <form action="">
                <h5>E-mail</h5>
                <input value = {email} onChange ={event=>setEmail(event.target.value)} type="email" />
                <h5>Password</h5>
                <input value = {password} onChange ={event=>setPassword(event.target.value)} type="password" />
                <button onClick = {login} type = 'submit' className = 'login__signInButton'>Sign In</button>
            </form>
            <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
            <button  onClick = {register} className = 'login__registerButton'>Create your Amazon Account</button>
        </div>

        </div>
     );
}
 
export default Login;