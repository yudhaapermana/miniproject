import React from 'react'
import LogoWhite from '../../assets/images/logo-white.png'
import './Navbar.css'

const Navbar = () => {
     return (
          <>
               <nav className="navbar navbar-expand-lg">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						<img src={LogoWhite} alt="" width={135} />
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon bg-light rounded-2" style={{ padding: 18 }}/>
					</button>
					<div
						className="collapse navbar-collapse justify-content-end"
						id="navbarNav"
					>
						<div className="navbar-nav me-0 mt-3 mt-md-0 text-center">						
							<a
								className="nav-link mx-md-3" 
								aria-current="page"
								href="/">
								Home
							</a>																						
							<a className="nav-link mx-md-3" href="#">
								About
							</a>														
							<a className="nav-link mx-md-3" href="#">
								Portfolio
							</a>														
							<a className="nav-link mx-md-3" href="#">
								Packages
							</a>															
							<a className="nav-link mx-md-3" href="#">
								Contact
							</a>																						
							<a className="mx-md-3 btn btn-light px-3 text-dark rounded-5" href="user-account">								
								Login or Register 
							</a>							
						</div>
					</div>
				</div>
			</nav>
          </>
     )
}

export default Navbar
