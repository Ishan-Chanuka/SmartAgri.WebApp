import React from 'react';
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
import { baseUrl, baseUrl2 } from '../../../environment/variables';
import InputLabel from '@mui/material/InputLabel';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#DCDCDC' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));

function AddFarmer() {

    const [selected, setSelected] = useState('Select');
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [transportMethod, setTransportMethod] = useState(true); // Default value
    const handleTransportMethodChange = (event) => {
        setTransportMethod(event.target.value === 'true');
    };

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
        roleType: 4,
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
        role: "Farmer",
        password: password,
        confPassword: confirmPassword,
        dob: dob,
        nic: nicNumber,
        landType: landType,
        landSize: landSize,
        cropsType: cropsType,
        hasTransportMedium: transportMethod,
        vehicleType: vehicleType,
        vehicleCapacity: vehicleCapasity,
        vehicleNo: vehicleNo
    }

    const addFarmer = () => {
        axios.post(`${baseUrl}/Account/register`, data)
            .then((response) => {
                if (response.data.Success === true) {
                    alert(response.data.data)
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
            <h1 style={{ color: '#017840' }}>Add Farmer</h1>
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
                    <Grid item xs={4}>
                        <h4>Date of birth</h4>
                        <input type="date" id="startDate" style={{ width: '60%', height: '43%' }} onChange={(e) => { setDOB(e.target.value) }} />
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
                        <Item style={{ textAlign: 'left', backgroundColor: '#017840', color: '#fff', fontWeight: 'bold', fontSize: '20px', marginTop: '20px' }}>Farmer Info</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <h4>Land Type</h4>
                        <FormControl variant="outlined" style={{ width: '60%' }}>
                            <InputLabel id="landLable">Select Land Type</InputLabel>
                            <Select
                                labelId="landLable"
                                id="land"
                                value={landType}
                                onChange={handleLandTypeChange}
                                label="Select Land Type"
                            >
                                <MenuItem value="1">Irrigated</MenuItem>
                                <MenuItem value="2">Rainfed</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                        <h4>Land Size</h4>
                        <TextField
                            id="filled-basic"
                            label="Enter Land Size"
                            variant="outlined"
                            style={{ width: '60%', height: '43%' }}
                            onChange={(e) => { setLandSize(e.target.value) }}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <h4>Crops Type</h4>
                        <FormControl variant="outlined" style={{ width: '60%' }}>
                            <InputLabel id="cropLable">Select Crop Type</InputLabel>
                            <Select
                                labelId="cropLable"
                                id="crop"
                                value={cropsType}
                                onChange={handleCropTypeChange}
                                label="Select Crop Type"
                            >
                                <MenuItem value="1">Rice</MenuItem>
                                <MenuItem value="2">Vegetable</MenuItem>
                                <MenuItem value="3">Fruit</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                        <h4>Transport Method</h4>
                        <FormControl component="fieldset">
                            <RadioGroup
                                row
                                aria-label="transportMethod"
                                name="transportMethod"
                                value={transportMethod}
                                onChange={handleTransportMethodChange}
                            >
                                <FormControlLabel
                                    value="true"
                                    control={<Radio />}
                                    label="Yes"
                                />
                                <FormControlLabel
                                    value="fales"
                                    control={<Radio />}
                                    label="No"
                                />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                        <h4>Vehicle Type</h4>
                        <FormControl variant="outlined" style={{ width: '60%' }}>
                            <InputLabel id="vehicletype">Select Vehicle Type</InputLabel>
                            <Select
                                labelId="vehicletype"
                                id="vehitype"
                                value={vehicleType}
                                onChange={handleVehicleTypeChange}
                                label="Select Vehicle Type"
                            >
                                <MenuItem value="Lorry">Lorry</MenuItem>
                                <MenuItem value="Tractor">Tractor</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                        <h4>Vehicle Number</h4>
                        <TextField
                            id="filled-basic"
                            label="Enter Vehicle Number"
                            variant="outlined" s
                            style={{ width: '60%', height: '43%' }}
                            onChange={(e) => { setVehicleNo(e.target.value) }}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <h4>Vehicle Capasity</h4>
                        <TextField
                            id="filled-basic"
                            label="Enter Vehicle Capasity"
                            variant="outlined" s
                            style={{ width: '60%', height: '43%' }}
                            onChange={(e) => { setVehicleCapasity(e.target.value) }}
                        />
                    </Grid>
                </Grid>
            </Box>
            <button style={{ width: '20%', marginTop: '20px', cursor: 'pointer', color: '#fff', backgroundColor: '#017840', height: '40px', fontSize: '15px', border: ' none', borderRadius: '5px' }} onClick={addFarmer}>Save</button>
        </div>
    );
}

export default AddFarmer;
