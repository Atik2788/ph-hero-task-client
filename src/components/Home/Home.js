import React from 'react';
import Register from '../auth/Register';
import Footer from './Footer';
import Navbar from './Navbar';
import Table from './Table';

const Home = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <Table></Table>
            <Footer></Footer>
        </div>
    );
};

export default Home;