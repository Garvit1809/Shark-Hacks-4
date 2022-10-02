import React from 'react'
import styled from 'styled-components';
// import './VideoChat.css'
import VideoChat from '../Components/VideoComp/VideoChat'

const Section = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const VideoCall = () => {
  return (
    <Section>
    <header>
      <h1>Video Chat with Hooks</h1>
    </header>
    <main>
      <VideoChat />
    </main>
    <footer>
      <p>
        Made with{' '}
        <span role="img" aria-label="React">
          ⚛️
        </span>{' '}
        by <a href="/">Blahaj</a>
      </p>
    </footer>
  </Section>
);
}

export default VideoCall