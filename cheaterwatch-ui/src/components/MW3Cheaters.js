import React, { useState, useEffect } from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Modal, Button } from '@mui/material';
import axios from 'axios';
import '../styles/Cheaters.css'; // Import the CSS file

const MW3Cheaters = () => {
  const [reports, setReports] = useState([]);
  const [filteredReports, setFilteredReports] = useState([]);
  const [filter, setFilter] = useState({
    username: '',
    cheat: '',
    ranking: '',
  });
  const gameName = 'Call of Duty Modern Warfare III'; // Game name to filter cheaters for MW3

  const [selectedUser, setSelectedUser] = useState(null);
  const [userReports, setUserReports] = useState([]);

  useEffect(() => {
    // Fetch all reports data from the API
    const fetchAllReports = async () => {
      try {
        const response = await axios.get('https://api.cheaterwatch.com/api/reports');
        // Filter reports data for the selected game
        const mw3Reports = response.data.filter(report => report.game === gameName);
        // Sort reports by timestamp in descending order
        mw3Reports.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        setReports(mw3Reports);
        setFilteredReports(mw3Reports);
      } catch (error) {
        console.error('Error fetching reports:', error);
      }
    };

    fetchAllReports();
  }, []);

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

  const handleUserClick = async (username) => {
    setSelectedUser(username);
    try {
      const response = await axios.get(`https://api.cheaterwatch.com/api/reports/username/${encodeURIComponent(username)}`);
      // Sort user reports by timestamp in descending order
      const sortedUserReports = response.data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      setUserReports(sortedUserReports);
    } catch (error) {
      console.error('Error fetching user reports:', error);
    }
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
    setUserReports([]);
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h2" style={{ color: '#00ff8c', marginTop: '20px', marginBottom: '20px' }}>{gameName} Cheaters</Typography>
      <div style={{ marginBottom: '20px' }}>
        {/* Filter controls */}
      </div>
      <TableContainer>
        <Table>
          <TableHead style={{ backgroundColor: '#000' }}>
            <TableRow>
              <TableCell style={{ color: '#00ff8c' }}>Username</TableCell>
              <TableCell style={{ color: '#00ff8c' }}>Ranking</TableCell>
              <TableCell style={{ color: '#00ff8c' }}>Cheats</TableCell>
              <TableCell style={{ color: '#00ff8c' }}>Timestamp</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredReports.map((report) => (
              <TableRow key={report.id}>
                <TableCell style={{ color: '#fff' }}>
                  <Button onClick={() => handleUserClick(report.username)} style={{ textDecoration: 'none', color: 'inherit' }}>
                    {report.username}
                  </Button>
                </TableCell>
                <TableCell style={{ color: '#fff' }}>{report.suspected_cheats.length > 50 ? 'Certain' : 'Likely'}</TableCell>
                <TableCell style={{ color: '#fff' }}>{report.suspected_cheats.join(', ')}</TableCell>
                <TableCell style={{ color: '#fff' }}>{new Date(report.created_at).toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal open={!!selectedUser} onClose={handleCloseModal}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: '#333', padding: '20px', color: '#fff', width: '80%', maxWidth: '800px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}>
          <Button onClick={handleCloseModal} style={{ position: 'absolute', top: '10px', right: '10px', color: '#fff' }}>X</Button>
          <Typography variant="h4" style={{ color: '#00ff8c' }}>User Profile: {selectedUser}</Typography>
          {userReports.length > 0 ? (
            <div>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow style={{ borderBottom: '2px solid #00ff8c' }}>
                      <TableCell style={{ color: '#00ff8c' }}>Game</TableCell>
                      <TableCell style={{ color: '#00ff8c' }}>Suspected Cheats</TableCell>
                      <TableCell style={{ color: '#00ff8c' }}>Proof Link</TableCell>
                      <TableCell style={{ color: '#00ff8c' }}>Timestamp</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {userReports.map((report) => (
                      <TableRow key={report.id}>
                        <TableCell style={{ color: '#fff' }}>{report.game}</TableCell>
                        <TableCell style={{ color: '#fff' }}>{report.suspected_cheats.join(', ')}</TableCell>
                        <TableCell style={{ color: '#fff' }}><a href={report.proof_link} target="_blank" rel="noopener noreferrer">{report.proof_link}</a></TableCell>
                        <TableCell style={{ color: '#fff' }}>{new Date(report.created_at).toLocaleString()}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          ) : (
            <Typography variant="body1">No reports found for this user.</Typography>
          )}
        </div>
      </Modal>
    </Container>
  );
};

export default MW3Cheaters;