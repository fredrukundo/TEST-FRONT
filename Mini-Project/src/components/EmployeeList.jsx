import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, Typography, Box } from '@mui/material';

const employees = [
  { name: 'Logan Henderson', email: 'logan@company.com', lastLogin: 'September 20, 2019',timeAgo: '2 days ago', department: 'Accounting', status: 'Active' },
  { name: 'Susie Carlson', email: 'susie@company.com', lastLogin: 'September 22, 2019',timeAgo: '5 hours ago', department: 'Development', status: 'Inactive' },
  { name: 'Markus Benes', email: 'markus@company.com', lastLogin: 'September 18, 2019',timeAgo: '4 days ago', department: 'Development', status: 'Active' },
  { name: 'Marie Stephens', email: 'marie@company.com', lastLogin: 'September 20, 2019',timeAgo: '2 days ago', department: 'Human Resources', status: 'Active' },
  { name: 'Jacob Gibson', email: 'jacob@company.com', lastLogin: 'September 22, 2019',timeAgo: '3 hours ago', department: 'Sales', status: 'Active' },
];

const EmployeeList = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Employee</TableCell>
            <TableCell>Last login</TableCell>
            <TableCell>Department</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee) => (
            <TableRow key={employee.email}>
              <TableCell>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar alt={employee.name} src="/static/images/avatar/1.jpg" sx={{ marginRight: 2 }} />
                  <Box>
                    <Typography variant="body1"><strong>{employee.name}</strong></Typography>
                    <Typography variant="body2" color="textSecondary">{employee.email}</Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell>
                <Box>
                    <Typography variant="body1">{employee.lastLogin}</Typography>
                    <Typography variant="body2" color="textSecondary">{employee.timeAgo}</Typography>
                  </Box>
              </TableCell>
              <TableCell>{employee.department}</TableCell>
              <TableCell>
                <Typography color={employee.status === 'Active' ? 'green' : 'red'}>
                  {employee.status}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeeList;

