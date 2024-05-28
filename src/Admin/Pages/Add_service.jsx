import React, { useEffect, useState } from 'react'
import Ad_header from '../Component/Ad_header'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function Add_service() {
    useEffect(() => {
        fetch();
    }, []);

    const [data, setData] = useState([]);
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/category`)
        setData(res.data)
    }

    const [formvalue, setFormvalue] = useState({
        id: "",
        service_name: "",
        service_description: "",
        price: "",
        ser_img: ""
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
        if (formvalue.service_name == "") {
            toast.error('Enter service name!');
            ans = false;
            return false;
        }
        if (formvalue.service_description == "") {
            toast.error('Enter service description!');
            ans = false;
            return false;
        }
        if (formvalue.price == "") {
            toast.error('Enter service price!');
            ans = false;
            return false;
        }
        if (formvalue.ser_img == "") {
            toast.error('Enter Image URL !');
            ans = false;
            return false;
        }


        return ans;
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res = await axios.post(`http://localhost:3000/service`, formvalue);
            if (res.status == 201) {
                toast.success("Service added succesfully")
                setFormvalue({ ...formvalue, id: "", service_name: "", service_description: "", price: "", ser_img: "" })
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
                                    <div className="card-header"><h3 className="text-center font-weight-dark my-4">Add service</h3></div>
                                    <div className="card-body">
                                        <form action='' method='post' onSubmit={handleSubmit}>


                                            <select onChange={handleOnchange} value={formvalue.cate_id} name="cate_id" className="form-control mb-3">
                                                <option value="">Select Category</option>
                                                {
                                                    data && data.map((value) => {
                                                        return (
                                                            <option value={value.id} key={value.category_name}>{value.category_name}</option>
                                                        )
                                                    })
                                                }
                                            </select>

                                            <div className="form-floating mb-3">
                                                <input className="form-control" id="inputEmail" onChange={handleOnchange} value={formvalue.service_name} name='service_name' type="text" placeholder="name@example.com" />
                                                <label htmlFor="inputEmail">Service Name </label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input className="form-control" type="text" onChange={handleOnchange} value={formvalue.service_description} name='service_description' placeholder="name@example.com" />
                                                <label htmlFor="inputEmail">Service Description </label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input className="form-control" type="number" onChange={handleOnchange} value={formvalue.price} name='price' placeholder="name@example.com" />
                                                <label htmlFor="inputEmail">Price </label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input className="form-control" type="url" onChange={handleOnchange} value={formvalue.ser_img} name='ser_img' placeholder="name@example.com" />
                                                <label htmlFor="inputEmail">Img url </label>
                                            </div>

                                            <div className="mt-4 mb-0">
                                                <div className="d-grid"><button className="btn btn-primary btn-block" type='submit'>Add Service</button></div>
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
