import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import "./index.css";
import "./fonts/line-awesome-1.3.0/css/line-awesome.css";
import GlobalContextProvider from './contexts/GlobalContextProvider';
import ChildrenContextProvider from './contexts/ChildrenContextProvider';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const client = new QueryClient()
const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <QueryClientProvider client={client}>
      <GlobalContextProvider>
        <ChildrenContextProvider>
          <App />
        </ChildrenContextProvider>
      </GlobalContextProvider>
    </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);



