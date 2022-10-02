import React from "react";
import styled from "styled-components";
import SideDrawer from "../Components/miscellaneous/SideDrawer";
// import './VideoChat.css'
import VideoChat from "../Components/VideoComp/VideoChat";
import { ChatState } from "../Context/ChatProvider";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-family: Helvetica, Arial, sans-serif;
  color: #333e5a;
min-height: 100%;

  header{
    font-size: 2rem;
    margin: 1rem 0 1rem 0;
    padding: 1rem 0;
    width: 100%;
    background: #f0293e;
    color: #fff;
    text-align: center;
    flex-grow: 0;
  }

  h1 {
    font-weight: 300;
    padding: 0.4em 0;
  }
  
  #root {
    min-height: 100vh;
  }
  
  .app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  main {
    background: #ffffff;
    flex-grow: 1;
  }
  
  form {
    max-width: 300px;
    margin: 0 auto;
  }
  
  h2 {
    font-weight: 300;
    margin-bottom: 1em;
    text-align: center;
  }
  
  form > div {
    width: 100%;
    margin-bottom: 1em;
  }
  form > div > label {
    display: block;
    margin-bottom: 0.3em;
  }
  form > div > input {
    display: block;
    width: 100%;
    font-size: 16px;
    padding: 0.4em;
    border-radius: 6px;
    border: 1px solid #333e5a;
  }
  
  button {
    background: #333e5a;
    color: #fff;
    font-size: 16px;
    padding: 0.4em;
    border-radius: 6px;
    border: 1px solid transparent;
  }
  button:hover {
    filter: brightness(150%);
  }
  
  .room {
    position: relative;
  }
  .room button {
    position: absolute;
    top: 0;
    right: 20px;
  }
  .room > h3 {
    text-align: center;
    font-weight: 300;
    margin-bottom: 1em;
  }
  
  .local-participant {
    text-align: center;
    margin-bottom: 2em;
  }
  .remote-participants {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding: 0 2em 2em;
  }
  .participant {
    background: #333e5a;
    padding: 10px;
    border-radius: 6px;
    display: inline-block;
    margin-right: 10px;
  }
  .participant:last-child {
    margin-right: 0;
  }
  .participant h3 {
    text-align: center;
    padding-bottom: 0.5em;
    color: #fff;
  }
  
  video {
    width: 100%;
    max-width: 600px;
    display: block;
    margin: 0 auto;
    border-radius: 6px;
  }
`;

const VideoCall = () => {
  const { user } = ChatState();
  return (
    <>
    {user && <SideDrawer />}
      <Section>
        <header>
          <h1>Interact with Blahajs/Pitchers on Live Video Call</h1>
        </header>
        <main>
          <VideoChat />
        </main>
      </Section>
    </>
  );
};

export default VideoCall;
