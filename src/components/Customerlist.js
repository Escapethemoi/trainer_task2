import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

export default function Customerlist() {
    const [customers, setCustomers] = useState([]);

    useEffect(() => fetchData() , [])

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then(data => setCustomers(data.content))
    }

    const columns = [
        {
            Header: 'First Name',
            accessor: 'firstname'
        },
        {
            Header: 'Last Name',
            accessor: 'lastname'
        },
        {
            Header: 'Street Address',
            accessor: 'streetaddress'
        },
        {
            Header: 'Post Code',
            accessor: 'postcode'
        },
        {
            Header: 'City',
            accessor: 'city'
        },
        {
            sortable: false,
            filterable: false,
            Header: 'Email',
            accessor: 'email'
        },
        {
            sortable: false,
            filterable: false,
            Header: 'Phone',
            accessor: 'phone'
        }
    ]

    return (
        <div>
            <h2>Customers</h2>
            <ReactTable minRows={0} filterable={true} data={customers} columns={columns} />
        </div>
    )
}