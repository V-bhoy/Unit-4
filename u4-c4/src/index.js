import React from "react";
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom'
import { store } from './Redux/store'

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
           <BrowserRouter>
              <App />
           </BrowserRouter>
        </Provider>
    </React.StrictMode>
);