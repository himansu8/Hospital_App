import React from 'react'
import './receptionistpage.scss'
import Sidebar from '../../DashBoard/Sidebar'
import Navbar1 from '../../DashBoard/Navbar1'
import SingleReceptionist from './SingleReceptionist'
function Viewreceptionist() {
  return (
    <div className='list'>
    <Sidebar />
    <div className="listContainer">
        <Navbar1 />
        <SingleReceptionist/>
    </div>
</div>
  )
}

export default Viewreceptionist