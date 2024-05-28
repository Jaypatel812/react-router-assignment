import React, { useEffect, useState } from 'react'
import Ad_header from '../Component/Ad_header'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Appointment() {
    useEffect(() => {
        fetchAppo();
    }, []);
    
    const redirect=useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem('uemail'))
        {
            redirect('/login');
        }
    });

    const [Data, setData] = useState([]);

    const fetchAppo = async () => {
        const res = await axios.get(`http://localhost:3000/appointment`)
        setData(res.data)
    }

    const deleteHandel = async (id) => {
        console.log(id)
        const res = await axios.delete(`http://localhost:3000/appointment/${id}`)
        fetchAppo();
    }
    return (
        <div>
            <div className='sb-nav-fixed'>
                <Ad_header/>
                <div id="layoutSidenav">
                    <div id="layoutSidenav_content">
                        <main>
                            <div className="container">
                                <div className="card mb-4">
                                    <div className="card-header">
                                        <i className="fas fa-table me-1" />
                                         Appointment
                                    </div>
                                    <div className="card-body">
                                        <table className='table'>
                                            <thead className='thead-dark'>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Cus ID</th>
                                                    <th>Service ID</th>
                                                    <th>Date</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                            {
                                                    Data && Data.map((value, index, arr) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td>{value.id}</td>
                                                                <td>{value.cus_id}</td>
                                                                <td>{value.service_id}</td>
                                                                <td>{value.date}</td>
                                                                <td>{value.status}</td>
                                                                <td>
                                                                    <button
                                                                        className='btn btn-danger'
                                                                        onClick={() => deleteHandel(value.id)}><i className="fa-solid fa-trash"></i></button>
                                                                </td>
                                                            </tr>

                                                        )
                                                    }

                                                    )
                                                }
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>

        </div>
    )
}
