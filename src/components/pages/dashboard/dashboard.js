import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { colorCodes } from "../theme/colorTheme";
import { Card, CardContent, Grid, Typography } from "@mui/material";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function Dashboard() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales 2020 (M)",
        data: [3, 2, 2, 1, 5, 6],
        backgroundColor: colorCodes.primaryColor,
        borderColor: "#ffff",
        borderWidth: 1,
      },
      {
        label: "Sales 2019 (M)",
        data: [1, 3, 2, 2, 3, 5],
        backgroundColor: colorCodes.secondaryColor,
        borderColor: "#ffff",
        borderWidth: 1,
      },
      {
        label: "Sales 2018 (M)",
        data: [2, 2, 3, 4, 5, 3],
        backgroundColor: colorCodes.tertiaryColor,
        borderColor: "#ffff",
        borderWidth: 1,
      },
    ],
  };

  const options = {};

  return (
    <div>
      <h1 style={{ color: "#017840", marginLeft: "10px" }}>Dashboard</h1>
      <Grid container>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Word of the Day
              </Typography>
              <Typography variant="h5" component="div">
              gg
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          <Bar data={data} options={options}></Bar>
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
