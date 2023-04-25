import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getName, getAvatar } from "./generateDetails";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const provider = new GoogleAuthProvider();
  //   const navigate = useNavigate();

  const signUpGoogle = () => {
    signInWithPopup(auth, provider)
      .then(async ({ user }) => {
        const name = await getName();
        setEmail(user.email);
        const prpURL = await getAvatar(name, user);
        updateProfile(user, {
          displayName: name,
          photoURL: prpURL,
        }).then(() => {
          setDoc(doc(db, "users", user.uid), {
            name: name,
            email: user.email,
            photoURL: prpURL,
            bio: "",
            journal: [],
            friends: [],
          });
        });
        console.log("Sign Up done");
        console.log("displayName set: " + name);
        // navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        const name = await getName();
        const prpURL = await getAvatar(name, user.uid);
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: prpURL,
        }).then(() => {
          setDoc(doc(db, "users", auth.currentUser.uid), {
            name: name,
            email: email,
            photoURL: prpURL,
            bio: "",
            journal: [],
            friends: [],
          });
          console.log("added email: " + email);
          console.log("displayName set: " + name);
          console.log("user created successfully");
          //   navigate("/");
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="container" style={{ width: "100%", padding: "0" }}>
      <form onSubmit={signUp}>
        <h1 style={{ fontSize: "25px" }}>Sign Up to Your Account</h1>
        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Email"
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Password"
        />
        <br />

        <button
          type="submit"
          className="subm"
          style={{ width: "75px", height: "40px" }}
        >
          Sign Up
        </button>
        <br />
      </form>
      <h4>Or</h4>
      <span>
        Sign Up using &nbsp;
        <img
          style={{ maxWidth: "20px", maxHeight: "20px" }}
          onClick={signUpGoogle}
          src="https://i.postimg.cc/VkYvZMZJ/search.png"
          alt=""
        />
      </span>
    </div>
  );
};

export default SignUp;
