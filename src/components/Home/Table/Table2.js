import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import AddBill from '../Modal/AddBill';
import './Table.css'

const Table2 = () => {

    const [addBill, setAddBill] = useState(null)

    const [lists, setLists] = useState([])
    const [count, setCount] = useState(0)
    const [page, setPage] = useState(0)
    const [size, setSize] = useState(10)
    const pages = Math.ceil(count / size);


    const { data = [], refetch } = useQuery({
        queryKey: ['lists'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/billing-list?page=${page}&size=${size}`, {
              headers:{
                authorization: `bearer ${localStorage.getItem('accessToken')}`
              }
            })
            const data = await res.json()
            setCount(data.count)
            setLists(data.billingList)
            refetch()
            return data;
        }
    })


 

    return (
        <div>


            <div className='px-0 mt-16'>

            <div className='flex justify-between mb-7 bg-slate-200 py-3 rounded-sm px-4 text-sm font-bold'>
                <p>
                <span className='pr-5'>Billings</span>
                <span><input type="text" placeholder='Search' className='pl-4 py-1'/></span>
                </p>

                <label htmlFor="add-user-modal" onClick={() => setAddBill('Added')} className='bg-slate-400 p-2 rounded'>Add New Bill</label>
                {/* <label  onClick={() => setEditUserData('Added')}>ADD USER</label> */}
            </div>

            <div className="overflow-x-auto">
            <table className="table w-full">
                
                <thead className=''>
                <tr>
                    <th>Billing ID</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Paid Amount</th>
                    <th>Actions</th>
                </tr>
                </thead>

                <tbody>

                    {
                        lists?.map((listItem) =>
                        (
                        <tr key={listItem._id}>
                        <td>{listItem._id}</td>
                        <td>{listItem.fullName}</td>
                        <td>{listItem.email}</td>
                        <td>{listItem.phone}</td>
                        <td>{listItem.amount}</td>
                        <td className='font-bold'>
                            <span className='pr-4'>Edit</span>
                            <span className='pr-2'>l</span>
                            <span>Delete</span>
                        </td>

                        </tr>

                        ))}                

                </tbody>
            </table>
            </div>

            </div>

            <div className='mt-10 pagination'>
                {/* <p>current page{page+1}</p> */}
                {
                    [...Array(pages)?.keys()].map(number => <button
                        kye={number+1}
                        className={page === number && "selected"}
                        onClick={() => setPage(number)}
                    >
                        {number+1}
                    </button>)
                }

                    <select onChange={event => setSize(event.target.value)} defaultValue={10}  className='bg-zinc-700 text-white rounded-lg px-2 '>
                        <option value='5'>5</option>
                        <option value='10' >10</option>
                        <option value='15'>15</option>
                        <option value='20'>20</option>
                    </select>   
            </div>


                {addBill && 
                
                <AddBill
                    setAddBill={setAddBill}
                    refetch={refetch}
                ></AddBill>
                    
                }



        </div>

    );
};

export default Table2;