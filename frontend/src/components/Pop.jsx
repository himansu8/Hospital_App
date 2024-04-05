import React, { useState } from 'react'
import './pop.css'
import { useNavigate } from 'react-router-dom';
function Pop({ setOpen }) {
    const [selectedRole, setSelectedRole] = useState(null);
    const navigate = useNavigate()
    const handleLogin = () => {
        if (selectedRole) {
            navigate(`/login/${selectedRole}`);
            setOpen(false)
        }
    };
    return (
        <div className='containerpop'>
            <div className="wrapperpop">
            <div className="close" onClick={() => setOpen(false)}>X</div>
                <select
                    className="loginDropdown"
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                >
                    <option value="">Select Role</option>
                    <option value="doctor">Doctor</option>
                    <option value="receptionist">Receptionist</option>
                    <option value="admin">Admin</option>
                </select>
                <button className="loginBtn btn" onClick={handleLogin} style={{cursor:"pointer" }}>
            LOGIN
          </button>
            </div>
        </div>
    )
}

export default Pop