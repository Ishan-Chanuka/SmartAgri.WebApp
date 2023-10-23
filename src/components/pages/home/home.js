import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Farmer from '../../../assets/farmer.png';
import Distributor from '../../../assets/combine-harvester.png';
import Crops from '../../../assets/harvest.png';
import Reports from '../../../assets/business-report.png';
import axios from 'axios';
import exportFromJSON from 'export-from-json'
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../../environment/variables";

function Home() {

    const navigate = useNavigate()

    const exportReport = () => {
        axios.get(`${baseUrl}/Admin/ExportDataSet`)
            .then((response) => {
                if (response.data.success === true) {
                    console.log(response)
                    const filename = 'seasonendreport'
                    const exportType = exportFromJSON.types.csv
                    exportFromJSON({ data: response.data.data, fileName: filename, exportType })
                    alert(response.data.message)
                }
            })
            .catch((error) => {
                console.error(error)
                alert(error)
            })
    }

    return (
        <div>
            <h1 style={{ color: '#017840', marginLeft: '10px' }}>Home</h1>
            <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={4}>
                        <Grid item>
                            <Card sx={{ height: '24rem' }}>
                                <CardMedia
                                    component="img"
                                    alt="Farmer"
                                    height="140"
                                    image={Farmer}
                                    sx={{ height: '16rem' }}
                                />
                                <CardContent>
                                    <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h5" component="div">
                                        Farmer
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ justifyContent: 'center' }}>
                                    <Button variant="contained"
                                        sx={{ bgcolor: '#017840', '&:hover': { bgcolor: '#1AAA53' } }}
                                        size="small"
                                        onClick={() => navigate('/addfarmer')}>
                                        Add
                                    </Button>

                                    <Button variant="contained"
                                        sx={{ bgcolor: '#017840', '&:hover': { bgcolor: '#1AAA53' } }}
                                        size="small"
                                        onClick={() => navigate('/updatefarmer')}>
                                        Update
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>

                        <Grid item>
                            <Card sx={{ height: '24rem' }}>
                                <CardMedia
                                    component="img"
                                    alt="Distributor"
                                    height="140"
                                    image={Distributor}
                                    sx={{ height: '16rem' }}
                                />
                                <CardContent>
                                    <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h5" component="div">
                                        Distributor
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ justifyContent: 'center' }}>
                                    <Button
                                        variant="contained"
                                        sx={{ bgcolor: '#017840', '&:hover': { bgcolor: '#1AAA53' } }}
                                        size="small"
                                        onClick={() => navigate('/adddistributor')}>
                                        Add
                                    </Button>

                                    <Button
                                        variant="contained"
                                        sx={{ bgcolor: '#017840', '&:hover': { bgcolor: '#1AAA53' } }}
                                        size="small"
                                        onClick={() => navigate('/updatedistributor')}>
                                        Update
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>

                        <Grid item>
                            <Card sx={{ height: '24rem' }}>
                                <CardMedia
                                    component="img"
                                    alt="Harvest"
                                    height="140"
                                    image={Crops}
                                    sx={{ height: '16rem' }}
                                />
                                <CardContent >
                                    <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h5" component="div">
                                        Harvest
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ justifyContent: 'center' }}>
                                    <Button
                                        variant="contained"
                                        sx={{ bgcolor: '#017840', '&:hover': { bgcolor: '#1AAA53' } }}
                                        size="small"
                                        onClick={() => navigate('/cropdetails')}>
                                        Add
                                    </Button>

                                    <Button
                                        variant="contained"
                                        sx={{ bgcolor: '#017840', '&:hover': { bgcolor: '#1AAA53' } }}
                                        size="small"
                                        onClick={() => navigate('/croprecords')}>
                                        View
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>

                        <Grid item>
                            <Card className="card" sx={{ height: '24rem' }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    image={Reports}
                                    sx={{ height: '16rem' }}
                                />
                                <CardContent>
                                    <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h5" component="div">
                                        Reports
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ justifyContent: 'center' }}>
                                    <Button
                                        variant="contained"
                                        sx={{ bgcolor: '#017840', '&:hover': { bgcolor: '#1AAA53' } }}
                                        size="small"
                                        onClick={exportReport}>
                                        export
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default Home;