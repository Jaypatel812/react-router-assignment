import React, { useEffect, useState } from 'react'
import Ad_header from '../Component/Ad_header'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function Add_category() {
    const [formvalue, setFormvalue] = useState({
        id: "",
        category_name: "",
        category_description: ""
    })

    const redirect = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem('uemail')) {
            redirect('/login');
        }
    });

    const handleOnchange = (e) => {
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
    }

    function validation() {
        var ans = true;
        if (formvalue.category_name == "") {
            toast.error('Enter Category name!');
            ans = false;
            return false;
        }
        if (formvalue.category_description == "") {
            toast.error('Enter Category description!');
            ans = false;
            return false;
        }


        return ans;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res = await axios.post(`http://localhost:3000/category`, formvalue);
            if (res.status == 201) {
                toast.success("Category added succesfully")
                setFormvalue({ ...formvalue, id: "", category_name: "", category_description: "" })
            }
        }
    }

    return (
        <div className='sb-nav-fixed'>
            <Ad_header />
            <div id="layoutAuthentication_content">
                <main>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7 mt-5">
                                <div className="card shadow-lg border-0 rounded-lg mt-5">
                                    <div className="card-header"><h3 className="text-center font-weight-dark my-4">Add service category</h3></div>
                                    <div className="card-body">
                                        <form action='' method='post' onSubmit={handleSubmit}>
                                            <div className="form-floating mb-3">
                                                <input className="form-control" onChange={handleOnchange} value={formvalue.category_name} name='category_name' type="text" placeholder="name@example.com" />
                                                <label htmlFor="inputEmail">Category Name </label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input className="form-control" type="text" onChange={handleOnchange} value={formvalue.category_description} name='category_description' placeholder="name@example.com" />
                                                <label htmlFor="inputEmail">Category Description </label>
                                            </div>

                                            <div className="mt-4 mb-0">
                                                <div className="d-grid"><button className="btn btn-primary btn-block" type='submit'>Add Service Category</button></div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>

    )
}
