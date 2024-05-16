import React, { useState, useEffect, useRef } from 'react';
import '../styles/Cheaters.css'; // Import styles
import mw3Image from '../assets/COD_MW3_Logo.png';
import warzoneImage from '../assets/cod-warzone-logo.png';
import valorantImage from '../assets/valorant-logo.png';
import apexImage from '../assets/logo-Apex-Legends.png';

const cheatersData = [
  { username: 'User1', ranking: 'Certain', cheat: 'Wallhacks, Aimbot', date: '2024-05-15 21:01 BST', game: 'Call of Duty Warzone 2023' },
  { username: 'User2', ranking: 'Likely', cheat: 'Wallhacks', date: '2024-05-15 13:28 BST', game: 'Valorant' },
  { username: 'User3', ranking: 'Likely', cheat: 'Aimbot', date: '2024-05-15 22:36 BST', game: 'Apex Legends' },
  // Add more sample data as needed
];

const gameOptions = [
  { name: 'Call of Duty Modern Warfare 3 2023', image: mw3Image },
  { name: 'Call of Duty Warzone 2023', image: warzoneImage },
  { name: 'Valorant', image: valorantImage },
  { name: 'Apex Legends', image: apexImage },
];

const Cheaters = () => {
  const [filteredCheaters, setFilteredCheaters] = useState(cheatersData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGame, setSelectedGame] = useState('');
  const [hoveredGame, setHoveredGame] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const underlineRef = useRef(null);
  const hoverLineRef = useRef(null);

  useEffect(() => {
    const filtered = cheatersData.filter(cheater =>
      cheater.username.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedGame ? cheater.game === selectedGame : true)
    );
    setFilteredCheaters(filtered);
  }, [searchTerm, selectedGame]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleGameChange = (game) => {
    setSelectedGame(game);
  };

  const handleMouseEnter = (index) => {
    setHoveredGame(index);
  };

  const handleMouseLeave = () => {
    setHoveredGame(null);
  };

  useEffect(() => {
    const selectedIndex = gameOptions.findIndex(option => option.name === selectedGame);
    if (selectedIndex !== -1 && underlineRef.current) {
      const selectedOption = document.getElementById(`game-option-${selectedIndex}`);
      if (selectedOption) {
        underlineRef.current.style.left = `${selectedOption.offsetLeft}px`;
        underlineRef.current.style.width = `${selectedOption.offsetWidth}px`;
      }
    }
  }, [selectedGame]);

  useEffect(() => {
    if (hoveredGame !== null && hoverLineRef.current) {
      const hoveredOption = document.getElementById(`game-option-${hoveredGame}`);
      if (hoveredOption) {
        hoverLineRef.current.style.left = `${hoveredOption.offsetLeft}px`;
        hoverLineRef.current.style.width = `${hoveredOption.offsetWidth}px`;
      }
    }
  }, [hoveredGame]);

  const sortData = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    const sorted = [...filteredCheaters].sort((a, b) => {
      if (key === 'date') {
        return direction === 'ascending' ? new Date(a[key]) - new Date(b[key]) : new Date(b[key]) - new Date(a[key]);
      }
      return direction === 'ascending' ? a[key].localeCompare(b[key]) : b[key].localeCompare(a[key]);
    });
    setSortConfig({ key, direction });
    setFilteredCheaters(sorted);
  };

  const getSortArrow = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === 'ascending' ? '▲' : '▼';
    }
    return '';
  };

  return (
    <div className="cheaters-page">
      <div className="header">
        <div className="game-selector">
          {gameOptions.map((game, index) => (
            <img
              key={game.name}
              id={`game-option-${index}`}
              src={game.image}
              alt={game.name}
              className={`game-option ${selectedGame === game.name ? 'selected' : ''}`}
              onClick={() => handleGameChange(game.name)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            />
          ))}
          <div className="underline" ref={underlineRef}></div>
          <div className="hover-line" ref={hoverLineRef}></div>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by username..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <table className="cheaters-table">
        <thead>
          <tr>
            <th onClick={() => sortData('username')}>
              Username <span>{getSortArrow('username')}</span>
            </th>
            <th onClick={() => sortData('ranking')}>
              Ranking <span>{getSortArrow('ranking')}</span>
            </th>
            <th onClick={() => sortData('cheat')}>
              Cheat Type <span>{getSortArrow('cheat')}</span>
            </th>
            <th onClick={() => sortData('date')}>
              Date of Last Report <span>{getSortArrow('date')}</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredCheaters.map((cheater, index) => (
            <tr key={index}>
              <td>{cheater.username}</td>
              <td className="ranking">{cheater.ranking}</td>
              <td className="cheat">{cheater.cheat}</td>
              <td className="date">{cheater.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cheaters;