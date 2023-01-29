import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, SetPassword] = useState('')
    const [userdata, setUserData] = useState('')

    console.log(email, password)

    // console.log(email, password);

    const [signUpError, setSignUpError] = useState('')

    const { register, handleSubmit, formState: { errors } } = useForm();


    



    const handleSignup = (data) => {
        setEmail(data.email)
        SetPassword(data.password)


        
      fetch(`http://localhost:5000/login?email=${email}&password=${password}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
    }

    console.log(userdata)

        //     const {data:userData = []} = useQuery({
        //     queryKey: ['userData'],
        //     queryFn: () =>fetch(`http://localhost:5000/login?email=${email}&password=${password}`)
        //     .then(res=>res.json())
        // })
        // console.log(userData)




    return (
<div className='lg:w-2/4 mx-auto lg:my-40 px-3 lg:px-0 md:px-6 my-10 text-center lg:flex justify-center'>
            <div className='shadow-xl lg:w-[500px]  lg:p-6 p-3 '>
                <p className='text-5xl mb-5'>Login</p>

                <form className='grid grid-cols-1 gap-3' onSubmit={handleSubmit(handleSignup)}>

                    <div>
                        <label className="label"><span className="label-text">Email</span></label>
                        <input {...register("email", { required: "Email address is required" })} type="email" placeholder="Email" className="input input-bordered w-full" />
                        {errors.email && <p className='text-red-600 text-left' role="alert">{errors.email?.message}</p>}
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

                    <input className='btn bg-blue-700 w-full mt-3' type="submit" />

                </form>
                <p className='mt-4 text-md font-semibold text-left mb-6'>Already have an account? <Link className='text-blue-700' to='/register'>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;