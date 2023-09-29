import React, { useContext, useState } from "react";
import Messages from "./Messages";
import InputSection from "./InputPanel";
import { ChatContext } from "../Context/ChatContext";

function ChatPage() {
  const { data } = useContext(ChatContext);
  const [isImageZoomed, setImageZoomed] = useState(false);

  // Function to toggle image zoom
  const toggleImageZoom = () => {
    setImageZoomed(!isImageZoomed);
  };

  return (
    <div className="chatPage">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <img
          src={data.user.photoURL}
          alt=""
          onWheel={toggleImageZoom}
          className={isImageZoomed ? "zoomed-image" : ""}
        />
      </div>
      <Messages />
      <InputSection />
    </div>
  );
}

export default ChatPage;
