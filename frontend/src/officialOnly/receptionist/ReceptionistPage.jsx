import React from 'react'
import './receptionistpage.scss'
import Sidebar from '../../DashBoard/Sidebar'
import Navbar1 from '../../DashBoard/Navbar1'
import Receptionist from '../../DashBoard/Receptionist'


function ReceptionistPage({ columns }) {
  return (
    <div className='list'>
    <Sidebar />
    <div className="listContainer">
        <Navbar1 />
        <Receptionist columns={columns} />
    </div>
</div>
  )
}

export default ReceptionistPage