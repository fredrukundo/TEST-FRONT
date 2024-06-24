import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { Typography, Box } from '@mui/material';

const data = [
  {id:0, name: "DUNNO", value: 7 },
  {id:1, name: "I'm Boring", value: 10 },
  {id:2, name: 'Money', value: 50 },
  {id:3, name: 'Fun', value: 10 },
  
];

const COLORS = [ '#000000','#ACB9FF', '#855CF8','#9B76FA' ];

const CustomPieChart = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <PieChart width={400} height={500}>
        <Pie
          data={data}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
       
      </PieChart>
      <Box display="flex" justifyContent="center" mt={2}>
        {data.map((entry, index) => (
          <Box
            key={`legend-${index}`}
            display="flex"
            alignItems="center"
            mx={1.5}
          >
            <Box
              width={10}
              height={10}
              bgcolor={COLORS[index % COLORS.length]}
              mr={1}
            />
            <Typography variant="body2">{entry.name}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CustomPieChart;



