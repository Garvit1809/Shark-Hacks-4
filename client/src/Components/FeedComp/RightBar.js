import React from 'react'
import styled from "styled-components";


const Section = styled.div`
  flex: 2.5;
  /* height: calc(70vh - 50px); */
  height: fit-content;
  /* height: auto; */
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;

  hr {
    height: 0.7px;
    width: 80%;
  }

  p {
    padding-left: 2.4rem;
    /* border: 1px solid black; */

    span {
      font-weight: 600;
      cursor: pointer;
      text-decoration: underline;
    }
  }

  @media only screen and (max-width: 700px) {
    /* border: 1px solid red; */
    /* position: relative; */
    margin-top: 0;
    margin-bottom: 1rem;
    /* width: 100%; */
    /* margin: 1rem auto; */
    /* padding: 0; */
}
`;

const Photos = styled.div`
  width: 90%;
  /* display: flex; */
  flex-direction: column;
  /* align-items: center; */
  /* border-radius: 25px; */
  margin-top: 1.25rem;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);

  /* border: 1px solid red; */
  @media only screen and (max-width: 700px) {
    margin-top: 0;
}
`;

const Heading = styled.h1`
  font-weight: 400;
  padding-left: 1.5rem;
  margin-bottom: 0.7rem;
  font-size: 1.5rem;
  margin-top: 1rem;
  /* border: 1px solid red; */
  `;

const Images = styled.div`
/* border: 1px solid red; */
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    width: 100px;
    height: 100px;
  }

  .lastPic {
    filter: blur(4px);
    -webkit-filter: blur(4px);
  }
`;

const RightBar = () => {
  return (
    <Section>RightBar</Section>
  )
}

export default RightBar