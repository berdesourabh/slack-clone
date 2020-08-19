import React from "react";
import "./Message.css";

function Messsage({ message, user, userImage, timeStamp }) {
  return (
    <div className="message">
      <img className="message__avatar" src={userImage} alt={user} />
      <div className="message__info">
        <h4>
          {user}{" "}
          <span className="message__timeStamp">
            {new Date(timeStamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Messsage;
