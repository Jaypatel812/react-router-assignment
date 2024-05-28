import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Dashboard = lazy(() => import("./Admin/Pages/Dashboard"))
const Man_Customer = lazy(() => import("./Admin/Pages/Man_Customer"))
const Contactadmin = lazy(() => import("./Admin/Pages/Contactadmin"))
const Appointment = lazy(() => import("./Admin/Pages/Appointment"))
const Feedbackadmin = lazy(() => import("./Admin/Pages/Feedbackadmin"))
const Logina = lazy(() => import("./Admin/Pages/Logina"))
const Manage_category = lazy(() => import("./Admin/Pages/Manage_category"))
const Add_category = lazy(() => import("./Admin/Pages/Add_category"))
const Add_service = lazy(() => import("./Admin/Pages/Add_service"))
const Manage_service = lazy(() => import("./Admin/Pages/Manage_service"))
const Add_blog = lazy(() => import("./Admin/Pages/Add_blog"))
const Manage_blog = lazy(() => import("./Admin/Pages/Manage_blog"))


function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={<div className='d-flex justify-content-center' style={{marginTop : "50vh" }}><div className="spinner-border ">
            </div></div>}>
                <ToastContainer />
                <Routes>
                    {/* Admin */}
                    <Route path="/" element={<Dashboard />}></Route>
                    <Route path="/add_category" element={<Add_category />}></Route>
                    <Route path="/manage_category" element={<Manage_category />}></Route>
                    <Route path="/add_service" element={<Add_service />}></Route>
                    <Route path="/manage_service" element={<Manage_service />}></Route>
                    <Route path="/man_customer" element={<Man_Customer />}></Route>
                    <Route path="/contactadmin" element={<Contactadmin />}></Route>
                    <Route path="/man_appo" element={<Appointment />}></Route>
                    <Route path="/add_blog" element={<Add_blog />}></Route>
                    <Route path="/man_blog" element={<Manage_blog />}></Route>
                    <Route path="/man_feedback" element={<Feedbackadmin />}></Route>
                    <Route path="/login" element={<Logina />}></Route>


                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default App