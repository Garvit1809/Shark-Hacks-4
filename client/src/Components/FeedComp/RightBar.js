import React from 'react'
import styled, { keyframes } from "styled-components";
import SharkImage1 from '../../Assets/SharkImage1.webp'
import SharkImage2 from '../../Assets/SharkImage2.jpg'
import SharkImage3 from '../../Assets/SharkImage3.jpg'

const shark = keyframes`
0%{
  transform: translateY(20%);
};
50%{
  transform: translateY(-20%);
};
75%{
  transform: translateY(0%);
};
100%{
  transform: translateY(20%);
}
`

const Section = styled.div`
  flex: 2.5;
  height: calc(90vh - 50px);
  /* height: fit-content; */
  /* height: auto; */
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
  /* border: 1px solid black; */
  position: relative;

  h2.heading{
    margin-bottom: 2rem;
    position: absolute;
    top: 2rem;
    font-size: 1.2rem;
    font-weight: 600;
  }

  img{
    animation: ${shark} 2s linear infinite;
    
  }

  h2.coming{
    margin: 0;
    position: absolute;
    font-size: 1.5rem;
    bottom: 0rem;
    color: orange;
    font-weight: 600;
  }

  hr {
    height: 0.7px;
    width: 80%;
  }

  p {
    padding-left: 2.4rem;

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

const RightBar = () => {
  return (
    <Section>
    <h2 className='heading' >💲 Trending Pitches and Investments 💲</h2>
    <img src={SharkImage1} alt="" />
    <h2 className='coming' >Coming Soon ....</h2>
    </Section>
  )
}

export default RightBar