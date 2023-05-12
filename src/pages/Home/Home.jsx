import React from "react";
import LogoBlack from "../../assets/images/logo-black.png";
import Foto1 from "../../assets/images/home/svg/foto1.svg";
import Foto2 from "../../assets/images/home/svg/foto2.svg";
import Foto3 from "../../assets/images/home/svg/foto3.svg";
import Foto4 from "../../assets/images/home/svg/foto4.svg";

import "./Home.css";

const Home = () => {
     return (
          <section className="hero">
               <div className="container-fluid bg-black">
                    <div className="hero-image text-center">
                         <div className="row">
                              <div className="col-md-3 col-6">
                                   <img src={Foto1} alt="" className="img-fluid" />
                              </div>
                              <div className="col-md-3 col-6">
                                   <img src={Foto2} alt="" className="img-fluid" />
                              </div>
                              <div className="col-md-3 col-6 pt-4 pt-md-0">
                                   <img src={Foto3} alt="" className="img-fluid" />
                              </div>
                              <div className="col-md-3 col-6 pt-4 pt-md-0">
                                   <img src={Foto4} alt="" className="img-fluid" />
                              </div>
                         </div>
                    </div>
                    <div className="hero-title text-center shadow-sm mt-5 mt-md-4">
                         <img src={LogoBlack} alt="" width={150} />
                         <h1 className="text-center">
                              WEDDING <br /> PHOTOGRAPHY
                         </h1>
                         <div className="btn btn-dark rounded-5 px-4 py-2">
                              <a href="/about-us" className="text-decoration-none text-white">
                                   Lebih Detail
                              </a>
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default Home;
