//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";

//include your index.scss file into the bundle
import "../styles/index.scss";

import "toastr2/dist/toastr.min.css";

//import your own components
import Layout from "./layout";

//import style for loader
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

//import Time Ago

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
