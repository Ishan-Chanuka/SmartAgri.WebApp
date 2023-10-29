import * as React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import { useState, useEffect } from "react";
import axios from 'axios';
import { baseUrl, baseUrl2 } from "../../../environment/variables";
import Chip from '@mui/material/Chip';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#DCDCDC' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));

function CropDetails() {
    const [selectedSeason, setSelectedSeason] = useState('');

    const handleSeasonChange = (event) => {
        setSelectedSeason(event.target.value);
    };
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const seasonData = {
        season: selectedSeason,
        seasonStartDate: startDate,
        seasonEndDate: endDate
    }

    const startSeason = () => {
        if (seasonId !== '') {
            alert("Season already started")
            return;
        }
        axios.post(`${baseUrl}/Admin/StartSeason`, seasonData)
            .then((response) => {
                if (response.data.success === true) {
                    alert(response.data.message)
                    setSeasonId(response.data.data);
                }
            })
            .catch((error) => {
                alert(error)
            })
    }

    const [seasonId, setSeasonId] = useState('');

    useEffect(() => {
        const getSeasonId = async () => {
            try {
                const response = await axios.get(`${baseUrl}/Admin/GetCurrentSeasonId`);
                setSeasonId(response.data.data);
            } catch (error) {
                alert('Error fetching data: ', error)
            }
        };
        getSeasonId();
    }, []);

    useEffect(() => {

    }, [seasonId]);

    const endSeason = () => {
        axios.post(`${baseUrl}/Admin/EndCurrentSeason?seasonId=${seasonId}`)
            .then((response) => {
                if (response.data.success === true) {
                    alert(response.data.message)
                    setSeasonId('');
                }
            })
            .catch((error) => {
                alert(error)
            })
    }

    const [cropType, setCropType] = useState('');
    const handleCropTypeChange = (event) => {
        setCropType(event.target.value);
    };
    const [regCode, setRegCode] = useState('');
    const [cropName, setCropName] = useState('');
    const [region, setRegion] = useState('');
    const handleRegionChange = (event) => {
        setRegion(event.target.value);
    }
    const [quantityRecieved, setQuantityRecieved] = useState(0);
    const [quantityLoss, setQuantityLoss] = useState(0);
    const [quantitySold, setQuantitySold] = useState(0);
    const [pricePerKgBuy, setPricePerKgBuy] = useState(0);
    const [pricePerKgSold, setPricePerKgSold] = useState(0);

    const cropData = {
        cropTypeId: cropType,
        registrationCode: regCode,
        cropName: cropName,
        regionId: region,
        quantityRecived: quantityRecieved,
        quantityLoss: quantityLoss,
        quantitySold: quantitySold,
        pricePerKgBuy: pricePerKgBuy,
        pricePerKgSold: pricePerKgSold
    }

    const saveCrop = () => {
        axios.post(`${baseUrl}/Admin/PopulateCropsRecord`, cropData)
            .then((response) => {
                if (response.data.success === true) {
                    alert(response.data.message)
                    console.log(response)
                }
                else if (response.data.success === false) {
                    alert(response.data.message)
                }
            })
            .catch((error) => {
                alert(error)
            })
    }

    const handleClick = (lable) => {
        navigator.clipboard.writeText(lable)
            .then(() => {
                alert('Text copied to clipboard');
            })
            .catch(err => {
                alert('Failed to copy text: ', err);
            });
    };

    return (
        <div>
            <h1 style={{ color: '#017840' }}>Crop Details</h1>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Item style={{ textAlign: 'left', backgroundColor: '#017840', color: '#fff', fontWeight: 'bold', fontSize: '20px' }}>Start Season</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <h4>Season</h4>
                        <FormControl variant="outlined" style={{ width: '60%' }}>
                            <InputLabel id="season-lable">Select Season</InputLabel>
                            <Select
                                labelId="season-lable"
                                id="season"
                                value={selectedSeason}
                                label="Select Season"
                                onChange={handleSeasonChange}
                            >
                                <MenuItem value="1">Yala</MenuItem>
                                <MenuItem value="2">Maha</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                        <h4>Start Date</h4>
                        <input type="date" id="startDate" style={{ width: '60%', height: '43%' }} onChange={(e) => { setStartDate(e.target.value) }} />
                    </Grid>
                    <Grid item xs={4}>
                        <h4>End Date</h4>
                        <input type="date" id="endDate" style={{ width: '60%', height: '43%' }} onChange={(e) => { setEndDate(e.target.value) }} />
                    </Grid>
                </Grid>
            </Box>
            <button style={{ width: '20%', marginTop: '20px', cursor: 'pointer', color: '#fff', backgroundColor: '#017840', height: '40px', fontSize: '15px', border: ' none', borderRadius: '5px' }}
                onClick={startSeason}>Start</button>

            {/* end season */}
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Item style={{ textAlign: 'left', backgroundColor: '#017840', color: '#fff', fontWeight: 'bold', fontSize: '20px', marginTop: '20px' }}>End Season
                            <Chip
                                style={{ marginLeft: '20px', color: '#fff' }}
                                label="Copy Current Season Id"
                                variant="outlined"
                                onClick={() => handleClick(seasonId)}
                            />
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <h4>Season Id</h4>
                        <TextField
                            id="filled-basic"
                            label="Enter Season Id"
                            variant="outlined" style={{ width: '60%', height: '43%' }}
                            onChange={(e) => { setSeasonId(e.target.value) }} />
                    </Grid>
                </Grid>
            </Box>
            <button style={{ width: '20%', marginTop: '20px', cursor: 'pointer', color: '#fff', backgroundColor: '#017840', height: '40px', fontSize: '15px', border: ' none', borderRadius: '5px' }}
                onClick={endSeason}>End</button>


            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Item style={{ textAlign: 'left', backgroundColor: '#017840', color: '#fff', fontWeight: 'bold', fontSize: '20px', marginTop: '20px' }}>Create Crop Record</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <h4>Crop Type</h4>
                        <FormControl variant="outlined" style={{ width: '60%' }}>
                            <InputLabel id="cropLable">Select Crop Type</InputLabel>
                            <Select
                                labelId="cropLable"
                                id="crop"
                                value={cropType}
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
                        <h4>Farmer Registration Code</h4>
                        <TextField id="filled-basic" label="Enter Farmer Registration Code" variant="outlined" style={{ width: '60%', height: '43%' }} onChange={(e) => { setRegCode(e.target.value) }} />
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
                </Grid>
            </Box>

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={4}>
                        <h4>Quantity Recieved</h4>
                        <TextField id="filled-basic" label="Enter Quantity Recieved" variant="outlined" style={{ width: '60%', height: '43%' }} onChange={(e) => { setQuantityRecieved(e.target.value) }} />
                    </Grid>
                    <Grid item xs={4}>
                        <h4>Quantity Loss</h4>
                        <TextField id="filled-basic" label="Enter Quantity Loss" variant="outlined" style={{ width: '60%', height: '43%' }} onChange={(e) => { setQuantityLoss(e.target.value) }} />
                    </Grid>
                    <Grid item xs={4}>
                        <h4>Quantity Sold</h4>
                        <TextField id="filled-basic" label="Enter Quantity Sold" variant="outlined" style={{ width: '60%', height: '43%' }} onChange={(e) => { setQuantitySold(e.target.value) }} />
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={4}>
                        <h4>Crop Name</h4>
                        <TextField id="filled-basic" label="Enter Crop Name" variant="outlined" style={{ width: '60%', height: '43%' }} onChange={(e) => { setCropName(e.target.value) }} />
                    </Grid>
                    <Grid item xs={4}>
                        <h4>Price per Kg (Buy)</h4>
                        <TextField id="filled-basic" label="Enter per Price" variant="outlined" style={{ width: '60%', height: '43%' }} onChange={(e) => { setPricePerKgBuy(e.target.value) }} />
                    </Grid>
                    <Grid item xs={4}>
                        <h4>Price per Kg (Sold)</h4>
                        <TextField id="filled-basic" label="Enter per Price" variant="outlined" style={{ width: '60%', height: '43%' }} onChange={(e) => { setPricePerKgSold(e.target.value) }} />
                    </Grid>
                </Grid>
            </Box>
            <button style={{ width: '20%', marginTop: '20px', cursor: 'pointer', color: '#fff', backgroundColor: '#017840', height: '40px', fontSize: '15px', border: ' none', borderRadius: '5px' }} onClick={saveCrop}>Save</button>
        </div>
    )
}

export default CropDetails;