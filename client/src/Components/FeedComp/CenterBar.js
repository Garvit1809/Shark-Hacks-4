import React from 'react'
import styled from "styled-components";
import axios from "axios";
import Post from './Post';


const Section = styled.div`
  flex: 5.5;
  padding: 20px;
`;

const CenterBar = () => {
  return (
    <Section>
    <Post/>
    </Section>
  )
}

export default CenterBar