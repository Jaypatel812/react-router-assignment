import React from 'react'
import Login from '../Pages/Login'

export default function Ad_login() {
    return (
        <div>
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            {/* Navbar Brand*/}
            <a className="navbar-brand ps-3" href="#">Admin</a>
            {/* Sidebar Toggle*/}
            {/* Navbar Search*/}
            <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                
            </form>
            {/* Navbar*/}
            <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw" /></a>
                   
                </li>
            </ul>
        </nav>

        <Login/>
        
    </div>

    )
}
