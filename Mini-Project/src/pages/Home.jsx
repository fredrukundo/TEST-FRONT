import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import CustomAppBar from '../components/CustomAppBar.jsx';
import EmployeeList from '../components/EmployeeList.jsx';
import CustomPieChart from '../components/CustomPieChart.jsx';

const Home = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CustomAppBar />
      <Grid container spacing={3} sx={{ padding: 3 }}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6">Why do you create a startup?</Typography>
            <CustomPieChart />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6">Employees</Typography>
            <EmployeeList />
          </Paper>
        </Grid>
      </Grid>
    </Box>
    
  );
};

export default Home;
