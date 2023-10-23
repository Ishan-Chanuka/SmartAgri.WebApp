import React from "react";
import './updatedistributor.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import { useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#DCDCDC' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));

function UpdateDistributor() {

    const [selected, setSelected] = React.useState('Select');
    const [startDate, setStartDate] = React.useState(null);
    const [endDate, setEndDate] = React.useState(null);
    const [transportMethod, setTransportMethod] = React.useState('none'); // Default value

    const handleChange = (event) => {
        setSelected(event.target.value);
    };

    const handleTransportMethodChange = (event) => {
        setTransportMethod(event.target.value);
    };

    const [vehicle, setVehicle] = useState('');
    const handleVehicleChange = (event) => {
        setVehicle(event.target.value);
    }

    const updateDistributor = () => {
        alert("Functions are not working currently")
    }

    return (
        <div>
            <h1 style={{ color: '#017840' }}>Update Distributor</h1>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Item style={{ textAlign: 'left', backgroundColor: '#017840', color: '#fff', fontWeight: 'bold', fontSize: '20px' }}>Personal Info</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <h4>Registration Code</h4>
                        <TextField id="filled-basic" label="Enter Registration Code" variant="outlined" style={{ width: '60%', height: '43%' }} />
                    </Grid>
                    <Grid item xs={4}>
                        <h4>Email Address</h4>
                        <TextField id="filled-basic" label="Enter Email Address" variant="outlined" style={{ width: '60%', height: '43%' }} />
                    </Grid>
                    <Grid item xs={4}>
                        <h4>Phone Number</h4>
                        <TextField id="filled-basic" label="Enter Phone No" variant="outlined" style={{ width: '60%', height: '43%' }} />
                    </Grid>
                </Grid>
            </Box>


            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Item style={{ textAlign: 'left', backgroundColor: '#017840', color: '#fff', fontWeight: 'bold', fontSize: '20px', marginTop: '20px' }}>Vehicle Info</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <h4>Vehicle Type</h4>
                        <FormControl variant="outlined" style={{ width: '60%' }}>
                            <InputLabel id="vehicleLable">Select Vehicle Type</InputLabel>
                            <Select
                                labelId="vehicleLable"
                                id="vehicle"
                                label="Select Vehicle Type"
                                value={vehicle}
                                onChange={handleVehicleChange}
                            >
                                <MenuItem value="1">Lorry</MenuItem>
                                <MenuItem value="2">Tractor</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                        <h4>Vehicle Capacity</h4>
                        <TextField id="filled-basic" label="Enter Vehicle Capacity" variant="outlined" style={{ width: '60%', height: '43%' }} />
                    </Grid>
                    <Grid item xs={4}>
                        <h4>Vehicle No</h4>
                        <TextField id="filled-basic" label="Enter Vehicle No" variant="outlined" style={{ width: '60%', height: '43%' }} />
                    </Grid>
                </Grid>
            </Box>
            <button style={{ width: '20%', marginTop: '20px', cursor: 'pointer', color: '#fff', backgroundColor: '#017840', height: '40px', fontSize: '15px', border: ' none', borderRadius: '5px' }} onClick={updateDistributor}>Save</button>
        </div>
    );
}

export default UpdateDistributor;