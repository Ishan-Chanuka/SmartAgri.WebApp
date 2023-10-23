import React from "react";
import './adddistributor.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import { useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#DCDCDC' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));

function AddDistributor() {
    const [selected, setSelected] = React.useState('Select');
    const [startDate, setStartDate] = React.useState(null);
    const [endDate, setEndDate] = React.useState(null);

    const handleChange = (event) => {
        setSelected(event.target.value);
    };

    const [region, setRegion] = useState('');
    const handleRegionChange = (event) => {
        setRegion(event.target.value);
    }
    const [vehicle, setVehicle] = useState('');
    const handleVehicleChange = (event) => {
        setVehicle(event.target.value);
    }

    const addDistributor = () => {
        alert("Functions are not working currently")
    }

    return (
        <div>
            <h1 style={{ color: '#017840' }}>Distributors</h1>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Item style={{ textAlign: 'left', backgroundColor: '#017840', color: '#fff', fontWeight: 'bold', fontSize: '20px' }}>Personal Info</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <h4>First Name</h4>
                        <TextField id="filled-basic" label="Enter First Name" variant="outlined" style={{ width: '60%', height: '43%' }} />
                    </Grid>
                    <Grid item xs={4}>
                        <h4>Middle Name</h4>
                        <TextField id="filled-basic" label="Enter Middle Name" variant="outlined" style={{ width: '60%', height: '43%' }} />
                    </Grid>
                    <Grid item xs={4}>
                        <h4>Last Name</h4>
                        <TextField id="filled-basic" label="Enter Last Name" variant="outlined" style={{ width: '60%', height: '43%' }} />
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
                        <Item style={{ textAlign: 'left', backgroundColor: '#017840', color: '#fff', fontWeight: 'bold', fontSize: '20px', marginTop: '20px' }}>Address Info</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <h4>Address Line 1</h4>
                        <TextField id="filled-basic" label="Enter Address Line 1" variant="outlined" style={{ width: '60%', height: '43%' }} />
                    </Grid>
                    <Grid item xs={4}>
                        <h4>Address Line 2</h4>
                        <TextField id="filled-basic" label="Enter Address Line 2" variant="outlined" style={{ width: '60%', height: '43%' }} />
                    </Grid>
                    <Grid item xs={4}>
                        <h4>City</h4>
                        <TextField id="filled-basic" label="Enter City" variant="outlined" style={{ width: '60%', height: '43%' }} />
                    </Grid>
                    <Grid item xs={4}>
                        <h4>Region</h4>
                        <FormControl variant="outlined" style={{ width: '60%' }}>
                            <InputLabel id="regionLable">Select Region</InputLabel>
                            <Select
                                labelId="regionLable"
                                id="region"
                                label="Select Region"
                                value={region}
                                onChange={handleRegionChange}
                            >
                                <MenuItem value="1">Batuwatta-NOT</MenuItem>
                                <MenuItem value="2">Batuwatta-EST</MenuItem>
                                <MenuItem value="3">Batuwatta-SOU</MenuItem>
                                <MenuItem value="4">Batuwatta-WST</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                        <h4>District</h4>
                        <TextField id="filled-basic" label="Enter District" variant="outlined" style={{ width: '60%', height: '43%' }} />
                    </Grid>
                    <Grid item xs={4}>
                        <h4>Province</h4>
                        <TextField id="filled-basic" label="Enter Province" variant="outlined" style={{ width: '60%', height: '43%' }} />
                    </Grid>
                    <Grid item xs={4}>
                        <h4>Postal Code</h4>
                        <TextField id="filled-basic" label="Enter Postal Code" variant="outlined" style={{ width: '60%', height: '43%' }} />
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
            <button style={{ width: '20%', marginTop: '20px', cursor: 'pointer', color: '#fff', backgroundColor: '#017840', height: '40px', fontSize: '15px', border: ' none', borderRadius: '5px' }} onClick={addDistributor}>Save</button>
        </div>
    )
}

export default AddDistributor;