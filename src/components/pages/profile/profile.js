import React from "react";
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
import { useState } from "react";
import axios from 'axios';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#DCDCDC' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));



function Profile() {

    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [addressLine1, setAddressLine1] = useState('');
    const [addressLine2, setAddressLine2] = useState('');
    const [city, setCity] = useState('');
    const [region, setRegion] = useState('');
    const [district, setDistrict] = useState('');
    const [province, setProvince] = useState('');
    const [postalCode, setPostalCode] = useState('');

    return (
        <div>
            <h1 style={{ color: '#017840' }}>Profile</h1>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Item style={{ textAlign: 'left', backgroundColor: '#017840', color: '#fff', fontWeight: 'bold', fontSize: '20px' }}>Personal Info</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <h4>First Name</h4>
                        <TextField
                            id="filled-basic"
                            label="Enter First Name"
                            variant="outlined"
                            style={{ width: '60%', height: '43%' }}
                            onChange={(e) => { setFirstName(e.target.value) }} />
                    </Grid>
                    <Grid item xs={4}>
                        <h4>Middle Name</h4>
                        <TextField
                            id="filled-basic"
                            label="Enter Middle Name"
                            variant="outlined"
                            style={{ width: '60%', height: '43%' }}
                            onChange={(e) => { setMiddleName(e.target.value) }} />
                    </Grid>
                    <Grid item xs={4}>
                        <h4>Last Name</h4>
                        <TextField
                            id="filled-basic"
                            label="Enter Last Name"
                            variant="outlined"
                            style={{ width: '60%', height: '43%' }}
                            onChange={(e) => { setLastName(e.target.value) }}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <h4>Email Address</h4>
                        <TextField
                            id="filled-basic"
                            label="Enter Email Address"
                            variant="outlined"
                            style={{ width: '60%', height: '43%' }}
                            onChange={(e) => { setEmailAddress(e.target.value) }}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <h4>Phone Number</h4>
                        <TextField
                            id="filled-basic"
                            label="Enter Phone No"
                            variant="outlined"
                            style={{ width: '60%', height: '43%' }}
                            onChange={(e) => { setPhoneNumber(e.target.value) }}
                        />
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
                        <TextField
                            id="filled-basic"
                            label="Enter Address Line 1"
                            variant="outlined"
                            style={{ width: '60%', height: '43%' }}
                            onChange={(e) => { setAddressLine1(e.target.value) }}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <h4>Address Line 2</h4>
                        <TextField
                            id="filled-basic"
                            label="Enter Address Line 2"
                            variant="outlined"
                            style={{ width: '60%', height: '43%' }}
                            onChange={(e) => { setAddressLine2(e.target.value) }}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <h4>City</h4>
                        <TextField
                            id="filled-basic"
                            label="Enter City"
                            variant="outlined"
                            style={{ width: '60%', height: '43%' }}
                            onChange={(e) => { setCity(e.target.value) }}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <h4>Region</h4>
                        <TextField
                            id="filled-basic"
                            label="Enter Region"
                            variant="outlined"
                            style={{ width: '60%', height: '43%' }}
                            onChange={(e) => { setRegion(e.target.value) }}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <h4>District</h4>
                        <TextField
                            id="filled-basic"
                            label="Enter District"
                            variant="outlined"
                            style={{ width: '60%', height: '43%' }}
                            onChange={(e) => { setDistrict(e.target.value) }}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <h4>Province</h4>
                        <TextField
                            id="filled-basic"
                            label="Enter Province"
                            variant="outlined"
                            style={{ width: '60%', height: '43%' }}
                            onChange={(e) => { setProvince(e.target.value) }}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <h4>Postal Code</h4>
                        <TextField
                            id="filled-basic"
                            label="Enter Postal Code"
                            variant="outlined"
                            style={{ width: '60%', height: '43%' }}
                            onChange={(e) => { setPostalCode(e.target.value) }}
                        />
                    </Grid>
                </Grid>
            </Box>
            <button style={{ width: '20%', marginTop: '20px', cursor: 'pointer', color: '#fff', backgroundColor: '#017840', height: '40px', fontSize: '15px', border: ' none', borderRadius: '5px' }}>Update</button>
        </div>
    );
}

export default Profile;