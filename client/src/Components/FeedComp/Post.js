import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import FileBase64 from "react-file-base64";
// import ImageIcon from "@mui/icons-material/Image";
import axios from 'axios';
// import Button from "./Button";

const Section = styled.div`
  width: 100%;
  height: auto;
  border-radius: 10px;
  padding: 10px;
  -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  @media only screen and (max-width: 700px) {
    /* border: 1px solid red; */
    width: 90%;
    margin: 0 auto;
}
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  /* border: 1px solid red; */
  
  div{
    display: flex;
    flex-direction: column;
    /* border: 1px solid red; */
    align-items: flex-start;
    justify-content: center;
  }
  
  h2{
    /* border: 1px solid red; */
    margin-top: 0.6rem;
    margin-bottom: 0rem;
  }
  
  p{
    /* border: 1px solid red; */
    margin: 0;
    margin-bottom: 0.4rem;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
  }
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */

  textarea {
    width: 90%;
    margin-bottom: 1rem;
    resize: none;
    font-size: 1.2rem;
    &:focus {
      outline: none;
    }
  }

  button {
    width: 3rem;
    border: none;
    padding: 7px;
    border-radius: 5px;
    background-color: green;
    font-weight: 500;
    margin-right: 20px;
    cursor: pointer;
    color: white;
  }

  button.upload {
    width: 7rem;
  }

  @media only screen and (max-width: 700px) {
    textarea{
      width: 95%;
    }
}
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 700px) {
    display: flex;
    justify-content: space-between;

    button{
    }
}

  @media only screen and (max-width: 400px) {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }
`;

const Upload = styled.div`
    display: flex;
    align-items: center;
    svg {
      padding-right: 0.1em;
    }
`;

const Post = () => {
  return (
    <div>Post</div>
  )
}

export default Post