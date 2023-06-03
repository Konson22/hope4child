import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "rc-slider/assets/index.css";

import "./styles/index.scss";
import "./index.css";
import "./fonts/line-awesome-1.3.0/css/line-awesome.css";
import GlobalContextProvider from 'contexts/GlobalContextProvider';
import ChildrenContextProvider from 'contexts/ChildrenContextProvider';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalContextProvider>
        <ChildrenContextProvider>
          <App />
        </ChildrenContextProvider>
      </GlobalContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);



// import React from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
// import ReactDOM from "react-dom";




// import App from "./App";
// import reportWebVitals from "./reportWebVitals";


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root") as HTMLElement
// );


// reportWebVitals();
