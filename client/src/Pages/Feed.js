import React from "react";
import styled from "styled-components";
import CenterBar from "../Components/FeedComp/CenterBar";
import LeftBar from "../Components/FeedComp/LeftBar";
import RightBar from "../Components/FeedComp/RightBar";
import SideDrawer from "../Components/miscellaneous/SideDrawer";
import { ChatState } from "../Context/ChatProvider";

const Section = styled.div`
  display: flex;
  width: 100%;
  min-height: 200vh;

  @media only screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;

const Feed = () => {
  const { user } = ChatState();
  return (
    <>
    {user && <SideDrawer />}
      <Section>
        <LeftBar />
        <CenterBar />
        <RightBar />
      </Section>
    </>
  );
};

export default Feed;
