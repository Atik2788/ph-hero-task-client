import React from 'react';

const TableBody = ({ listItem, setAddBill, refetch }) => {

    const { _id, fullName, email, phone, amount } = listItem;


    const handleDeleteBill = (id) => {

        fetch(`https://table-task-ph-hero-server.vercel.app/billing-list/${id}`, {
            method: 'DELETE',
            headers: {}
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    console.log('delete done');
                    refetch();
                }
                else {
                    alert.error(data.message)
                }
            })
    }

    return (
        <tr key={listItem._id}>
            <td>{_id}</td>
            <td>{fullName}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{amount}</td>
            <td className='font-bold'>
                <label htmlFor="edit-bill" onClick={() => setAddBill(listItem)} className='pr-4'>Edit</label>
                <span className='pr-2'>l</span>
                <button onClick={() => handleDeleteBill(_id)}>Delete</button>
            </td>

        </tr>
    );
};

export default TableBody;