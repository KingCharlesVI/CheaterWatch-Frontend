import React, { useState, useEffect } from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, MenuItem, FormControl, InputLabel, Select } from '@mui/material';
import axios from 'axios';
import '../styles/Cheaters.css'; // Import the CSS file

const ApexCheaters = () => {
  const [reports, setReports] = useState([]);
  const [filteredReports, setFilteredReports] = useState([]);
  const [filter, setFilter] = useState({
    username: '',
    cheat: '',
    ranking: '',
  });
  const gameName = 'Apex Legends'; // Game name to filter cheaters for Apex Legends

  useEffect(() => {
    // Fetch all reports data from the API
    const fetchAllReports = async () => {
      try {
        const response = await axios.get('https://api.cheaterwatch.com/api/reports');
        // Filter reports data for the selected game
        const apexReports = response.data.filter(report => report.game === gameName);
        setReports(apexReports);
        setFilteredReports(apexReports);
      } catch (error) {
        console.error('Error fetching reports:', error);
      }
    };

    fetchAllReports();
  }, []);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilter({ ...filter, [name]: value });
  };

  useEffect(() => {
    let filteredData = [...reports];

    if (filter.username) {
      filteredData = filteredData.filter(report => report.username.toLowerCase().includes(filter.username.toLowerCase()));
    }

    if (filter.cheat) {
      filteredData = filteredData.filter(report => report.suspected_cheats.includes(filter.cheat));
    }

    if (filter.ranking) {
      if (filter.ranking === 'Likely') {
        filteredData = filteredData.filter(report => report.suspected_cheats.length <= 50);
      } else if (filter.ranking === 'Certain') {
        filteredData = filteredData.filter(report => report.suspected_cheats.length > 50);
      }
    }

    setFilteredReports(filteredData);
  }, [filter, reports]);

  const handleSortByTimestamp = () => {
    const sortedData = [...filteredReports].sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
    setFilteredReports(sortedData);
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h2" style={{ color: '#00ff8c', marginTop: '20px', marginBottom: '20px' }}>{gameName} Cheaters</Typography> {/* Brand green color */}
      <div style={{ marginBottom: '20px' }}>
        <TextField
          label="Filter by Username"
          name="username"
          value={filter.username}
          onChange={handleFilterChange}
          style={{ marginRight: '20px', color: '#fff', border: '1px solid #fff' }} // White color
          InputProps={{ placeholder: 'Username', style: { color: '#fff' } }} // White color
          InputLabelProps={{ style: { color: '#fff' } }} // White color
        />
        <FormControl style={{ marginRight: '20px' }}>
          <InputLabel style={{ color: '#fff' }}>Filter by Cheat</InputLabel> {/* White color */}
          <Select
            value={filter.cheat}
            onChange={handleFilterChange}
            name="cheat"
            style={{ width: '150px', color: '#fff', border: '1px solid #fff' }} // White color
            inputProps={{ style: { color: '#fff' } }} // White color
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Wallhacks">Wallhacks</MenuItem>
            <MenuItem value="Aimbot">Aimbot</MenuItem>
            <MenuItem value="Speedhacks">Speedhacks</MenuItem>
            <MenuItem value="Unlock">Unlock</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel style={{ color: '#fff' }}>Filter by Ranking</InputLabel> {/* White color */}
          <Select
            value={filter.ranking}
            onChange={handleFilterChange}
            name="ranking"
            style={{ width: '150px', color: '#fff', border: '1px solid #fff' }} // White color
            inputProps={{ style: { color: '#fff' } }} // White color
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Likely">Likely</MenuItem>
            <MenuItem value="Certain">Certain</MenuItem>
          </Select>
        </FormControl>
      </div>
      <TableContainer>
        <Table>
          <TableHead style={{ backgroundColor: '#000' }}>
            <TableRow>
              <TableCell style={{ color: '#00ff8c' }}>Username</TableCell> {/* Brand green color */}
              <TableCell style={{ color: '#00ff8c' }}>Ranking</TableCell> {/* Brand green color */}
              <TableCell style={{ color: '#00ff8c' }}>Cheats</TableCell> {/* Brand green color */}
              <TableCell style={{ color: '#00ff8c' }} onClick={handleSortByTimestamp}>Timestamp</TableCell> {/* Brand green color */}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredReports.map((report) => (
              <TableRow key={report.id}>
                <TableCell style={{ color: '#fff' }}>{report.username}</TableCell> {/* White color */}
                <TableCell style={{ color: '#fff' }}>{report.suspected_cheats.length > 50 ? 'Certain' : 'Likely'}</TableCell> {/* White color */}
                <TableCell style={{ color: '#fff' }}>{report.suspected_cheats.join(', ')}</TableCell> {/* White color */}
                <TableCell style={{ color: '#fff' }}>{new Date(report.created_at).toLocaleString()}</TableCell> {/* White color */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ApexCheaters;
