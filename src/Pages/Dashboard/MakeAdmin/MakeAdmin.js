import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const token = sessionStorage.getItem('jwt');

    const handleEmail = e => {
        setEmail(e.target.value)
    }
    console.log(email);

    const handleSubmit = e => {
        e.preventDefault();
        const user = { email }
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            })
    }
    return (
        <div>
            <h2>Make an Admin</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    onBlur={handleEmail}
                    label="Insert an email"
                    variant="standard"
                    type="email"
                />
                <br />
                <Button type="submit" sx={{ mt: 1 }} variant="outlined">Make Admin</Button>
            </form>
            {success && <Alert severity="success">Made Admin successfully!</Alert>}
        </div >
    );
};

export default MakeAdmin;