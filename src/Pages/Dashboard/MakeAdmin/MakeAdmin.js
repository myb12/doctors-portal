import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');

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
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => { })
    }
    return (
        <div>
            <h2>Make an Admin</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    onBlur={handleEmail}
                    label="Insert an email"
                    variant="standard"
                    type="email"
                />
                <br />
                <Button type="submit" sx={{ mt: 1 }} variant="outlined">Make Admin</Button>

            </form>
        </div >
    );
};

export default MakeAdmin;