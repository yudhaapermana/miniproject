import React from "react";
import { Helmet } from "react-helmet";

import FormAddBooking from "../../../components/Form/FormBooking/AddBooking/FormAddBooking";
import "./CreateBoking.css";

const CreateBooking = () => {
     return (
          <div>
               <Helmet>
                    <title>YPhotography | Boking</title>
               </Helmet>
               <section className="booking">
                    <div className="container-fluid px-4">
                         <div className="row justify-content-center mx-2">
                              <div className="col-lg-9 col-11">
                                   <div className="bg-white text-black mx-auto px-md-5 px-4 pt-5 pt-md-4 pb-5">
                                        <div className="col-md-11 my-4 my-md-5 mx-auto">
                                             <h3 className="text-black text-center">
                                                  Silahkan Isi Data Di Bawah
                                             </h3>
                                             <hr className="pb-4" />
                                             <FormAddBooking />
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
          </div>
     );
};

export default CreateBooking;
