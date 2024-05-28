import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


export default function Ad_header() {
    const redirect = useNavigate();

    const logout = () => {
        localStorage.removeItem('uemail');
        localStorage.removeItem('upass');
        toast.success('Logout Success');
        redirect('/login');
        return false;
    }
    return (
        <div>
            <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                {/* Navbar Brand*/}
                <a className="navbar-brand ps-3" href="#">Admin</a>
                {/* Sidebar Toggle*/}
                <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i className="fas fa-bars" /></button>
                {/* Navbar Search*/}
                <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                    <div className="input-group">
                        <input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                        <button className="btn btn-primary" id="btnNavbarSearch" type="button"><i className="fas fa-search" /></button>
                    </div>
                </form>
                {/* Navbar*/}
                <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw" /></a>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">My account</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="javascript:void(0)" onClick={logout}>Logout</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                        <div className="sb-sidenav-menu">
                            <div className="nav">
                                <div className="sb-sidenav-menu-heading">Core</div>
                                <NavLink className="nav-link" to="/">
                                    <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt" /></div>
                                    Dashboard
                                </NavLink>
                                <div className="sb-sidenav-menu-heading">Service</div>
                                <NavLink className="nav-link collapsed" to="" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                    <div className="sb-nav-link-icon"><i className="fa-brands fa-servicestack"/></div>
                                    Service categories
                                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                                </NavLink>
                                <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                    <nav className="sb-sidenav-menu-nested nav">
                                        <NavLink className="nav-link" to="/add_category">Add category</NavLink>
                                        <NavLink className="nav-link" to="/manage_category">Manage category</NavLink>
                                    </nav>
                                </div>

                                <NavLink className="nav-link collapsed" to="" data-bs-toggle="collapse" data-bs-target="#collapseLayouts6" aria-expanded="false" aria-controls="collapseLayouts">
                                    <div className="sb-nav-link-icon"><i className="fa-brands fa-servicestack"/></div>
                                    Service
                                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                                </NavLink>
                                <div className="collapse" id="collapseLayouts6" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                    <nav className="sb-sidenav-menu-nested nav">
                                        <NavLink className="nav-link" to="/add_service">Add service</NavLink>
                                        <NavLink className="nav-link" to="/manage_service">Manage service</NavLink>
                                    </nav>
                                </div>

                                <NavLink className="nav-link collapsed" to="" data-bs-toggle="collapse" data-bs-target="#collapseLayouts1" aria-expanded="false" aria-controls="collapseLayouts">
                                    <div className="sb-nav-link-icon"><i className="fa-solid fa-person"/></div>
                                    Customer
                                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                                </NavLink>
                                <div className="collapse" id="collapseLayouts1" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                    <nav className="sb-sidenav-menu-nested nav">
                                        <NavLink className="nav-link" to="/man_customer">Manage Customer</NavLink>
                                    </nav>
                                </div>

                                <NavLink className="nav-link collapsed" to="" data-bs-toggle="collapse" data-bs-target="#collapseLayouts2" aria-expanded="false" aria-controls="collapseLayouts">
                                    <div className="sb-nav-link-icon"><i className="fa-solid fa-phone"/></div>
                                    Contact us
                                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                                </NavLink>
                                <div className="collapse" id="collapseLayouts2" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                    <nav className="sb-sidenav-menu-nested nav">
                                        <NavLink className="nav-link" to="/contactadmin">Manage Contact us</NavLink>
                                    </nav>
                                </div>

                                <NavLink className="nav-link collapsed" to="" data-bs-toggle="collapse" data-bs-target="#collapseLayouts3" aria-expanded="false" aria-controls="collapseLayouts">
                                    <div className="sb-nav-link-icon"><i className="fa-regular fa-calendar-check"/></div>
                                    Appointment
                                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                                </NavLink>
                                <div className="collapse" id="collapseLayouts3" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                    <nav className="sb-sidenav-menu-nested nav">
                                        <NavLink className="nav-link" to="/man_appo">Manage appointment</NavLink>
                                    </nav>
                                </div>

                                <NavLink className="nav-link collapsed" to="" data-bs-toggle="collapse" data-bs-target="#collapseLayouts5" aria-expanded="false" aria-controls="collapseLayouts">
                                    <div className="sb-nav-link-icon"><i className="fa-solid fa-list-check"/></div>
                                    Blog
                                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                                </NavLink>
                                <div className="collapse" id="collapseLayouts5" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                    <nav className="sb-sidenav-menu-nested nav">
                                        <NavLink className="nav-link" to="/add_blog">Add Blog</NavLink>
                                        <NavLink className="nav-link" to="/man_blog">Manage Blog</NavLink>

                                    </nav>
                                </div>

                                <NavLink className="nav-link collapsed" to="" data-bs-toggle="collapse" data-bs-target="#collapseLayouts4" aria-expanded="false" aria-controls="collapseLayouts">
                                    <div className="sb-nav-link-icon"><i className="fa-regular fa-comments"/></div>
                                    Feedback
                                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                                </NavLink>
                                <div className="collapse" id="collapseLayouts4" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                    <nav className="sb-sidenav-menu-nested nav">
                                        <NavLink className="nav-link" to="/man_feedback">Manage Feedback</NavLink>
                                    </nav>
                                </div>




                            </div>
                        </div>
                        <div className="sb-sidenav-footer">
                            <div className="small">Logged in as:</div>
                            Admin
                        </div>
                    </nav>
                </div>
            </div>
        </div>

    )
}
