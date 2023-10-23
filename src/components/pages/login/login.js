import React from 'react';
import axios from 'axios';
import './login.css';
import { Button, Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Box from '@mui/material/Box';
import logo from '../../../assets/logo-border.png';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from '../../../environment/variables';

function Login() {

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [showEmail, setShowEmail] = useState(false);
    const handleClickShowEmail = () => setShowEmail((show) => !show);
    const handleMouseDownEmail = (event) => {
        event.preventDefault();
    };

    const [Email, setEmail] = useState("");
    const [Pass, setPass] = useState("");

    const navigate = useNavigate()

    const data = {
        email: Email,
        password: Pass,
    };

    const login = () => {
        axios.post(`${baseUrl}/Account/login`, data)
            .then((response) => {
                if (response.data.success === true) {
                    navigate('/home')
                    alert(response.data.message)
                    localStorage.setItem('token', response.data.data.token)
                    localStorage.setItem('email', response.data.data.email)
                    localStorage.setItem('userRole', response.data.data.role)
                    localStorage.setItem('regcode', response.data.data.reistrationCode)
                }
            })
            .catch((error) => {
                console.error(error)
                alert(error)
            })
    }

    return (
        <div className="back">
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    <Grid xs={6}>
                        <Box className="container">
                            <Box className="logo">
                                <img className='logo' src={logo} alt="smartagri-logo-01" border="0" />
                            </Box>
                            <Box className="form">
                                <h1>Welcome Again</h1>
                                <div>
                                    <FormControl className="inputfield" sx={{ m: 1, width: '40ch' }} variant="outlined">
                                        <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-email"
                                            type={showEmail ? 'text' : 'Email'}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                </InputAdornment>
                                            }
                                            label="Email"
                                            onChange={(e) => { setEmail(e.target.value) }}
                                        />
                                    </FormControl>
                                </div>

                                <div>
                                    <FormControl className="inputfield" sx={{ m: 1, width: '40ch' }} variant="outlined">
                                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-password"
                                            type={showPassword ? 'text' : 'password'}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                    >
                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                            label="Password"
                                            onChange={(e) => { setPass(e.target.value) }}
                                        />
                                    </FormControl>
                                </div>

                                <Button
                                    sx={{ m: 1, width: '44ch', bgcolor: '#017840', '&:hover': { bgcolor: '#1AAA53' } }}
                                    variant="contained"
                                    onClick={login}>
                                    Sign In
                                </Button>
                            </Box>
                        </Box>

                    </Grid>
                    <Grid xs={6}></Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Login;