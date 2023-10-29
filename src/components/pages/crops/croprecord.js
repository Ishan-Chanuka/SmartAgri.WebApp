import { Crop } from "@mui/icons-material";
import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
import axios from "axios";
import { baseUrl, baseUrl2 } from "../../../environment/variables";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#DCDCDC' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));


function CropRecord() {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(`${baseUrl}/Admin/GetCurrentSeasonSales`);
            const data = response.data.data;
            console.log(data);

            if (data) {
                const record = createRecord(data.quantityRecieved, data.quantityLoss, data.quantitySold, data.estimatedPrice, data.seasonLoss, data.seasonSales);
                setRows([record]);
            }
        }

        fetchData();
    }, []);

    function createRecord(quantityReceived, quantityLoss, quantitySold, estimatedPrice, seasonLoss, seasonSales) {
        return { qtyr: quantityReceived, qtyl: quantityLoss, qtys: quantitySold, esp: estimatedPrice, slos: seasonLoss, ssal: seasonSales };
    }

    return (
        <div>
            <h1 style={{ color: '#017840' }}>Crop Records</h1>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Item style={{ textAlign: 'left', backgroundColor: '#017840', color: '#fff', fontWeight: 'bold', fontSize: '20px' }}>Current Season Sold</Item>
                    </Grid>
                    <Grid item xs={12}>
                        <TableContainer style={{ marginTop: "20px" }} component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Quantity Received (Kg)</TableCell>
                                        <TableCell>Quantity Loss (Kg)</TableCell>
                                        <TableCell>Quantity Sold (Kg)</TableCell>
                                        <TableCell>Estimated Price (Rs)</TableCell>
                                        <TableCell>Season Loss (Rs)</TableCell>
                                        <TableCell>Season Sales (Rs)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.qtyr}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.qtyr}
                                            </TableCell>
                                            <TableCell>{row.qtyl}</TableCell>
                                            <TableCell>{row.qtys}</TableCell>
                                            <TableCell>{row.esp}</TableCell>
                                            <TableCell>{row.slos}</TableCell>
                                            <TableCell>{row.ssal}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default CropRecord;