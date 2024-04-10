import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import './App.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Appointment from './pages/Appointment'
import AdminLogin from './pages/AdminLogin'
import About from './pages/About'
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import DoctorLogin from "./pages/DoctorLogin";
import ReceptionistLogin from "./pages/ReceptionistLogin";
import Footer from "./components/Footer";
import AdminPage from "./admin dashboard/admin/AdminPage";
import {doctorColumns, patientColumns, receptionistColumns} from './dataTableSource'
import DoctorPage from "./admin dashboard/Doctor/DoctorPage";
import ReceptionistPage from "./admin dashboard/receptionist/ReceptionistPage";
import PatientPage from "./admin dashboard/patient/PatientPage";
import AddDoctorPage from "./admin dashboard/Doctor/AddDoctorPage";
import AddReceptionistPage from "./admin dashboard/receptionist/AddReceptionistPage";
import MessagePage from "./admin dashboard/admin/MessagePage";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import ViewDoctor from "./admin dashboard/Doctor/ViewDoctor";
import Viewreceptionist from "./admin dashboard/receptionist/Viewreceptionist";
import ViewPatient from "./admin dashboard/patient/ViewPatient";
import EditDoctorPage from "./admin dashboard/Doctor/EditDoctorPage";
import EditReceptionist from "./admin dashboard/receptionist/EditReceptionist";
import EditPatient from "./admin dashboard/patient/EditPatient";
//import DoctorMain from "./DoctorDashboard/doctor/DoctorMain";
//import ReceptionistMain from "./receptionist dashboard/ReceptionistMain";

function App() {
  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext)
   
    if (!user) {
      return <Navigate to='/' />
    }
    return children;
  }
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<><Navbar /> <Home />   <Footer /></>} />
          <Route path="/appointment" element={<><Navbar /><Appointment /> <Footer /></>} />

          <Route path="/login/admin" element={<><Navbar /><AdminLogin /><Footer /></>} />
          <Route path="/login/doctor" element={<><Navbar /><DoctorLogin /><Footer /></>} />
          <Route path="/login/receptionist" element={<><Navbar /><ReceptionistLogin /><Footer /></>} />

          <Route path="/about" element={<><Navbar /><About /> <Footer /></>} />
          <Route path="/register" element={<><Navbar /><Register /><Footer /></>} />
          <Route path="/register" element={<><Navbar /><Register /><Footer /></>} />


          <Route path="/admin/dashboard" element={<><ProtectedRoute ><AdminPage type="admin" /></ProtectedRoute></>} />
          <Route path="/doctor/dashboard" element={<><ProtectedRoute ><AdminPage type="doctor"/></ProtectedRoute></>} />
          <Route path="/recep/dashboard" element={<><ProtectedRoute ><AdminPage type="recep"/></ProtectedRoute></>} />

          <Route path="/doctor" element={<><ProtectedRoute ><DoctorPage columns={doctorColumns} /></ProtectedRoute></>} />
          <Route path="/doctor/:doctorId" element={<><ProtectedRoute><ViewDoctor/></ProtectedRoute></>} />
          <Route path="/doctor/edit/:_id" element={<><ProtectedRoute><EditDoctorPage/></ProtectedRoute></>} />
          <Route path="/receptionist" element={<><ProtectedRoute><ReceptionistPage columns={receptionistColumns} type="admin" /></ProtectedRoute></>} />
          <Route path="/doc/receptionist" element={<ProtectedRoute><ReceptionistPage columns={receptionistColumns} type="doctor" /></ProtectedRoute>} />
          <Route path="/receptionist/:referenceNo" element={<><ProtectedRoute><Viewreceptionist type="admin"/></ProtectedRoute></>} />
          <Route path="/doc/receptionist/:referenceNo" element={<><ProtectedRoute><Viewreceptionist type="doctor"/></ProtectedRoute></>} />

          <Route path="/receptionist/edit/:referenceNo" element={<><ProtectedRoute><EditReceptionist type="admin"/></ProtectedRoute></>} />
          <Route path="/doc/receptionist/edit/:referenceNo" element={<><ProtectedRoute><EditReceptionist type="doctor"/></ProtectedRoute></>} />

          <Route path="/patient" element={<><ProtectedRoute><PatientPage columns={patientColumns} type="admin"/></ProtectedRoute></>} />
          <Route path="/doc/patient" element={<><ProtectedRoute><PatientPage columns={patientColumns} type="doctor"/></ProtectedRoute></>} />
          <Route path="/recep/patient" element={<><ProtectedRoute><PatientPage columns={patientColumns} type="recep"/></ProtectedRoute></>} />

          <Route path="/patient/:referenceNo" element={<><ProtectedRoute><ViewPatient type="admin"/></ProtectedRoute></>} />
          <Route path="/doc/patient/:referenceNo" element={<><ProtectedRoute><ViewPatient type="doctor"/></ProtectedRoute></>} />
          <Route path="/recep/patient/:referenceNo" element={<><ProtectedRoute><ViewPatient type="recep"/></ProtectedRoute></>} />

          <Route path="/patient/edit/:referenceNo" element={<><ProtectedRoute><EditPatient type="admin"/></ProtectedRoute></>} />
          <Route path="/doc/patient/edit/:referenceNo" element={<><ProtectedRoute><EditPatient type="doctor"/></ProtectedRoute></>} />
          <Route path="/recep/patient/edit/:referenceNo" element={<><ProtectedRoute><EditPatient type="recep"/></ProtectedRoute></>} />

          <Route path="/doctor/signup" element={<><ProtectedRoute><AddDoctorPage/></ProtectedRoute></>} />
          <Route path="/receptionist/signup" element={<><ProtectedRoute><AddReceptionistPage type="admin"/></ProtectedRoute></>} />
          <Route path="/doc/receptionist/signup" element={<><ProtectedRoute><AddReceptionistPage type="doctor"/></ProtectedRoute></>} />

          <Route path="/messages" element={<><ProtectedRoute><MessagePage type="admin"/></ProtectedRoute></>} />
          <Route path="/doc/messages" element={<><ProtectedRoute><MessagePage type="doctor"/></ProtectedRoute></>} />
          <Route path="/recep/messages" element={<><ProtectedRoute><MessagePage type="recep"/></ProtectedRoute></>} />



        </Routes>
        <ToastContainer position="top-center" />

      </BrowserRouter>
    </>
  );
}

export default App;
