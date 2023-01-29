import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Register = () => {
    const [error, setError] = useState('')

    const [signUpError, setSignUpError] = useState('')
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleSignup = (data) => {
        // console.log(data);

        fetch(`http://localhost:5000/loginEmail?email=${data.email}`)
        .then((res) => res.json())
        .then(data => {
          console.log(data)
          setError('User Email already exist!! Please use a new email.')
        })
        .catch(err => postUser(data.name, data.email, data.phone, data.password))

        

        // createUser = (data.email, data.password, data.phone, data.name)

    }

    const postUser = (name, email, phone, password) => {
        const user ={name, email, phone, password}
        fetch("http://localhost:5000/login", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
            navigate('/table')
        })



    }



    return (
        <div className='lg:w-2/4 mx-auto lg:my-40 px-3 lg:px-0 md:px-6 my-10 text-center lg:flex justify-center'>
            <div className='shadow-xl lg:w-[500px]  lg:p-6 p-3 '>
                <p className='text-5xl mb-5'>Sing Up</p>

                <form className='grid grid-cols-1 gap-3' onSubmit={handleSubmit(handleSignup)}>

                    <div>
                        <label className="label"><span className="label-text">Full Name</span></label>
                        <input {...register("name", { required: "Name is required" })} type="text" placeholder="Name" className="input input-bordered w-full" />
                        {errors.name && <p className='text-red-600 text-left' role="alert">{errors.name?.message}</p>}
                    </div>

                    <div>
                        <label className="label"><span className="label-text">Email</span></label>
                        <input {...register("email", { required: "Email address is required" })} type="email" placeholder="Email" className="input input-bordered w-full" />
                        {errors.email && <p className='text-red-600 text-left' role="alert">{errors.email?.message}</p>}
                    </div>

                    <div>
                        <label className="label"><span className="label-text">Phone Number</span></label>
                        <input {...register("phone", { 
                            required: "Phone number is required",
                            maxLength: {value: 11, message: 'Phone Number must be 11 characters long'},
                            minLength: {value: 11, message: 'Phone Number must be 11 characters long'}
                      })} type="number" placeholder="Phone Number" className="input input-bordered w-full" />
                        {errors.phone && <p className='text-red-600 text-left' role="alert">{errors.phone?.message}</p>}
                    </div>

                    <div>
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password"  {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: 'Password must be 6 characters long' },
                        })} className='input input-bordered w-full ' />

                        <label className="label"><span className="label-text">Forget Password?</span></label>
                        {errors.password && <p className='text-red-600 text-left' role="alert">{errors.password?.message}</p>}
                    </div>

                    {signUpError && <p className='text-red-600 text-left'>{signUpError}</p>}
                    {error && <p className='text-red-600 text-left'>{error}</p>}

                    <input className='btn btn-primary w-full mt-3' type="submit" />

                </form>
                <p className='mt-4 text-md font-semibold text-left mb-6'>Already have an account? <Link className='text-primary' to='/login'>Login</Link></p>
            </div>
        </div>
    );
};


export default Register;