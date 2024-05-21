import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import axios from 'axios';

const Homepage = () => {
  const [totalReports, setTotalReports] = useState(null);

  useEffect(() => {
    // Fetch total number of reports from the API
    const fetchTotalReports = async () => {
      try {
        const response = await axios.get('https://api.cheaterwatch.com/api/stats');
        setTotalReports(response.data.totalReports);
      } catch (error) {
        console.error('Error fetching total reports:', error);
      }
    };

    fetchTotalReports();
  }, []);

  return (
    <Container maxWidth="lg">
      {totalReports !== null && (
        <>
          <Typography variant="h1" align="center" style={{ fontSize: '6rem', marginBottom: '20px' }}>
            {totalReports}
          </Typography>
          <Typography variant="h4" align="center">
            Total Reports
          </Typography>
        </>
      )}
    </Container>
  );
};

export default Homepage;