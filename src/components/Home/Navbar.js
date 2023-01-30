import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';

const Navbar = () => {

    const [billAmount, setBillAmount] = useState()

    const { data: billTotal = [], refetch, isLoading } = useQuery({
        queryKey: ['lists'],
        queryFn: async () => {
            const res = await fetch(`https://table-task-ph-hero-server.vercel.app/billing-total`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            refetch()
            return data;
        }
    })
    console.log(billTotal)

    useEffect(() => {
        let count = 0;

        billTotal.forEach(element => {
            count = count + Number(element.amount)
        });
        setBillAmount(count)
    }, [billTotal])



    return (
        <div className='py-4 flex px-4 bg-slate-400  justify-between'>
            <h2 className='text-xl font-bold'>Admin Panel</h2>
            <p>Paid Total: ${billAmount}</p>
        </div>
    );
};

export default Navbar;