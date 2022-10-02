import React, { useState, useEffect } from "react";
import styled from "styled-components";
import UserImg from '../../Assets/one-piece-portgas-d-ace-anime-wallpaper-preview.jpg'

const Section = styled.div`
  flex: 2.5;
  height: calc(100vh - 50px - 5rem);
  /* height: auto */
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;

  hr {
    height: 1px;
    width: 80%;
    border: none;
    background-color: #DADADA;
  }

  @media only screen and (max-width: 700px) {
    position: relative;
    /* height: fit-content; */
    /* border: 4px solid black; */
    hr{
      margin: 0rem auto;
    }
  }
`;

const Details = styled.div`
  width: 90%;
  min-height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 25px;
  margin-top: 1.25rem;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  /* border: 1px solid red; */

  img {
    width: 85%;
    height: 45%;
    object-fit: cover;
    border-radius: 10px;
  }

  @media only screen and (max-width: 700px) {
    /* min-height: auto; */
    /* height: fit-content; */
    height: 60vh;
    /* border: 4px solid black; */
    img{
      margin-top: 1rem;
      height: 60%;
    }

  }
  
`;

const Credentials = styled.div`
  width: 80%;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.4rem;
  /* border: 1px solid black; */

  h4 {
    font-weight: 300;
    font-size: 0.8rem;
    font-weight: 600;
  }

  h5 {
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
  }

  @media only screen and (max-width: 700px) {
    display: flex;
    flex-direction: row;
    height: auto;
    h4{
      margin: 0 auto;
      font-size: 0.8rem;
    }
    h5{
      margin: 0.5rem auto;
      font-size: 0.7rem;
    }
  }
`;

const Info = styled.div`
  width: 80%;
  min-height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: center; */
  
  @media only screen and (max-width: 700px) {
    min-height: auto;
    padding: 0.4rem auto;
    margin-top: 1rem;
    margin-bottom: 0;
    border: 1px solid black;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }
`;

const InfoItem = styled.div`
  height: 2rem;
  
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  /* border: 1px solid red; */

  svg {
    padding-right: 0.5rem;
  }

  p{
    font-weight: 200;

    span{
      color: orange;
      font-weight: 500;
    }
  }
`;

export default function Sidebar() {
  const [currentUser, setCurrentUser] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    async function fetchUserData() {
      if (localStorage.getItem("blahajTank-user")) {
        const userData = await JSON.parse(localStorage.getItem("blahajTank-user"))
        setCurrentUser(userData);
        setIsLoading(true)
      }
    }
    fetchUserData();
  }, [])

  return (
    isLoading && <Section>
      <Details>
        <img src={currentUser.pic} alt="user" />
        <Credentials>
          <h4>Credential and Highlights</h4>
          <h5>🤓{currentUser.role}</h5>
        </Credentials>
        <hr />
        <Info>
          <InfoItem>
            🧑
            <p>{currentUser.name}</p>
          </InfoItem>
          <InfoItem>
            🏆
            <p>Hosted <span>2</span> Campaigns</p>
          </InfoItem>
          <InfoItem>
            🥇
            <p>Contributed in <span>4</span> Campaigns</p>
          </InfoItem>
          <InfoItem>
            🥇
            <p>Participation in <span>5</span> Events</p>
          </InfoItem>
        </Info>
      </Details>
    </Section>
  );
}
