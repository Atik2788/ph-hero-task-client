import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';

const Navbar = () => {

    const [billAmount, setBillAmount] = useState()

    const { data: billTotal = [], refetch, isLoading } = useQuery({
        queryKey: ['lists'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/billing-total`, {
              headers:{
                authorization: `bearer ${localStorage.getItem('accessToken')}`
              }
            })
            const data = await res.json()
            refetch()
            return data;
        }
    })
    // console.log(billTotal)

    useEffect(() => {
        let count = 0;

        billTotal.forEach(element => {
            count = count+Number(element.amount)
        });


        setBillAmount(count)
        // console.log(count);

    }, [billTotal])



    const rotateLeft = (array, int) =>{
        let filterArray = [...array]
        filterArray.splice(filterArray.indexOf(int),1);

        return [...filterArray, int]
    
    }
    console.log(rotateLeft([1, 5, 6, 10, 58, 45, 4], 10))




    // const totalAmount = totalPableAmount(bills)
    // console.log('total amount', totalAmount)





    return (
        <div className='py-4 flex px-4 bg-slate-400  justify-between'>
            <h2 className='text-xl font-bold'>Admin Panel</h2>
            <p>Paid Total: ${billAmount}</p>
        </div>
    );
};

export default Navbar;