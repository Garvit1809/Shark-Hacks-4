import React, { useEffect, useState } from "react";
import styled from "styled-components";
import moment from "moment";
import StripeCheckout from 'react-stripe-checkout'
import { Link } from "react-router-dom";

const Section = styled.div`
  width: 100%;
  height: auto;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  margin: 30px 0;
  padding: 10px;

  @media only screen and (max-width: 700px) {
    /* border: 1px solid red; */
    width: 100%;
    margin: 1rem auto;
    margin-bottom: 0;
    padding: 0;
}
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
  }

  div.postDetails {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 10px;
    /* border: 1px solid black; */
  }

  img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    object-fit: cover;
  }

  .postUsername {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 0.2rem;
    font-weight: 600;
  }

  .postDate {
    font-size: 0.8rem;
  }

  @media only screen and (max-width: 700px) {
    /* border: 1px solid red; */
    /* width: 90%; */
    margin-top: 0.4rem;
    /* margin: 0 auto; */
    div.profileImg{
      padding-left: 0.7rem;
      /* border: 1px solid black; */
      /* width: 35px; */
      /* height: 35px; */
    }

    div.postDetails{
      /* border: 1px solid black; */
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.6rem;
      width: auto;
      height: 100%;
    }
}
`;

const Center = styled.div`
  margin: 20px 0;

  img {
    margin-top: 20px;
    width: 100%;
    max-height: 500px;
    object-fit: contain;
  }

  @media only screen and (max-width: 700px) {
    /* border: 1px solid red; */
    margin-top: 10px;
}

`;

const Bottom = styled.div`
/* border: 1px solid red; */
display: flex;
align-items: center;
justify-content: space-around;
`


const Post = ({ post }) => {
  
  const [product, setProduct] = useState({
    name: "React from FB",
    price: 10,
    productBy: "facebook"
  });

  const makePayment = token => {
    const body = {
      token,
      product
    }
    const headers = {
      "Content-Type": "application/json"
    }

    return fetch(`http://localhost:5000/payment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    }).then(response => {
      console.log("RESPONSE :- ", response);
      const {status} = response;
      console.log("STATUS :- ", status);
    })
    .catch(err => console.log(err))
  };

  return (
    <Section>
      <Top>
        <div className="profileImg">
          <img src={post.pic} alt="user1" />
          <div className="postDetails">
            <span className="postUsername">{post.author}</span>
            <span className="postDate">{moment(post.createdAt).fromNow()}</span>
          </div>
        </div>
      </Top>
      <Center>
        <span>{post.postDescription}</span>
        <img src={post.postImage} alt="postImg" />
      </Center>
      <Bottom>
      <StripeCheckout
      stripeKey={process.env.REACT_APP_KEY}
      token={makePayment}
      name='Sponsor'
      amount={product.price * 100}
      >
      <button className="btn-large pink">Become a Sponsor</button>
      </StripeCheckout>
      <button className="btn-large blue" >
      <Link to="/chats" >
      Join ChatRoom
      </Link>
      </button>
      </Bottom>
    </Section>
  )
}

export default Post