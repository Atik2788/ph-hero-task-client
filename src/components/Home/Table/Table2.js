import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import AddBill from '../Modal/AddBill';
import EditBill from '../Modal/EditBill';
import './Table.css'
import TableBody from './TableBody';

const Table2 = () => {

    const [addBill, setAddBill] = useState(null)

    const [page, setPage] = useState(0)
    const [size, setSize] = useState(10)
    const [lists, setLists] = useState([])
    const [count, setCount] = useState(0)


    // search ****************
    const searchRef = useRef()
    const [search, setSearch] = useState('')


    const { data: lists2 = {}, refetch, isLoading } = useQuery({
        queryKey: ['billingLists'],
        queryFn: async () => {
            const res = await fetch(`https://table-task-ph-hero-server.vercel.app/billing-list?search=${search}&page=${page}&size=${size}`, {
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()

            setCount(data?.count)
            setLists(data?.billingList)
            return data;
        }
    })


    useEffect(() => {
        refetch()
    }, [page, search, size, refetch])

    const pages = Math.ceil(count / size);


    const { handleSubmit, formState: { errors } } = useForm();

    const handleSearch = () => {
        setSearch(searchRef.current.value)
    }


    if (isLoading) {
        return <div className="w-16 h-16 border-4 border-dashed rounded-full mx-auto animate-spin dark:border-violet-400"></div>
    }

    return (
        <div>

            <div className='px-0 mt-16'>

                <div className='flex justify-between mb-7 bg-slate-200 py-3 rounded-sm px-4 text-sm font-bold'>
                    <span className='flex'>
                        <span className='pr-5'>Billings</span>
                        <form onSubmit={handleSubmit(handleSearch)}><input ref={searchRef} type="text" placeholder='Search' className='pl-4 py-1' /></form>
                    </span>

                    <label htmlFor="add-bill" onClick={() => setAddBill('Added')} className='bg-slate-400 p-2 rounded'>Add New Bill</label>
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

                        {count > 0 &&
                            <tbody>

                                {
                                    lists?.map((listItem, i) =>
                                    (
                                        <TableBody
                                            key={i}
                                            listItem={listItem}
                                            setAddBill={setAddBill}
                                            refetch={refetch}
                                        ></TableBody>
                                    ))}

                            </tbody>
                        }


                    </table>
                </div>

            </div>

            <div className='mt-10 pagination'>
                {
                    [...Array(pages)?.keys()].map((number) => <button
                        key={number}
                        className={` ${page === number && "selected"}`}
                        onClick={() => setPage(number)}
                    >
                        {number + 1}
                    </button>)
                }

                <select onChange={event => setSize(event.target.value)} defaultValue={'10'} className='bg-zinc-700 text-white rounded-lg px-2 '>
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

            {addBill &&
                <EditBill
                    setAddBill={setAddBill}
                    addBill={addBill}
                    refetch={refetch}
                ></EditBill>
            }



        </div>

    );
};

export default Table2;