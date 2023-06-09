import React from 'react'
import LogoWhite from '../../assets/images/logo-white.png'
import { BsJustify } from "react-icons/bs";
import "./Navbar.css";

const Navbar = () => {
     return (
          <>
               <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                         <a className="navbar-brand" href="/">
                              <img src={LogoWhite} alt="" width={135} />
                         </a>
                         <button
                              className="navbar-toggler p-0"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#navbarNav"
                              aria-controls="navbarNav"
                              aria-expanded="false"
                              aria-label="Toggle navigation"
                         >
                              <BsJustify className="p-0" style={{ color: "white", fontSize: 30 }} />
                         </button>
                         <div
                              className="collapse navbar-collapse justify-content-end"
                              id="navbarNav"
                         >
                              <div className="navbar-nav me-0 mt-3 mt-md-0 text-center">
                                   <a className="nav-link mx-md-3" href="/about-us">
                                        About
                                   </a>
                                   <a className="nav-link mx-md-3" href="/portfolio">
                                        Portofolio
                                   </a>
                                   <a className="nav-link mx-md-3" href="/packages">
                                        Paket
                                   </a>
                                   <a className="nav-link mx-md-3" href="/contact">
                                        Kontak
                                   </a>
                                   <a
                                        className="mx-md-3 btn btn-light px-3 text-dark rounded-5"
                                        href="/create-booking"
                                   >
                                        Boking Sekarang
                                   </a>
                              </div>
                         </div>
                    </div>
               </nav>
          </>
     );
};

export default Navbar
