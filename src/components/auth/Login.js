import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

  const [error, setError] = useState('')

  const navigate = useNavigate()


  const handleLogin = event => {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password)


      fetch(`http://localhost:5000/login?email=${email}&password=${password}`)
        .then((res) => res.json())
        .then(data => {
          // console.log(data)
          getUserToken(data.email)
          // navigate('/table')
        })
        .catch(err => setError("Please Enter Valid Email and Password"))
} 

  const getUserToken = email =>{
    fetch(`http://localhost:5000/jwt?email=${email}`)
    .then(res => res.json())
    .then(data =>{
        if(data.accessToken){
            localStorage.setItem('accessToken', data.accessToken)
            navigate('/')
        }
    })
  }
    

  console.log(error);

    return (
        <div className="lg:w-2/4 mx-auto lg:my-40 px-3 lg:px-0 md:px-6 my-10 text-center lg:flex justify-center">
        <div className="">
  
          <div className="shadow-xl lg:w-[500px]  lg:p-6 p-3">
            <h1 className="text-5xl mb-5">Login</h1>
  
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="" alt="" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
                <p className='text-red-700 text-left'>{error}</p>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Login" />
              </div>
            </form>
            <p className="text-center mb-10">
              New to Admin Panel?
              <Link to="/register" className="text-primary font-bold">
                Sign Up
              </Link>
            </p>
            

            
          </div>
        </div>
      </div>
    );
};

export default Login;