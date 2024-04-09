import React from 'react'
import './patientpage.scss'
import Sidebar from '../../DashBoard/Sidebar'
import Navbar1 from '../../DashBoard/Navbar1'
import SinglePatient from './SinglePatient'
function ViewPatient() {
  return (
    <div className='list'>
    <Sidebar />
    <div className="listContainer">
        <Navbar1 />
        <SinglePatient/>
    </div>
</div>
  )
}

export default ViewPatient