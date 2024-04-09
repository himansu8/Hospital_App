import React from 'react'
import Sidebar from '../../DashBoard/Sidebar'
import Navbar1 from '../../DashBoard/Navbar1'
import './patientpage.scss'
import UpdatePatient from './UpdatePatient'
function EditPatient() {
  return (
    <div className='list'>
    <Sidebar />
    <div className="listContainer">
        <Navbar1 />
        <UpdatePatient/>
    </div>
</div>
  )
}

export default EditPatient