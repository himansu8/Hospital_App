import React, { useEffect, useState } from 'react';
import './admindashboard.scss';
import axios from 'axios';
import moment from 'moment';

function AdminDashBoard() {
  const [doctorData, setDoctorData] = useState([]);
  const [receptionist, setReceptionist] = useState([]);
  const [patient, setPatient] = useState([]);
  const [currentTime, setCurrentTime] = useState('');

  async function fetchDoctor() {
    try {
      let res = await axios.get('/api/doctor');
      setDoctorData(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchReceptionist() {
    try {
      let res = await axios.get('/api/receptionist');
      setReceptionist(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchPatient() {
    try {
      let res = await axios.get('/api/patient');
      setPatient(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchDoctor();
    fetchReceptionist();
    fetchPatient();
    updateCurrentTime(); // Initial call to set current time
    const intervalId = setInterval(updateCurrentTime, 1000); // Update current time every second
    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  const updateCurrentTime = () => {
    setCurrentTime(moment().format('MMMM Do YYYY, h:mm:ss a'));
  };

  return (
    <>
      <div className='admindashboard'>
        <div className="header">
          <h1 className='sm-f-24'>Welcome to Apna Hospital</h1>
        </div>
        <div className="logo">
        <img src="/logo1.png" alt="logo" className="logo-img" />
      </div>
        <div className="content">
          <div className="stats">
            <div className="stat">
              <h2>Total Doctors</h2>
              <p>{doctorData.length}</p>
            </div>
            <div className="stat">
              <h2>Total Receptionist</h2>
              <p>{receptionist.length}</p>
            </div>
            <div className="stat">
              <h2>Total Patient</h2>
              <p>{patient.length}</p>
            </div>
          </div>
          <div className="summary">
            <h2>Summary</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero a velit fermentum efficitur.</p>
          </div>
          <div className="current-time">
            <h2>Date and Time</h2>
            <p>{currentTime}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashBoard;
