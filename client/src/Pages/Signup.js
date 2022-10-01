import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Section = styled.div`
/* display: flex; */
/* align-items: center; */
/* justify-content: center; */

form{
  display: flex;
  flex-direction: column;
align-items: center;
justify-content: center;
}
`

const Signup = () => {
  const [userDetails, setuserDetails] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [role, setRole] = useState("sponsor");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userDetails);
    console.log(role);
    localStorage.setItem("sharkTank-user", JSON.stringify(userDetails));
    if (role === "pitcher") {
      navigate('/pitcher-details')
    } else {
      navigate('/')
    }
  };

  const handleChange = (e) => {
    setuserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  return (
    <Section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={userDetails.name}
          placeholder="Username"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="email"
          name="email"
          value={userDetails.email}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="password"
          name="password"
          value={userDetails.password}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="password"
          name="confirmPassword"
          value={userDetails.confirmPassword}
          onChange={(e) => handleChange(e)}
        />
        <div>Select your Role</div>
        <div
          onClick={() => {
            setRole("pitcher");
          }}
        >
          <input
            type="radio"
            name="role"
            value={role}
            checked={role === "pitcher"}
          />
          Pitcher
        </div>
        <div
          onClick={() => {
            setRole("shark");
          }}
        >
          <input
            type="radio"
            name="role"
            value={role}
            checked={role === "shark"}
          />
          Shark
        </div>
        <div
          onClick={() => {
            setRole("sponsor");
          }}
        >
          <input
            type="radio"
            name="role"
            value={role}
            checked={role === "sponsor"}
          />
          Sponsor
        </div>
        <button type="submit">Lets Go</button>
      </form>
    </Section>
  );
};

export default Signup;
