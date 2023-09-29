import React from "react";
import SideBar from "../Components/SideBar"
import ChatPage from "../Components/ChatSection";


function Home(){
    return(
        <div className="home">
            <div className="Chat-Body">
                <SideBar/>
                <ChatPage/>
            </div>
        </div>
    )
}

export default Home;