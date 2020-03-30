import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Button from '@material-ui/core/Button';

export default function Traininglist() {
    const [trainings, setTrainings] = useState([]);

    useEffect(() => fetchData() , [])

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/trainings')
        .then(response => response.json())
        .then(data => setTrainings(data.content))
    }

    const deleteTraining = (link) => {
        if (window.confirm('Are you sure?')) {
        fetch(link, {method: 'DELETE'})
        .then(res => fetchData())
        .catch(err => console.error(err))
        }
    }

    const saveTraining = (training) => {
        fetch('https://customerrest.herokuapp.com/api/trainings', {
            method: 'POST',
            headers: {
                'Content-Tpe': 'application/json'
            },
            body: JSON.stringify(training)
        })
        .then(res => fetchData())
        .catch(err => console.error(err))
    }

    const columns = [
        {
            filterable: false,
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
            sortable: false,
            filterable: false,
            Header: 'Customer URL',
            accessor: 'links.2.href'
        },
        {
            sortable: false,
            filterable: false,
            width: 100,
            accessor: 'links.0.href',
            Cell: row => <Button color="secondary" size="small" onClick={() => deleteTraining(row.value)}>Delete</Button>
        }
    ]

    return (
        <div>
            <h3>Manage trainings</h3>
            <ReactTable minRows={0} filterable={true} data={trainings} columns={columns} />
        </div>
    )
}