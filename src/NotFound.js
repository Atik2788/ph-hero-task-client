import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className=' mx-auto mt-40'>
           <h1 className='text-5xl'> Page Not Found</h1>
             <Link to ='/'><p className='mt-5 text-xl font-bold bg-slate-400 p-4 text-primary'>Go To Home Page </p></Link>
        </div>
    );
};

export default NotFound;