import React from 'react'
import { useNavigate } from 'react-router-dom'

const PitcherDetails = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/");
    }
  return (
    <div>
    <form onSubmit={handleSubmit}>
    <input type="text" name="companyName" id="" />
    
    <textarea name="companyDescription" id="" cols="30" rows="10"></textarea>
    <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default PitcherDetails