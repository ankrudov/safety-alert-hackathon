import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const postData = (url, data) => {
    fetch(url, {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: data
     });
};

const LoginForm = () => {

    const [login, setLogin] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setLogin( prevValues => {
            return {
                ...prevValues,
                [e.target.name]: e.target.value
            };
        });
        console.log('Email: ' + login.email);
        console.log('Password: ' + login.password);
    };

    const handleSubmit = () => {
        const url = "/login";
        const data = JSON.stringify({
            "email": login.email,
            "password": login.password
       })
        postData(url, data);
    };

    return (
        <Box component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, bgcolor: 'background.paper', boxShadow: 1, borderRadius: 1, p: 2 }}
            autoComplete="off"
        >
            <div>
                <TextField
                    required
                    id="email"
                    name="email"
                    label="Email"
                    placeholder="email@domain.com"
                    type="email"
                    onChange={handleChange}
                />
                <TextField
                    required
                    id="password"
                    name="password"
                    label="Password"
                    placeholder="Password"
                    type="password"
                    onChange={handleChange}
                />

            </div>
            <Button onClick={handleSubmit} variant="contained">Log In</Button>
        </Box>
    );
};

export default LoginForm;