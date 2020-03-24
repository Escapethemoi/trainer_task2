import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

export default function Custtrainlist() {
    const [custtrains, setCusttrains] = useState([]);

    useEffect(() => fetchData() , [])

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
        .then(response => response.json())
        .then(data => setCusttrains(data))
    }

    const columns = [
        {
            Header: 'Date',
            accessor: 'date'
        },
        {
            Header: 'Duration',
            accessor: 'duration'
        },
        {
            Header: 'Activity',
            accessor: 'activity'
        },
        {
            Header: 'Customers First Name',
            accessor: 'customer.firstname'
        },
        {
            Header: 'Customers Last Name',
            accessor: 'customer.lastname'
        }
    ]

    return (
        <div>
            <h2>Trainings</h2>
            <ReactTable minRows={0} filterable={true} data={custtrains} columns={columns} />
        </div>
    )
}