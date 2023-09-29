import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { auth } from "../firebase";
import { AuthContext } from "../Context/AuthenticationContext";

function NavigationMenu(){
    const {currentUser} = useContext(AuthContext);
    return(
        <div className="navbar">
            <div className="logo-section">
            {/* <img src={currentUser.photoURL} alt=""/> */}
            </div>
            <div className="user-section">
                {/* <span>{currentUser.displayName}</span> */}
                
                <button onClick={()=>signOut(auth)}>Logout</button>
            </div>
        </div>
    );
}

export default NavigationMenu;