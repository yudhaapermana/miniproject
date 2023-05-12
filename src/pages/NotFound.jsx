import React from "react";
import { Helmet } from "react-helmet";

const NotFound = () => {
     return (
          <div>
               <Helmet>
                    <title>404 Not Found</title>
               </Helmet>
               <div className="bg-black d-flex justify-content-center" style={{ height: 483 }}>
                    <h3 className="text-white my-auto">404 Not Found</h3>
               </div>
          </div>
     );
};

export default NotFound;
