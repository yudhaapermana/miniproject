import React from 'react'
import { Helmet } from "react-helmet";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

import LogoBlack from "../../assets/images/logo-black.png";
import FormContact from "../../components/Form/FormContact/FormContact";
import "./Contact.css";

const Contact = () => {
     return (
          <div>
               <Helmet>
                    <title>YPhotography | Kontak</title>
               </Helmet>
               <section className="contact">
                    <div className="container-fluid">
                         <h1 className="pb-4 text-center">HUBUNGI KAMI</h1>
                         <div className="row justify-content-center mt-5">
                              <div className="col-md-10 col-lg-9 col-9 bg-white p-5">
                                   <div className="row p-md-3">
                                        <div className="col-12 col-md-5">
                                             <img
                                                  src={LogoBlack}
                                                  alt=""
                                                  className="img-fluid pb-4"
                                                  width={200}
                                             />
                                             <p className="py-2">
                                                  Jalan Buahbatu No.99 <br />
                                                  Bandung, Jawa Barat
                                             </p>
                                             <p>YPhotography@gmail.com</p>
                                             <p className="py-2">08123-4567-8910</p>
                                             <div className="social-media d-flex fs-4 pt-2">
                                                  <FaFacebookF />
                                                  <AiFillInstagram className="mx-3" />
                                                  <FaTwitter />
                                             </div>
                                        </div>
                                        <div className="col-12 col-md-7 mt-md-0 mt-5">
                                             <FormContact />
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
          </div>
     );
};

export default Contact
