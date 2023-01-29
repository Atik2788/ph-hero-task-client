import React from 'react';
import { Outlet } from 'react-router-dom';
import Register from './auth/Register';

const Main = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;