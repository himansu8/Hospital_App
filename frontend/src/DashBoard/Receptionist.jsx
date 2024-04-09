import React, { useEffect, useState } from 'react'
import './receptionist.scss'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


function Receptionist({ columns }) {
    const [receptionist, setReceptionist] = useState([])
    let navigate = useNavigate();
    async function fetchReceptionist() {
        try {
            let res = await axios.get('/api/receptionist');
            console.log(res.data)
            setReceptionist(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchReceptionist()
    }, [])
    async function deleteReceptionist(referenceNo) {
        try {
            await axios.delete(`/api/receptionist/${referenceNo}`);
            let updatedReceptionist = receptionist.filter((ele) => ele._id !== referenceNo);
            setReceptionist(updatedReceptionist);             //Refersh the doctor database after deleted
           //window.alert(`Successfully Deleted`)
            toast.success("Successfully Deleted")
        } catch (error) {
            console.log(error)
        }
    }
    function onClickHandler(referenceNo) {

        navigate(
            `/receptionist/${referenceNo}`,
            {
                state: {
                    referenceNo
                }
            }
        )
    }
    function onClickHandler2(referenceNo,name,gender,email,mobile,address,password) {

        navigate(
            `/receptionist/edit/${referenceNo}`,
            {
                state: {
                    referenceNo,name,gender,email,mobile,address,password
                }
            }
        )
    }
    const actionColumn = [{
         width: 250, renderCell: (params) => {
            return (
                <div className="cellAction">
                    
                    <button><div className="viewButton" onClick={() => onClickHandler(params.row._id)} >View</div></button>
                    <button><div className="editButton" onClick={() => onClickHandler2(params.row._id, params.row.name,  params.row.gender, params.row.email, params.row.mobile, params.row.address, params.row.password)} >Edit</div></button>
                 <button><div className="deleteButton" onClick={() => deleteReceptionist(params.row._id)}  >Delete</div></button>   
                </div>
            );
        },
    },
    ];


  return (
    <div className='datatable'>
            <div className="datatableTitle">
                <Link to={'/receptionist/signup'} className='link'>
                    Add New Receptionist
                </Link>
            </div>
            {/* <DataGrid
                className='datagrid'
                rows={data}
                columns={userColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9, 10]}
                checkboxSelection
            /> */}
            <DataGrid
                className="datagrid"
                rows={receptionist}
                columns={columns.concat(actionColumn)}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 9 },
                    },
                }}
                pageSizeOptions={[9, 10]}
                checkboxSelection
                getRowId={(row) => row._id}
            />
        </div>
  )
}

export default Receptionist