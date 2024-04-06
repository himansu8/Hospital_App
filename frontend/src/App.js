import { BrowserRouter, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/login/admin" element={<AdminLogin />} />
          <Route path="/login/doctor" element={<DoctorLogin />} />
          <Route path="/login/receptionist" element={<ReceptionistLogin />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />


        </Routes>
        <ToastContainer position="top-center" />
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
