import React from 'react';
import { useForm } from 'react-hook-form';

const EditBill = ({ refetch, setAddBill, addBill }) => {
    // console.log(addBill)  

    const { register, handleSubmit, formState: { errors } } = useForm();


    const handleEditBill = (data) => {

        const billDetails = {
            fullName: data.name,
            email: data.email,
            phone: data.phone,
            amount: data.amount,
        }

        fetch(`https://table-task-ph-hero-server.vercel.app/billing-list/${addBill._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(billDetails)
        })
            .then(res => res.json())
            .then(data => {

                if (data.acknowledged) {
                    refetch()
                    setAddBill(null)
                }
                else {
                    data(data.message)
                }
            })

    }


    return (
        <>
            <input type="checkbox" id="edit-bill" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label onClick={() => setAddBill(null)} htmlFor="edit-bill" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div>
                        <p className='text-xl font-bold'>Edit Bill</p>

                        <div className='mt-5'>

                            <form onSubmit={handleSubmit(handleEditBill)}>

                                <div className="form-control w-full ">
                                    <label className="label"><span className="label-text">Full Name</span></label>
                                    <input type="text" {...register("name", { required: "Name is required", value: `${addBill.fullName}` })} className='input input-bordered w-full ' />
                                    {errors.name && <p className='text-red-600 text-left' role="alert">{errors.name?.message}</p>}

                                </div>

                                <div className="form-control w-full ">
                                    <label className="label"><span className="label-text">Email</span></label>
                                    <input type="email"  {...register("email", { required: "Email is required", value: `${addBill.email}` })} className='input input-bordered w-full ' />
                                    {errors.email && <p className='text-red-600 text-left' role="alert">{errors.email?.message}</p>}
                                </div>

                                <div className="form-control w-full ">
                                    <label className="label"><span className="label-text">Phone</span></label>
                                    <input type="number"  {...register("phone", { required: "Phone number is required", value: `${addBill.phone}` })} className='input input-bordered w-full ' />
                                    {errors.phone && <p className='text-red-600 text-left' role="alert">{errors.phone?.message}</p>}
                                </div>

                                <div className="form-control w-full ">
                                    <label className="label"><span className="label-text">Amount</span></label>
                                    <input type="number"  {...register("amount", { required: "Amount is required", value: `${addBill.amount}` })} className='input input-bordered w-full ' />
                                    {errors.amount && <p className='text-red-600 text-left' role="alert">{errors.amount?.message}</p>}
                                </div>


                                <input className='btn btn-accent w-full btnCss mt-3' value='Edit Bill' type="submit" />
                            </form>


                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditBill;