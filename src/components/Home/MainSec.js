import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../src/img/51971-hello.gif'

const MainSec = () => {
    return (
        <div className='flex'>
            <img src={img} alt="" />
            <div className='mt-40 w-4/8 pl-20'>
                <h1 className='text-4xl font-bold text-primary'>Are you want to see the <p>ADMIN PANEL?</p></h1>
                <p className='mt-5 text-xl text-black font-bold'>Please Register here: <Link to='register' className='text-primary'>Signup</Link></p>
            </div>
        </div>
    );
};

export default MainSec;