import React, { useState } from 'react';
import { Grommet, Box, Form, FormField, TextInput, Select, CheckBoxGroup, Button } from 'grommet';

const customTheme = {
  global: {
    colors: {
      brand: '#00ff8c', // Submit button color
    },
    input: {
      fontColor: 'white', // Text color for input fields
    },
  },
  textInput: {
    extend: () => `
      border: 2px solid white; // White border for input fields
      &:focus {
        border-color: #00ff8c !important; // Outline color for input fields when focused
      }
    `,
  },
  select: {
    control: {
      extend: () => `
        background: black; // Black background for select dropdown
        color: white; // White text color for select dropdown
        border: 2px solid white; // White border for select dropdown
        border-radius: 4px; // Border radius for select dropdown
      `,
    },
    container: {
      extend: () => `
        border: 2px solid white; // White border for select dropdown
      `,
    },
  },
  checkBox: {
    border: {
      color: 'white', // White border color for all checkboxes
    },
  },
  checkBoxGroup: {
    container: {
      extend: () => `
        border: 2px solid white; // White border for checkbox group
        padding: 12px; // Adjust padding for better appearance
      `,
    },
    checkbox: {
      border: {
        color: 'white', // White border color for individual checkboxes
      },
    },
  },
};

const CheatReportForm = () => {
  const [game, setGame] = useState('');
  const [username, setUsername] = useState('');
  const [suspectedCheats, setSuspectedCheats] = useState([]);
  const [videoLink, setVideoLink] = useState('');

  const handleGameChange = (e) => {
    setGame(e.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleCheatsChange = (e) => {
    setSuspectedCheats(e.value);
  };

  const handleVideoLinkChange = (e) => {
    setVideoLink(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      game,
      username,
      suspectedCheats,
      videoLink,
    });
    setGame('');
    setUsername('');
    setSuspectedCheats([]);
    setVideoLink('');
  };

  return (
    <Grommet theme={customTheme} themeMode="dark">
      <Box align="center" pad="medium">
        <Form onSubmit={handleSubmit}>
          <FormField label="Game">
            <Select
              options={['Call of Duty Modern Warfare III', 'Call of Duty Warzone', 'Valorant', 'Apex Legends']}
              value={game}
              onChange={handleGameChange}
            />
          </FormField>
          <FormField label="Username">
            <TextInput value={username} onChange={handleUsernameChange} />
          </FormField>
          <FormField label="Suspected Cheats">
            <CheckBoxGroup
              options={['Wallhacks', 'Aimbot', 'Speedhacks', 'Unlock']}
              value={suspectedCheats}
              onChange={handleCheatsChange}
            />
          </FormField>
          <FormField label="Link to video proof">
            <TextInput value={videoLink} onChange={handleVideoLinkChange} />
          </FormField>
          <Button type="submit" label="Submit" primary />
        </Form>
      </Box>
    </Grommet>
  );
};

export default CheatReportForm;