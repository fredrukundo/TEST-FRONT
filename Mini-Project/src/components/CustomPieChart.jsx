import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { Typography, Box } from '@mui/material';

const data = [
  { name: "DUNNO", value: 45 },
  { name: 'DUNNO', value: 7 },
  { name: 'DUNNO', value: 13 },
  { name: 'DUNNO', value: 16 },
  
];

const COLORS = [ '#855CF8','#9B76FA', '#000000','#ACB9FF' ];

const CustomPieChart = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          label
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
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



