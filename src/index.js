import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import UserContextProvider from "./contexts/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          pauseOnHover
          style={{ width: "250px" }}
        />
        <App />
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
