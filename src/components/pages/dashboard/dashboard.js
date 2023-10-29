import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend, ArcElement, } from "chart.js";
import { Bar, Pie } from "react-chartjs-2";
import { colorCodes } from "../theme/colorTheme";
import { Button, Card, CardContent, CardMedia, Chip, Grid, Typography, } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Grapes from "../../../assets/grapes.png";
import Rice from "../../../assets/rice.png";
import Pumpkin from "../../../assets/pumpkin.png";
import { useState, useEffect } from "react";
import { baseUrl, baseUrl2 } from "../../../environment/variables";
import axios from "axios";

ChartJS.register(
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

function Dashboard() {
  const navigate = useNavigate();

  const [avgSeasonSales, setAvgSeasonSales] = useState(0);
  const [avgSeasonLoss, setAvgSeasonLoss] = useState(0);
  const [soldQty, setSoldQty] = useState(0);
  const [lossQty, setLossQty] = useState(0);
  const [soldPrice, setSoldPrice] = useState(0);
  const [lossPrice, setLossPrice] = useState(0);
  const [riceQtyRecieved, setRiceQtyRecieved] = useState(0);
  const [fruitQtyRecieved, setFruitQtyRecieved] = useState(0);
  const [vegeQtyRecieved, setVegeQtyRecieved] = useState(0);

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: []
  });
  const [datapie, setDatapie] = useState({
    labels: [],
    datasets: []
  });

  useEffect(() => {
    const data = async () => {
      try {
        const response = await axios.get(`${baseUrl}/Admin/GetStat`);
        if (response.data.data && response.data.data.length > 0) {
          const bardata = response.data.data[0];

          console.log(bardata);

          formatChartData(bardata);
          formatPieChartData(bardata);
          setAvgSeasonSales(bardata.avgSeasonSales);
          setAvgSeasonLoss(bardata.avgSeasonLoss);
          setSoldQty(bardata.soldQty);
          setLossQty(bardata.lossQty);
          setSoldPrice(bardata.soldPrice);
          setLossPrice(bardata.lossPrice);
          setRiceQtyRecieved(bardata.riceQtyRecived);
          setFruitQtyRecieved(bardata.fruitQtyRecieved);
          setVegeQtyRecieved(bardata.vegetableQtyRecieved);
        } else {
          console.log("No data found in the response");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    data();
  }, []);

  const formatChartData = (data) => {
    const formattedData = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Vegetable",
          data: data.vegeSale,
          backgroundColor: colorCodes.primaryColor,
          borderColor: "#ffff",
          borderWidth: 1,
        },
        {
          label: "Fruit",
          data: data.fruitSale,
          backgroundColor: colorCodes.secondaryColor,
          borderColor: "#ffff",
          borderWidth: 1,
        },
        {
          label: "Rice",
          data: data.riceSale,
          backgroundColor: colorCodes.tertiaryColor,
          borderColor: "#ffff",
          borderWidth: 1,
        },
      ],
    };

    setChartData(formattedData);
  };

  const formatPieChartData = (data) => {
    const datapie = {
      labels: ["Vegetable", "Fruits", "Rice"],
      datasets: [
        {
          labels: ["Vegetable", "Fruits", "Rice"],
          data: data.cropLoss,
          backgroundColor: [
            colorCodes.primaryColor,
            colorCodes.secondaryColor,
            colorCodes.tertiaryColor,
          ],
          borderColor: "#ffff",
          borderWidth: 1,
        },
      ],
    };

    setDatapie(datapie);
  };

  const options = {};

  return (
    <div>
      <h1 style={{ color: "#017840", marginLeft: "10px" }}>Dashboard</h1>
      <Grid container spacing={10} pr={5}>
        <Grid item xs={12} sm={6} md={5}>
          <Card sx={{ backgroundColor: "#E4F6E8" }}>
            <CardContent>
              <Typography
                mb={3}
                sx={{ fontSize: 25, fontWeight: "bold", color: colorCodes.primaryColor, }}
                color="text.secondary"
                gutterBottom
              >
                Season's Crops Lost
              </Typography>

              <Grid sx={{ width: "75%" }}>
                <Pie data={datapie} options={options}></Pie>
              </Grid>
            </CardContent>
          </Card>

          <Grid container mt={5} spacing={2}>
            <Grid item md={4}>
              <Card sx={{ height: "18rem" }}>
                <CardMedia
                  component="img"
                  alt="Farmer"
                  height="8rem"
                  image={Rice}
                  sx={{ height: "12rem" }}
                />
                <CardContent>
                  <Typography
                    // sx={{ textAlign: "center" }}
                    fontSize={"16px"}
                  >
                    Rice
                  </Typography>
                  <Typography
                    // sx={{ textAlign: "center" }}
                    fontSize={"15px"}
                    fontWeight={"bold"}
                  >
                    {riceQtyRecieved} Kg
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={4}>
              <Card sx={{ height: "18rem" }}>
                <CardMedia
                  component="img"
                  alt="Farmer"
                  height="140"
                  image={Pumpkin}
                  sx={{ height: "12rem" }}
                />
                <CardContent>
                  <Typography
                    // sx={{ textAlign: "center" }}
                    fontSize={"16px"}
                  >
                    Vegetable
                  </Typography>
                  <Typography
                    // sx={{ textAlign: "center" }}
                    fontSize={"15px"}
                    fontWeight={"bold"}
                  >
                    {vegeQtyRecieved} Kg
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={4}>
              <Card sx={{ height: "18rem" }}>
                <CardMedia
                  component="img"
                  alt="Farmer"
                  height="140"
                  image={Grapes}
                  sx={{ height: "12rem" }}
                />
                <CardContent>
                  <Typography
                    // sx={{ textAlign: "center" }}
                    fontSize={"16px"}
                  >
                    Fruit
                  </Typography>
                  <Typography
                    // sx={{ textAlign: "center" }}
                    fontSize={"15px"}
                    fontWeight={"bold"}
                  >
                    {fruitQtyRecieved} Kg
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={7}>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Grid
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography mb={1} variant="body2">
                      Average Season Sales
                    </Typography>
                    <Typography mb={1} variant="body2">
                      <Chip label={avgSeasonSales} />
                    </Typography>
                  </Grid>
                  <Grid sx={{ display: "flex" }}>
                    <Typography mb={1} variant="body2" mr={2}>
                      <b>qty</b> : {soldQty} Kg
                    </Typography>
                    <Typography mb={1} variant="body2">
                      <b>Rs</b> : {soldPrice} Rs
                    </Typography>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={6}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Grid
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography mb={1} variant="body2">
                      Average Season Loss
                    </Typography>
                    <Typography mb={1} variant="body2">
                      <Chip label={avgSeasonLoss} />
                    </Typography>
                  </Grid>

                  <Grid sx={{ display: "flex" }}>
                    <Typography mb={1} variant="body2" mr={2}>
                      <b>qty</b> : {lossQty} Kg
                    </Typography>
                    <Typography mb={1} variant="body2">
                      <b>Rs</b> : {lossPrice} Rs
                    </Typography>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid sx={{ width: "100%" }}>
            <Card sx={{ padding: "5%" }}>
              <Bar data={chartData} options={options}></Bar>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
