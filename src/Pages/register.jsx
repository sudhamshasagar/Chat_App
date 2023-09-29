import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [err, setError] = useState(false);
  const navigateTo = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigateTo("/");
          } catch (err) {
            console.log(err);
            setError(true)
          }
        });
      });
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="container">
      <div className="form">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="displayName" placeholder="Your Name" className="input-field" required />
          <input type="email" name="email" placeholder="Your Email" className="input-field" required />
          <input type="password" name="password" placeholder="Create A Password" className="input-field" required />
          <label htmlFor="profilePic" className="upload-label">
            Upload Profile Picture
          </label>
          <input type="file" id="profilePic" name="profilePic" className="upload-input" accept="image/*" />
          <button type="submit" className="register-button">
            Register
          </button>
          {err && <span> Error! </span>}
          <p>If You Have an Account <Link to="/login">Login-Here</Link></p>
        </form>
      </div>
    </div>
  );
}

export default Register;
