import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import Login from "../Components/AuthComp/Login";
import Signup from "../Components/AuthComp/Signup";

// const Section = styled.div`
//   /* display: flex; */
//   /* align-items: center; */
//   /* justify-content: center; */

//   form {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//   }
// `;

const Auth = () => {
  // const [userDetails, setuserDetails] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  // });
  // const [role, setRole] = useState("sponsor");

  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("blahajTank-user"));

    if (user) navigate("/");
  }, [navigate]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(userDetails);
  //   console.log(role);
  //   localStorage.setItem("sharkTank-user", JSON.stringify(userDetails));
  //   if (role === "pitcher") {
  //     navigate('/pitcher-details')
  //   } else {
  //     navigate('/')
  //   }
  // };

  // const handleChange = (e) => {
  //   setuserDetails({ ...userDetails, [e.target.name]: e.target.value });
  // };

  return (
    <Container maxW="xl" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="4xl" fontFamily="Work sans">
          BlahajTank
        </Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Auth;
