import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Table = () => {



    const { data: billingLists = [], refetch } = useQuery({
        queryKey: ['lists'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/billing-list')
            const data = await res.json()
            // setLoading(false)

            // setBikes(true)
            return data;
        }
    })

    // console.log(billingLists)

    const listOfBilling = billingLists.billingList
    console.log(listOfBilling);

    return (
        <div className='px-4 mt-10'>
          <div>

          </div>

          <div className="overflow-x-auto">
            <table className="table w-full">
              
              <thead className=''>
                <tr>
                  <th>Billing Id</th>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Paid Amount</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>

                  {
                      listOfBilling?.map((listItem) =>
                      (
                        <tr>
                        <td>{listItem.fullName}</td>
                        <td>{listItem.fullName}</td>
                        <td>{listItem.fullName}</td>
                        <td>{listItem.fullName}</td>
                        <td>{listItem.fullName}</td>
                        <td>{listItem.fullName}</td>

                      </tr>

                      ))}                
          
              </tbody>
            </table>
          </div>


        </div>
    );
};

export default Table;