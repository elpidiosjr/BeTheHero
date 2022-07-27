import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Logon/>} />
                <Route path="/register" element={<Register/>} />

            </Routes>
        </BrowserRouter>
    );
}