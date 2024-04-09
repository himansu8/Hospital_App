import React from 'react'
import Sidebar from '../../DashBoard/Sidebar'
import AdminDashBoard from '../../DashBoard/AdminDashBoard'
import './adminpage.scss'
import Navbar1 from '../../DashBoard/Navbar1'
function AdminPage() {
  return (
    <div className='AdminPage'>
      <Sidebar className='AdminPage' />
      <div className="admincontainer">
       <Navbar1/>
      <AdminDashBoard  />
      </div>
    </div>
  )
}

export default AdminPage