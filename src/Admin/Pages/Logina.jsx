import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import {useNavigate } from 'react-router-dom'

export default function Logina() {
    const redirect =useNavigate();

    useEffect(()=>{
        if(localStorage.getItem('uemail'))
        {
            redirect('/');
        }
    });

    const [formvalue, setFormvalue] = useState({
        email: "",
        password: ""
    })

   

    const handleOnchange = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
    }

    function validation() {
        var ans = true;
        if (formvalue.email == "") {
            toast.error("Please enter your Email id");
            ans = false;
            return false;
        }
        if (formvalue.password == "") {
            toast.error("Please enter your password");
            ans = false;
            return false;
        }
        return ans;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validation()) {
            const result = await axios.get(`http://localhost:3000/admin?email=${formvalue.email}`);
            if (result.data.length>0) {
                if(result.data[0].password==formvalue.password)
                {
                    if(result.data[0].status=="Unblock")
                    {
                        localStorage.setItem('uemail',result.data[0].email);
                        localStorage.setItem('upass',result.data[0].password);    

                        toast.success('Login Success');
                        return redirect('/');
                    }
                    else
                    {
                        toast.error('Account Blocked Contact SHOP');
                        setFormvalue({...formvalue,email:"",password:""});
                        return false;
                    }
                }
                else
                {
                    toast.error('Password does not match');
                    setFormvalue({...formvalue,email:"",password:""});
                    return false;
                }
            }
            else
            {
                toast.error('Email does not Exist');
                setFormvalue({...formvalue,email:"",password:""});
                return false;
            }
        }
    }
   
    return (
        <div>
            <div id="layoutAuthentication_content">
                <main>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-5">
                                <div className="card shadow-lg border-0 rounded-lg mt-5">
                                    <div className="card-header"><h3 className="text-center font-weight-light my-4">Login</h3></div>
                                    <div className="card-body">
                                        <form method='post' onSubmit={handleSubmit}>
                                            <div className="form-floating mb-3">
                                                <input className="form-control" id="inputEmail" onChange={handleOnchange} value={formvalue.email} name='email' type="email" placeholder="name@example.com" />
                                                <label htmlFor="inputEmail" >Email is admin@gmail.com</label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input className="form-control" id="inputPassword" onChange={handleOnchange} value={formvalue.password} name='password' type="password" placeholder="Password" />
                                                <label htmlFor="inputPassword" >Password is 12345</label>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                                <button className="btn btn-primary">Login</button>
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
