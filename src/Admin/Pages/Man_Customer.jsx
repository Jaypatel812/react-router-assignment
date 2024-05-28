import React, { useEffect, useState } from 'react'
import Ad_header from '../Component/Ad_header'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Man_Customer() {
    useEffect(() => {
        fetchcus();
    }, []);

    const redirect=useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem('uemail'))
        {
            redirect('/login');
        }
    });

    const [Data, setData] = useState([]);

    const fetchcus = async () => {
        const res = await axios.get(`http://localhost:3000/customer`)
        setData(res.data)
    }

    const deleteHandel = async (id) => {
        console.log(id)
        const res = await axios.delete(`http://localhost:3000/customer/${id}`)
        fetchcus();
    }
    return (
        <div>
            <div className='sb-nav-fixed'>
                <Ad_header />
                <div id="layoutSidenav">
                    <div id="layoutSidenav_content">
                        <main>
                            <div className="container">
                                <div className="card mb-4">
                                    <div className="card-header">
                                        <i className="fas fa-table me-1" />
                                        Customer Details
                                    </div>
                                    <div className="card-body">
                                        <table className='table'>
                                            <thead className='thead-dark'>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>password</th>  
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
                                                                <td>{value.name}</td>
                                                                <td>{value.email}</td>
                                                                <td>{value.password}</td>
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
