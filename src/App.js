import React, { useState } from 'react';
import './App.css';
import msgIcon from './images/chatbox-icon.png';
import profileImg from './images/image.png';

function App() {
  const [click, setClick] = useState(false);

  // const showChatBox = () => {
  // }

  return (
    <div className="container">
      <div className="chatbox">
        <div className="chatbox__support" style={{ opacity: click ? "1" : "0" }}>
          <div className="chatbox__header">
            <div className="chatbox__image--header">
              <img src={profileImg} alt="image" />
            </div>
            <div className="chatbox__content--header">
              <h4 className="chatbox__heading--header">Chat support</h4>
              <p className="chatbox__description--header">There are many variations of passages of Lorem Ipsum available</p>
            </div>
          </div>
          <div className="chatbox__messages">
            <div>
              <div className="messages__item messages__item--visitor">
                Can you let me talk to the support?
                      </div>
              <div className="messages__item messages__item--operator">
                Sure!
                      </div>
              <div className="messages__item messages__item--visitor">
                Need your help, I need a developer in my site.
                      </div>
              <div className="messages__item messages__item--operator">
                Hi... What is it? I'm a front-end developer, yay!
                      </div>
              <div className="messages__item messages__item--visitor">
                Can you let me talk to the support?
                      </div>
              <div className="messages__item messages__item--operator">
                Sure!
                      </div>
              <div className="messages__item messages__item--visitor">
                Need your help, I need a developer in my site.
                      </div>
              <div className="messages__item messages__item--operator">
                Hi... What is it? I'm a front-end developer, yay!
                      </div>
            </div>
          </div>
          <div className="chatbox__footer">
            <input type="text" placeholder="Write a message..." />
            <p className="chatbox__send--footer">Send</p>
          </div>
        </div>
        <div className="chatbox__button" onClick={() => setClick(!click)}>
          <button><img src={msgIcon}
            style={{
              width: "60%"
            }}
          /></button>
        </div>
      </div>
    </div>
  );
}

export default App;
