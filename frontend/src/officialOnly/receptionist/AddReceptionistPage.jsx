import React from 'react'
import Hero from '../../components/Hero'
import ReceptionistSignup from './ReceptionistSignup'

function AddReceptionistPage() {
  return (
    <>
    <Hero
      title={"Signup Receptionist | Apna Hospital"}
      imgUrl={"/signin.png"}
    />
    <ReceptionistSignup/>
    
  </>
  )
}

export default AddReceptionistPage