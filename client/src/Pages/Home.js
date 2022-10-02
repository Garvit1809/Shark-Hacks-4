import React from "react";
import styled from "styled-components";
import SideDrawer from "../Components/miscellaneous/SideDrawer";
import { ChatState } from "../Context/ChatProvider";

import img1 from "../Assets/SharkImage1.webp";
import img2 from "../Assets/SharkImage2.jpg";
import img3 from "../Assets/SharkImage3.jpg";
import img4 from "../Assets/SharkImage4.jpg";
import pitch from "../Assets/Pitcher.jpg";
import sponsorImagge from '../Assets/Sponors.jpg'
import { Link } from "react-router-dom";

const Section = styled.div`
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const About = styled.div`
  width: 100%;
  margin: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-around;

  img {
    width: 30%;
    height: 50vh;
    object-fit: cover;
    border-radius: 20px;
    /* border: 1px solid red; */
  }

  div{
    /* border: 1px solid red; */
    width: 60%;
    padding-right: 2rem;
    font-size: 1.2rem;
    /* color: white; */
    font-weight: 600;
  }

  p{
    margin-bottom: 1rem;
  }
`;

const Blahajs = styled.div`
  width: 100%;
  margin: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-around;

  img {
    width: 30%;
    height: 50vh;
    object-fit: cover;
    border-radius: 20px;
    /* border: 1px solid red; */
  }

  div {
    /* border: 1px solid red; */
    width: 60%;
    padding-left: 2rem;
    font-size: 1.2rem;
    /* color: white; */
    font-weight: 600;
  }

  p{
    margin-bottom: 2rem;
  }
`;

const Pitchers = styled.div`
  width: 100%;
  margin: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-around;

  img {
    width: 30%;
    height: 50vh;
    object-fit: cover;
    border-radius: 20px;
    /* border: 1px solid red; */
  }

  div {
    /* border: 1px solid red; */
    width: 60%;
    padding-right: 2rem;
    font-size: 1.2rem;
    /* color: white; */
    font-weight: 600;
  }
  p{
    margin-bottom: 2rem;
  }
`;

const Sponsors = styled.div`
  width: 100%;
  margin: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-around;

  img {
    width: 30%;
    height: 50vh;
    object-fit: cover;
    border-radius: 20px;
    /* border: 1px solid red; */
  }

  div {
    /* border: 1px solid red; */
    width: 60%;
    padding-left: 2rem;
    font-size: 1.2rem;
    /* color: white; */
    font-weight: 600;
  }

  p{
    margin-bottom: 2rem;
  }
`;

const Home = () => {
  const { user } = ChatState();
  return (
    <>
      {user && <SideDrawer />}
      <Section>
        <About>
          <img src={img4} alt="" />
          <div>
          <p>
            BlahajTank is an application for Pitchers and Blahajs (INVESTORS) to share what
            they have in mind or pocket. So the Pictchers can look for Blahajs to
            make their ideas for startups come true and Sharks can finally
            choose their risky-worthy ideas to investigate their money at.
          </p>

          <button className="btn-large pink" >
          <Link to="feed" >
          Explore --{">"}
          </Link>
          </button>
          </div>
        </About>
        <Blahajs>
          <div>
            <p>
              Blahajs are the INVESTORS of Pitchers ideas as they invest
              their own money for risky-worthy ideas. Pitchers are the people
              with ideas and want to make startup but need Sharks to do so. The
              Posts page contains shared posts form Pitchers with their ideas
              included and the more details provided from the Pitcher the
              better. If you're a Shark and want to contact with a Pitcher,
              there are Chats page where they can communicate through ChatRooms or Video Call
            </p>
            <button className="btn-large pink">Look at Pitches --{">"}</button>
          </div>
          <img src={img1} alt="" />
        </Blahajs>
        <Pitchers>
          <img src={pitch} alt="" />
          <div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, delectus incidunt. Fugiat veritatis deserunt cupiditate omnis eveniet sunt eligendi, nesciunt, provident adipisci aperiam delectus aspernatur velit necessitatibus architecto veniam autem!</p>
          <button className="btn-large pink">Pitch your Ideas --{">"}</button>
          </div>
        </Pitchers>
        <Sponsors>
        <div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint ratione, aliquam labore nostrum eveniet repellat impedit qui, dolores incidunt dolorem aspernatur? Aperiam deleniti nisi eius, ducimus dolorem odit sunt harum.</p>
        <button className="btn-large pink">Make Small Investments --{">"}</button>
        </div>
        <img src={sponsorImagge} alt="" />
        </Sponsors>
      </Section>
    </>
  );
};

export default Home;
