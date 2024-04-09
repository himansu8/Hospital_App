import React from 'react'
import './messagepage.scss'
import Sidebar from '../../DashBoard/Sidebar'
import Navbar1 from '../../DashBoard/Navbar1'
import Messages from '../../DashBoard/Messages'
function MessagePage() {
  return (
    <div className='AdminPage'>
    <Sidebar className='AdminPage' />
    <div className="admincontainer">
     <Navbar1/>
    <Messages />
    </div>
  </div>
  )
}

export default MessagePage