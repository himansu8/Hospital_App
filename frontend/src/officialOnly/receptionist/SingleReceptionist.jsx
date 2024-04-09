import  axios  from 'axios'
import React, { useEffect, useState } from 'react'
import {Link, useLocation} from "react-router-dom"
import './singlereceptionist.scss'
function SingleReceptionist() {
    const { state } = useLocation();
    const [receptionist, setReceptionist] = useState({})
    const referenceNo = state.referenceNo
  
    const fetchReceptionist = async (referenceNo) => {
      try {
        let res = await axios.get(`/api/receptionist/${referenceNo}`);
        setReceptionist(res.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
        fetchReceptionist(referenceNo);
    }, [referenceNo]);
  return (
    <div className="single-doctor-container">
    <Link to="/receptionist" className="back">
      BACK
    </Link>
    <table className="single-doctor-table">
      <tbody>
        <tr>
          <th> Id:</th>
          <td>{receptionist._id}</td>
        </tr>
        <tr>
          <th>Name:</th>
          <td>{receptionist.name}</td>
        </tr>
        <tr>
          <th>User Name:</th>
          <td>{receptionist.userName}</td>
        </tr>
        <tr>
          <th>Gender:</th>
          <td>{receptionist.gender}</td>
        </tr>
        <tr>
          <th>Email:</th>
          <td>{receptionist.email}</td>
        </tr>
        <tr>
          <th>Mobile Number:</th>
          <td>{receptionist.mobile}</td>
        </tr>
        <tr>
          <th>Address:</th>
          <td>{receptionist.address}</td>
        </tr>

        {/* <tr>
          <th>Added By:</th>
          <td>{doctor.addedByDean}</td>
        </tr> */}
      </tbody>
    </table>
  </div>
  )
}

export default SingleReceptionist