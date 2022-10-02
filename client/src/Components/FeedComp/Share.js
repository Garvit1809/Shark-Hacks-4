import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import FileBase64 from "react-file-base64";
// import ImageIcon from "@mui/icons-material/Image";
import axios from 'axios';
import { Input } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/toast";
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

const Share = () => {
  const [postDescription, setPostDescription] = useState('');
  const [postImage, setPostImage] = useState();

  const toast = useToast();

  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchUserData() {
      if (localStorage.getItem("blahajTank-user")) {
        setCurrentUser(await JSON.parse(localStorage.getItem("blahajTank-user")));
        setIsLoading(true)
      }
    }
    fetchUserData();
  }, []);
  
  const handleSubmit = async (e) => {
    // e.preventDefault();
    // console.log(post);
    const userData = await JSON.parse(localStorage.getItem("blahajTank-user"));
    const { data } = await axios.post("http://localhost:5000/api/posts/post", {
      author: userData.name,
      pic: userData.pic,
      postDescription,
      postImage
    });
    console.log({data});
    // console.log("posted");
  };

  const postDetails = (pics) => {
    if (pics === undefined) {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    console.log(pics);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "chat-app");
      data.append("cloud_name", "dkgrvhkxb");
      fetch("https://api.cloudinary.com/v1_1/dkgrvhkxb/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPostImage(data.url.toString());
          console.log(data);
          console.log(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
  };
  return (
    isLoading && <Section>
      <Top>
        <img src={currentUser.pic} alt="user" />
        <div>
        <h2>{currentUser.name}</h2>
        <p>{currentUser.role}</p>
        </div>
      </Top>
      <hr className="shareHr" />
      <Bottom>
        <form onSubmit={handleSubmit}>
          <textarea
            cols="30"
            rows="4"
            placeholder="Pitch your Ideas to the Blahajs/Sponsors"
            name='desc'
            value={postDescription}
            onChange={(e) => setPostDescription(e.target.value)}
          />
          <Buttons>
            <Upload>
            <Input
          type="file"
          p={1.5}
          accept="image/*"
          onChange={(e) => postDetails(e.target.files[0])}
        />
            </Upload>
            <button type="submit">Post</button> 
          </Buttons>
        </form>
      </Bottom>
    </Section>
  )
}

export default Share