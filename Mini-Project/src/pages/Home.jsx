import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import CustomAppBar from '../components/CustomAppBar.jsx';
import EmployeeList from '../components/EmployeeList.jsx';
import CustomPieChart from '../components/CustomPieChart.jsx';

const Home = () => {
  return (
    <Box>
      <CustomAppBar/>
      <Grid spacing={3} sx={{ padding: 3,}}>
        <Typography>Home / Reports & Insights</Typography>
      </Grid>
      <Grid  spacing={3} sx={{ padding: 3 }} container>
        <Grid item xs={12} md={6}>
          <Paper sx={{padding:1}}>
            <Typography variant="h6">Why do you create a startup ?</Typography>
            <Typography  sx={{ marginBottom: 2, color: 'gray', }}>Trends
            </Typography>
            <CustomPieChart />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6">Employees</Typography>
            <EmployeeList/>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;

