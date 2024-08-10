import React from 'react'
import SideBar from '../../components/sidebar/SideBar.jsx'
import MessageContainer from '../../components/messageContainer/MessageContainer.jsx'
const Home = () => {
    return (
        <div className="flex h-[90vh] relative bg-gray-600 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40">            
           <SideBar/>
           <MessageContainer/>
        </div>
    )
}

export default Home
