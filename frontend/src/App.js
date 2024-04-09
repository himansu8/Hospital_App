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
import AdminPage from "./officialOnly/admin/AdminPage";
import {doctorColumns, patientColumns, receptionistColumns} from './dataTableSource'
import DoctorPage from "./officialOnly/Doctor/DoctorPage";
import ReceptionistPage from "./officialOnly/receptionist/ReceptionistPage";
import PatientPage from "./officialOnly/patient/PatientPage";
import AddDoctorPage from "./officialOnly/Doctor/AddDoctorPage";
import AddReceptionistPage from "./officialOnly/receptionist/AddReceptionistPage";
import MessagePage from "./officialOnly/admin/MessagePage";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import ViewDoctor from "./officialOnly/Doctor/ViewDoctor";
import Viewreceptionist from "./officialOnly/receptionist/Viewreceptionist";
import ViewPatient from "./officialOnly/patient/ViewPatient";
import EditDoctorPage from "./officialOnly/Doctor/EditDoctorPage";
import EditReceptionist from "./officialOnly/receptionist/EditReceptionist";
import EditPatient from "./officialOnly/patient/EditPatient";

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


          <Route path="/admin/dashboard" element={<><ProtectedRoute><AdminPage/></ProtectedRoute></>} />
          <Route path="/doctor" element={<><ProtectedRoute><DoctorPage columns={doctorColumns}/></ProtectedRoute></>} />
          <Route path="/doctor/:doctorId" element={<><ProtectedRoute><ViewDoctor/></ProtectedRoute></>} />
          <Route path="/doctor/edit/:_id" element={<><ProtectedRoute><EditDoctorPage/></ProtectedRoute></>} />
          <Route path="/receptionist" element={<><ProtectedRoute><ReceptionistPage columns={receptionistColumns}/></ProtectedRoute></>} />
          <Route path="/receptionist/:referenceNo" element={<><ProtectedRoute><Viewreceptionist/></ProtectedRoute></>} />
          <Route path="/receptionist/edit/:referenceNo" element={<><ProtectedRoute><EditReceptionist/></ProtectedRoute></>} />
          <Route path="/patient" element={<><ProtectedRoute><PatientPage columns={patientColumns}/></ProtectedRoute></>} />
          <Route path="/patient/:referenceNo" element={<><ProtectedRoute><ViewPatient/></ProtectedRoute></>} />
          <Route path="/patient/edit/:referenceNo" element={<><ProtectedRoute><EditPatient/></ProtectedRoute></>} />
          <Route path="/doctor/signup" element={<><ProtectedRoute><AddDoctorPage/></ProtectedRoute></>} />
          <Route path="/receptionist/signup" element={<><ProtectedRoute><AddReceptionistPage/></ProtectedRoute></>} />
          <Route path="/messages" element={<><ProtectedRoute><MessagePage/></ProtectedRoute></>} />



        </Routes>
        <ToastContainer position="top-center" />

      </BrowserRouter>
    </>
  );
}

export default App;
