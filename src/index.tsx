import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ChildrenContextProvider from './contexts/ChildrenContextProvider';
import "./fonts/line-awesome-1.3.0/css/line-awesome.css";
import "./index.css";
import App from './App';


const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChildrenContextProvider>
        <App />
      </ChildrenContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);



