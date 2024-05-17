// Homepage.js
import React from 'react';
import '../App.css';
import { 
  Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot 
} from '@mui/lab';
import { Typography, Link as MuiLink } from '@mui/material';
import { 
  RemoveRedEye as EyeIcon, 
  FileCopy as FileReportIcon, 
  Storage as DatabaseIcon, 
  Search as SearchIcon, 
  Report as ReportIcon, 
  Gavel as BanIcon 
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const greyTextStyle = {
  color: '#aaaaaa',  // Light grey color for better readability
};

const greenColor = '#00ff8c';

const Homepage = () => {
  return (
    <div className="container">
      <section>
        <h2>What is CheaterWatch?</h2>
        <p>
          CheaterWatch is a web app developed to help to keep cheaters in videogames at bay.
          By publicly displaying suspected cheater profiles along with evidence and a grading system
          for how intense their cheating is, CheaterWatch raises awareness of serial cheaters with the aim of getting more
          reports submitted about them and therefore a higher chance of them getting banned.
          We know that fighting cheaters is a losing battle (for now...) but we're doing our part to help.
        </p>
      </section>
      <section>
        <h2>How can I help?</h2>
        <p>
          You can help by using this website to submit reports of cheaters in any of the supported games.
          Cheaters who are on the list on this website can then be looked up when they are found in game, and then reported in-game.
          Hopefully this results in more bans for cheaters!
        </p>
      </section>
      <section>
        <h2>How does it work?</h2>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: greenColor }}>
                <EyeIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6">See a cheater</Typography>
              <Typography style={greyTextStyle}>See a cheater in one of our supported games.</Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: greenColor }}>
                <FileReportIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6">Submit a report</Typography>
              <Typography style={greyTextStyle}>Submit a report with all required information.</Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: greenColor }}>
                <DatabaseIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6">Report added to database</Typography>
              <Typography style={greyTextStyle}>
                Your report is added to the database and displayed in a list{' '}
                <MuiLink component={Link} to="/cheaters" style={{ color: '#00ff8c', textDecoration: 'underline' }}>HERE</MuiLink>.
              </Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: greenColor }}>
                <SearchIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6">Cheater lookup</Typography>
              <Typography style={greyTextStyle}>Someone else sees the same cheater and looks them up on our website.</Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: greenColor }}>
                <ReportIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6">Report the cheater</Typography>
              <Typography style={greyTextStyle}>Both of you report the cheater in-game and on our website.</Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: greenColor }}>
                <BanIcon />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6">More reports, higher chance of ban</Typography>
              <Typography style={greyTextStyle}>As cheaters gain more reports on CheaterWatch, more people may report them in-game.</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </section>
    </div>
  );
}

export default Homepage;