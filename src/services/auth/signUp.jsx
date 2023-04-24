import {signInWithPopup, GoogleAuthProvider,  createUserWithEmailAndPassword  } from "firebase/auth";
import {auth} from "../firebase";
import { useState } from "react";

const signUp = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const provider = new GoogleAuthProvider();

    const googleSignUP=()=>{
        signInWithPopup(auth, provider)
        .then((result) => {
            console.log("user created!");
            console.log(result);
        }).catch((error) => {
            console.log(error.message)
        });
    }

    const SignUp=()=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("user created",user)
        })
        .catch((error) => {
            console.log(error.message)
        });
    }
    return ( 
        <>
            <div className="container">
                <form onSubmit={SignUp}>
                    <label>Username:</label>
                    <input type="text" required value={name} onChange={(e)=>setName(e.target.value)} />
                    <label>Email:</label>
                    <input type="text" required value={email} onChange={(e)=>setEmail(e.target.value)} />
                    <label>Password:</label>
                    <input type="password" name="password" id="" value={password} onChange={(e)=>setPassword(e.target.value)} />
                    <button type="submit">Sign Up</button>
                </form>
            </div>
            <span>Or <br />
            <button onClick={googleSignUP}>Google</button>
            </span>
        </>
     );
}
 
export default signUp;