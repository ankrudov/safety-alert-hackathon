import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ReportForm = ({email}) => {
    const [formValues, setFormValues] = useState({
        email: email,
        latitude: '',
        longitude: '',
        incidentType: ''
    });

    const getLocation = () => {
        navigator.geolocation.getCurrentPosition( position => {
            setFormValues( prevValues => {
                return {
                    ...prevValues,
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                };
            });
            console.log("Latitude is :", formValues.latitude);
            console.log("Longitude is :", formValues.longitude);
        });
    };

    const handleChange = () => {
        return;
    }

    const handleSubmit = () => {
        getLocation();
        return;
    };

    return (
        <Box component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, bgcolor: 'background.paper', boxShadow: 1, borderRadius: 1, p: 2, minWidth: 300 }}
            autoComplete="off"
        >
            <div>
                <TextField
                    required
                    id="incidentType"
                    name="incidentType"
                    label="Incident Type"
                    placeholder=""
                    type="text"
                    onChange={handleChange}
                />
            </div>
            <Button onClick={handleSubmit} >Use My Location</Button>
        </Box>
    );
};

export default ReportForm;