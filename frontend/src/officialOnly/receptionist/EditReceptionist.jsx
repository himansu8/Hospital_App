import React from 'react'
import Sidebar from '../../DashBoard/Sidebar'
import Navbar1 from '../../DashBoard/Navbar1'
import './receptionistpage.scss'
import UpdateReceptionist from './UpdateReceptionist'
function EditReceptionist() {
  return (
    <div className='list'>
    <Sidebar />
    <div className="listContainer">
        <Navbar1 />
        <UpdateReceptionist />
    </div>
</div>
  )
}

export default EditReceptionist