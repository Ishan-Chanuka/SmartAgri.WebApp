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
import axios from 'axios';
import { baseUrl, baseUrl2 } from '../../../environment/variables';

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

    const [vehicle, setVehicle] = useState('');
    const handleVehicleChange = (event) => {
        setVehicle(event.target.value);
    }
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [addressLine1, setAddressLine1] = useState('');
    const [addressLine2, setAddressLine2] = useState('');
    const [city, setCity] = useState('');
    const [district, setDistrict] = useState('');
    const [province, setProvince] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [landType, setLandType] = useState(0);
    const handleLandTypeChange = (event) => {
        setLandType(parseInt(event.target.value));
    };
    const [landSize, setLandSize] = useState(0);
    const [region, setRegion] = useState(0);
    const handleRegionChange = (event) => {
        setRegion(parseInt(event.target.value));
    }
    const [cropsType, setCropType] = useState(0);
    const handleCropTypeChange = (event) => {
        setCropType(parseInt(event.target.value));
    };
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [dob, setDOB] = useState(null);
    const [nicNumber, setNICNumber] = useState('');
    const [vehicleType, setVehicleType] = useState('');
    const handleVehicleTypeChange = (event) => {
        setVehicleType(event.target.value);
    };
    const [vehicleNo, setVehicleNo] = useState('');
    const [vehicleCapasity, setVehicleCapasity] = useState(0);

    const data = {
        roleType: 5,
        firstName: firstName,
        middleName: middleName,
        lastName: lastName,
        email: emailAddress,
        addressLine1: addressLine1,
        addressLine2: addressLine2,
        city: city,
        region: region,
        district: district,
        province: province,
        postalCode: postalCode,
        phoneNumber: phoneNumber,
        role: "Distributor",
        password: password,
        confPassword: confirmPassword,
        dob: dob,
        nic: nicNumber,
        landType: landType,
        landSize: landSize,
        cropsType: cropsType,
        vehicleType: vehicleType,
        vehicleCapacity: vehicleCapasity,
        vehicleNo: vehicleNo
    }

    const addDistributor = () => {
        axios.post(`${baseUrl}/Account/register`, data)
            .then((response) => {
                if (response.data.success === true) {
                    alert("${response.data.message}")
                    console.log(response.data.data)
                }
                else if (response.data.Success === false) {
                    alert(response.data.data.Message)
                }
            })
            .catch((error) => {
                console.error(error)
                alert(error)
            })
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
                        <TextField
                            id="filled-basic"
                            label="Enter First Name"
                            variant="outlined"
                            style={{ width: '60%', height: '43%' }}
                            onChange={(e) => { setFirstName(e.target.value) }}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <h4>Middle Name</h4>
                        <TextField
                            id="filled-basic"
                            label="Enter Middle Name"
                            variant="outlined"
                            style={{ width: '60%', height: '43%' }}
                            onChange={(e) => { setMiddleName(e.target.value) }}
                        />
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
                    <Grid item xs={4}>
                        <h4>Date of birth</h4>
                        <input
                            type="date"
                            id="startDate"
                            style={{ width: '60%', height: '43%' }}
                            onChange={(e) => { setDOB(e.target.value) }}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <h4>NIC Number</h4>
                        <TextField
                            id="filled-basic"
                            label="Enter Phone No"
                            variant="outlined"
                            style={{ width: '60%', height: '43%' }}
                            onChange={(e) => { setNICNumber(e.target.value) }}
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
                    <Grid item xs={4}>
                        <h4>Password</h4>
                        <TextField
                            id="password"
                            label="Password"
                            type="password"
                            style={{ width: '60%', height: '43%' }}
                            autoComplete="current-password"
                            onChange={(e) => { setPassword(e.target.value) }}
                        />
                    </Grid>

                    <Grid item xs={4}>
                        <h4>Confirm Password</h4>
                        <TextField
                            id="confirm-password"
                            label="Confirm Password"
                            type="password"
                            style={{ width: '60%', height: '43%' }}
                            autoComplete="confirm-password"
                            onChange={(e) => { setConfirmPassword(e.target.value) }}
                        />
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
                                <MenuItem value="Lorry">Lorry</MenuItem>
                                <MenuItem value="Tractor">Tractor</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                        <h4>Vehicle Capacity</h4>
                        <TextField
                            id="filled-basic"
                            label="Enter Vehicle Capacity"
                            variant="outlined"
                            style={{ width: '60%', height: '43%' }}
                            onChange={(e) => { setVehicleCapasity(e.target.value) }}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <h4>Vehicle No</h4>
                        <TextField
                            id="filled-basic"
                            label="Enter Vehicle No"
                            variant="outlined"
                            style={{ width: '60%', height: '43%' }}
                            onChange={(e) => { setVehicleNo(e.target.value) }}
                        />
                    </Grid>
                </Grid>
            </Box>
            <button style={{ width: '20%', marginTop: '20px', cursor: 'pointer', color: '#fff', backgroundColor: '#017840', height: '40px', fontSize: '15px', border: ' none', borderRadius: '5px' }} onClick={addDistributor}>Save</button>
        </div>
    )
}

export default AddDistributor;