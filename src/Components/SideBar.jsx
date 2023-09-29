import React from "react";
import NavigationMenu from "./NavBar";
import SearchBar from "./Search";
import ChatLists from "./ChatList";

function SideBar(){
    return(
        <div className="sidebar">
            <NavigationMenu/>
            <SearchBar/>
            <ChatLists/>
        </div>
    );

}

export default SideBar;