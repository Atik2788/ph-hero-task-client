import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Table2 from './Table2';

const Table = () => {
  // const perPage = 10;

  // const [count, setCount] = useState('')
  // console.log(count);


    // const { data: billingLists = [], refetch } = useQuery({
    //     queryKey: ['lists'],
    //     queryFn: async () => {
    //         const res = await fetch('http://localhost:5000/billing-list', {
    //           headers:{
    //             authorization: `bearer ${localStorage.getItem('accessToken')}`
    //           }
    //         })
    //         const data = await res.json()
    //         return data;
    //     }
    // })

    // console.log(billingLists)

    // const listOfBilling = billingLists.billingList;
    // const count = billingLists.count;
    // console.log(count);


    // const [page, setPage] = useState(0)
    // const [size, setSize] = useState(10)
  
    // const pages = count / size;

    return (


      <Table2></Table2>
        
    );
};

export default Table;