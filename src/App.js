import React, { useEffect, useState } from 'react';
import './App.css';
import USAMap from 'react-usa-map'
import Modal from './components/Modal/Modal';
import Header from './components/Header/Header';

function App() {
  const [activeState, setActiveState] = useState(null);
  const [covidData, setCovidData] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  const [modalOpen, toggleModalOpen] = useState(false);

  useEffect(() => {
    fetch('https://covidtracking.com/api/states')
      .then(res => res.json())
      .then(data => setCovidData(data))
      .catch(err => setFetchError(err))
  }, [])

  const statesCustomConfig = () => {
    return {
      "AL": {},
      "AK": {},
      "AS": {},
      "AZ": {},
      "AR": {},
      "CA": {},
      "CO": {},
      "CT": {},
      "DE": {},
      "DC": {},
      "FM": {},
      "FL": {},
      "GA": {},
      "GU": {},
      "HI": {},
      "ID": {},
      "IL": {},
      "IN": {},
      "IA": {},
      "KS": {},
      "KY": {},
      "LA": {},
      "ME": {},
      "MH": {},
      "MD": {},
      "MA": {},
      "MI": {},
      "MN": {},
      "MS": {},
      "MO": {},
      "MT": {},
      "NE": {},
      "NV": {},
      "NH": {},
      "NJ": {},
      "NM": {},
      "NY": {},
      "NC": {},
      "ND": {},
      "MP": {},
      "OH": {},
      "OK": {},
      "OR": {},
      "PW": {},
      "PA": {},
      "PR": {},
      "RI": {},
      "SC": {},
      "SD": {},
      "TN": {},
      "TX": {},
      "UT": {},
      "VT": {},
      "VI": {},
      "VA": {},
      "WA": {},
      "WV": {},
      "WI": {},
      "WY": {}
    }
  };


  const handleMapClick = event => {
    if (covidData) {
      const stateData = covidData.find(o => o.state === event.target.dataset.name);
      setActiveState(stateData);
      toggleModalOpen(open => !open);
    }
  }


  return (
    <div className="App">
      <Header />
      <USAMap className="Map" customize={statesCustomConfig()} onClick={handleMapClick} />
      <Modal activeState={activeState} modalOpen={modalOpen} toggleOpen={toggleModalOpen} />
    </div>
  );
}

export default App;
