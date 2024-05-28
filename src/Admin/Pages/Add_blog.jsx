import React, { useEffect, useState } from 'react'
import Ad_header from '../Component/Ad_header'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Add_blog() {
    const [formvalue, setFormvalue] = useState({
        id: "",
        title: "",
        blog_detail: "",
        blog_type: "",
        blog_img: ""
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
        if (formvalue.title == "") {
            toast.error('Enter Blog Title!');
            ans = false;
            return false;
        }
        if (formvalue.blog_detail == "") {
            toast.error('Enter Blog Details!');
            ans = false;
            return false;
        }
        if (formvalue.blog_type == "") {
            toast.error('Select Blog type!');
            ans = false;
            return false;
        }
        if (formvalue.blog_img == "") {
            toast.error('Enter Image URL!');
            ans = false;
            return false;
        }


        return ans;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res = await axios.post(`http://localhost:3000/blog`, formvalue);
            if (res.status == 201) {
                toast.success("Blog added succesfully")
                setFormvalue({ ...formvalue, id: "", title: "", blog_detail: "", blog_type: "", blog_img: "" })
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
                                    <div className="card-header"><h3 className="text-center font-weight-dark my-4">Add Blog</h3></div>
                                    <div className="card-body">
                                        <form action='' method='post' onSubmit={handleSubmit}>
                                            <div className="form-floating mb-3">
                                                <input className="form-control" onChange={handleOnchange} value={formvalue.title} name='title' type="text" placeholder="name@example.com" />
                                                <label htmlFor="inputEmail">Blog title </label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input className="form-control" type="text" onChange={handleOnchange} value={formvalue.blog_detail} name='blog_detail' placeholder="name@example.com" />
                                                <label htmlFor="inputEmail"> Blog Details </label>
                                            </div>
                                            <select onChange={handleOnchange} value={formvalue.blog_type} name="blog_type" className="form-control mb-3">
                                                <option value="">Select Blog type</option>
                                                <option value="New Service available">New Service available</option>
                                                <option value="Discount available">Discount available</option>
                                                <option value="Coming soon">Coming soon</option>
                                            </select>
                                            <div className="form-floating mb-3">
                                                <input className="form-control" type="url" onChange={handleOnchange} value={formvalue.blog_img} name='blog_img' placeholder="name@example.com" />
                                                <label htmlFor="inputEmail"> Image url </label>
                                            </div>

                                            <div className="mt-4 mb-0">
                                                <div className="d-grid"><button className="btn btn-primary btn-block" type='submit'>Add Blog</button></div>
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
