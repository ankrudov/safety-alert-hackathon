import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SignUpForm = () => {

    const [allValues, setAllValues] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [passwordError, setPasswordError] = useState(false);

    const handleChange = (e) => {
        removeErrors()
        setAllValues( prevValues => {
            return {
                ...prevValues,
                [e.target.name]: e.target.value
            }
        });
        console.log(e.target.value);
    };

    const confirmPasswordMatch = () => {
        setPasswordError(false);
        if ( allValues.password !== allValues.confirmPassword ) {
            setPasswordError(!passwordError);
            console.log("Passwords don't match");
            console.log()
            return false;
        }
        return true;
    };

    const removeErrors = () => {
        setPasswordError(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!confirmPasswordMatch()) return;

        // Need to update URL
        const url = "/";
        fetch(url, {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                 "email": allValues.email,
                 "password": allValues.password,
            })
         });
    };

    return (
        <Box component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, bgcolor: 'background.paper', boxShadow: 1, borderRadius: 1, p: 2, minWidth: 300 }}
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
                <TextField
                    required
                    id="confirm_password"
                    name="confirmPassword"
                    label="Confirm Password"
                    placeholder="Password"
                    type="password"
                    error={passwordError}
                    onChange={handleChange}
                />
            </div>
            <Button onClick={handleSubmit} variant="contained">Register</Button>
        </Box>
    )
};

const SignUpPage = () => {
    return (
        <div>
            <SignUpForm />
        </div>
    );
};

export default SignUpPage;