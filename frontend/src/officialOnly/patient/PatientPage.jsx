import React from 'react'
import Sidebar from '../../DashBoard/Sidebar'
import Navbar1 from '../../DashBoard/Navbar1'
import './patientpage.scss'
import Patient from '../../DashBoard/Patient'
function PatientPage({ columns }) {
  return (
    <div className='list'>
    <Sidebar />
    <div className="listContainer">
        <Navbar1 />
        <Patient columns={columns} />
    </div>
</div>
  )
}

export default PatientPage