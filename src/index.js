import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "pages/Home";
import Login from "pages/Login";
import Register from "pages/Register";
import Favoritos from "pages/Favoritos";

import UserProtected from "components/UserProtected";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="" element={<Navigate to="home" replace />} />
            <Route path="" element={<App />}>
                <Route path="home" element={<Home />} />
                <Route path="favs" element={<Favoritos />} />
                <Route
                    path="login"
                    element={
                        <UserProtected>
                            <Login />
                        </UserProtected>
                    }
                />
                <Route
                    path="register"
                    element={
                        <UserProtected>
                            <Register />
                        </UserProtected>
                    }
                />
            </Route>
            <Route path="*" element={<Navigate to="home" replace />} />
        </Routes>
    </BrowserRouter>
);
