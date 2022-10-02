import React from 'react'
import SideDrawer from '../Components/miscellaneous/SideDrawer'
import { ChatState } from '../Context/ChatProvider';

const Home = () => {
  const { user } = ChatState();
  return (
    <>
    {user && <SideDrawer />}
    <div>Home</div>
    </>
  )
}

export default Home