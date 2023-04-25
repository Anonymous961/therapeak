import {signInWithPopup, GoogleAuthProvider,  signInWithEmailAndPassword  } from "firebase/auth";
import {auth} from "../firebase";
import { useState } from "react";

const signIn = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const provider = new GoogleAuthProvider();

    const googleSignIn=()=>{
        signInWithPopup(auth, provider)
        .then((result) => {
            console.log("user created!");
            console.log(result);
        }).catch((error) => {
            console.log(error.message)
        });
    }

    const SignIn=()=>{
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("user signed in",user)
        })
        .catch((error) => {
            console.log(error.message)
        });
    }

    return ( 
        <>
            <div className="container">
                <form onSubmit={SignIn}>
                    <label>Email:</label>
                    <input type="text" required value={email} onChange={(e)=>setEmail(e.target.value)} />
                    <label>Password:</label>
                    <input type="password" name="password" id="" value={password} onChange={(e)=>setPassword(e.target.value)} />
                    <button type="submit">Sign Up</button>
                </form>
            </div>
            <span>Or <br />
            <button onClick={googleSignIn}>Google</button>
            </span>
        </>
     );
}
 
export default signIn;