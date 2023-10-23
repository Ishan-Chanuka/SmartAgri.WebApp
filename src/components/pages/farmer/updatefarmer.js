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

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#DCDCDC' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));

function UpdateFarmer() {

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

    const updateFarmer = () => {
        alert("Functions are not working currently")
    }

    return (
        <div>
            <h1 style={{ color: '#017840' }}>Update Farmer</h1>
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
                        <Item style={{ textAlign: 'left', backgroundColor: '#017840', color: '#fff', fontWeight: 'bold', fontSize: '20px', marginTop: '20px' }}>Farmer Info</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <h4>Land Type</h4>
                        <FormControl variant="outlined" style={{ width: '60%' }}>
                            <Select
                                value={selected}
                            // onChange={handleSeasonChange}
                            >
                                <MenuItem value="Select">Select Land Type</MenuItem>
                                <MenuItem value="Select1">Select Land Type 1</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                        <h4>Land Size</h4>
                        <TextField id="filled-basic" label="Enter Land Size" variant="outlined" style={{ width: '60%', height: '43%' }} />
                    </Grid>
                    <Grid item xs={4}>
                        <h4>Crops Type</h4>
                        <FormControl variant="outlined" style={{ width: '60%' }}>
                            <Select
                                value={selected}
                            // onChange={handleSeasonChange}
                            >
                                <MenuItem value="Select">Select Crop Type</MenuItem>
                                <MenuItem value="Select1">Select Land Type 1</MenuItem>
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
                                    value="yes"
                                    control={<Radio />}
                                    label="Yes"
                                />
                                <FormControlLabel
                                    value="no"
                                    control={<Radio />}
                                    label="No"
                                />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                </Grid>
            </Box>
            <button style={{ width: '20%', marginTop: '20px', cursor: 'pointer', color: '#fff', backgroundColor: '#017840', height: '40px', fontSize: '15px', border: ' none', borderRadius: '5px' }} onClick={updateFarmer}>Update</button>
        </div>
    );
}

export default UpdateFarmer;