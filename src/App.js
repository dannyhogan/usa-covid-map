import React, { useEffect, useState } from "react";
import "./App.css";
import USAMap from "react-usa-map";
import Modal from "./components/Modal/Modal";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { getCovidStatesData, getCovidUSData } from "./services/covidApi";
import NationalDisplay from "./components/NationalDisplay/NationalDisplay";

function App() {
  const [activeState, setActiveState] = useState(null);
  const [covidUSData, setCovidUSData] = useState(null);
  const [covidStatesData, setCovidStatesData] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  const [modalOpen, toggleModalOpen] = useState(false);

  useEffect(() => {
    getCovidStatesData().then(setCovidStatesData).catch(setFetchError);
    getCovidUSData().then(setCovidUSData).catch(setFetchError);
  }, []);

  const statesCustomConfig = () => {
    const generateHexColorForState = (stateCode) => {
      const highest = covidStatesData.sort((a, b) => b.total - a.total)[0];
      const hexValue =
        250 -
        (covidStatesData.find((o) => o.state === stateCode).totalTestResults /
          highest.totalTestResults) *
          255;

      return `${hexValue}, ${hexValue}`;
    };

    return covidUSData && covidStatesData
      ? {
          AL: {
            fill: `rgb(255, ${generateHexColorForState("AL")})`,
          },
          AK: {
            fill: `rgb(255, ${generateHexColorForState("AK")})`,
          },
          AS: {
            fill: `rgb(255, ${generateHexColorForState("AS")})`,
          },
          AZ: {
            fill: `rgb(255, ${generateHexColorForState("AZ")})`,
          },
          AR: {
            fill: `rgb(255, ${generateHexColorForState("AR")})`,
          },
          CA: {
            fill: `rgb(255, ${generateHexColorForState("CA")})`,
          },
          CO: {
            fill: `rgb(255, ${generateHexColorForState("CO")})`,
          },
          CT: {
            fill: `rgb(255, ${generateHexColorForState("CT")})`,
          },
          DE: {
            fill: `rgb(255, ${generateHexColorForState("DE")})`,
          },
          DC: {
            fill: `rgb(255, ${generateHexColorForState("DC")})`,
          },

          FL: {
            fill: `rgb(255, ${generateHexColorForState("FL")})`,
          },
          GA: {
            fill: `rgb(255, ${generateHexColorForState("DC")})`,
          },
          GU: {
            fill: `rgb(255, ${generateHexColorForState("GU")})`,
          },
          HI: {
            fill: `rgb(255, ${generateHexColorForState("HI")})`,
          },
          ID: {
            fill: `rgb(255, ${generateHexColorForState("ID")})`,
          },
          IL: {
            fill: `rgb(255, ${generateHexColorForState("IL")})`,
          },
          IN: {
            fill: `rgb(255, ${generateHexColorForState("IN")})`,
          },
          IA: {
            fill: `rgb(255, ${generateHexColorForState("IA")})`,
          },
          KS: {
            fill: `rgb(255, ${generateHexColorForState("KS")})`,
          },
          KY: {
            fill: `rgb(255, ${generateHexColorForState("KY")})`,
          },
          LA: {
            fill: `rgb(255, ${generateHexColorForState("LA")})`,
          },
          ME: {
            fill: `rgb(255, ${generateHexColorForState("ME")})`,
          },
          MD: {
            fill: `rgb(255, ${generateHexColorForState("MD")})`,
          },
          MA: {
            fill: `rgb(255, ${generateHexColorForState("MA")})`,
          },
          MI: {
            fill: `rgb(255, ${generateHexColorForState("MI")})`,
          },
          MN: {
            fill: `rgb(255, ${generateHexColorForState("MN")})`,
          },
          MS: {
            fill: `rgb(255, ${generateHexColorForState("MS")})`,
          },
          MO: {
            fill: `rgb(255, ${generateHexColorForState("MO")})`,
          },
          MT: {
            fill: `rgb(255, ${generateHexColorForState("MT")})`,
          },
          NE: {
            fill: `rgb(255, ${generateHexColorForState("NE")})`,
          },
          NV: {
            fill: `rgb(255, ${generateHexColorForState("NV")})`,
          },
          NH: {
            fill: `rgb(255, ${generateHexColorForState("NH")})`,
          },
          NJ: {
            fill: `rgb(255, ${generateHexColorForState("NJ")})`,
          },
          NM: {
            fill: `rgb(255, ${generateHexColorForState("NM")})`,
          },
          NY: {
            fill: `rgb(255, ${generateHexColorForState("NY")})`,
          },
          NC: {
            fill: `rgb(255, ${generateHexColorForState("NC")})`,
          },
          ND: {
            fill: `rgb(255, ${generateHexColorForState("ND")})`,
          },
          MP: {
            fill: `rgb(255, ${generateHexColorForState("MP")})`,
          },
          OH: {
            fill: `rgb(255, ${generateHexColorForState("OH")})`,
          },
          OK: {
            fill: `rgb(255, ${generateHexColorForState("OK")})`,
          },
          OR: {
            fill: `rgb(255, ${generateHexColorForState("OR")})`,
          },
          PA: {
            fill: `rgb(255, ${generateHexColorForState("PA")})`,
          },
          PR: {
            fill: `rgb(255, ${generateHexColorForState("PR")})`,
          },
          RI: {
            fill: `rgb(255, ${generateHexColorForState("RI")})`,
          },
          SC: {
            fill: `rgb(255, ${generateHexColorForState("SC")})`,
          },
          SD: {
            fill: `rgb(255, ${generateHexColorForState("SD")})`,
          },
          TN: {
            fill: `rgb(255, ${generateHexColorForState("TN")})`,
          },
          TX: {
            fill: `rgb(255, ${generateHexColorForState("TX")})`,
          },
          UT: {
            fill: `rgb(255, ${generateHexColorForState("UT")})`,
          },
          VT: {
            fill: `rgb(255, ${generateHexColorForState("VT")})`,
          },
          VI: {
            fill: `rgb(255, ${generateHexColorForState("VI")})`,
          },
          VA: {
            fill: `rgb(255, ${generateHexColorForState("VA")})`,
          },
          WA: {
            fill: `rgb(255, ${generateHexColorForState("WA")})`,
          },
          WV: {
            fill: `rgb(255, ${generateHexColorForState("WV")})`,
          },
          WI: {
            fill: `rgb(255, ${generateHexColorForState("WI")})`,
          },
          WY: {
            fill: `rgb(255, ${generateHexColorForState("WY")})`,
          },
        }
      : {};
  };

  console.log();

  const handleMapClick = (event) => {
    if (covidStatesData) {
      const stateData = covidStatesData.find(
        (o) => o.state === event.target.dataset.name
      );
      setActiveState(stateData);
      toggleModalOpen((open) => !open);
    }
  };

  return (
    <div className="App">
      <Header />
      <USAMap
        className="Map"
        customize={statesCustomConfig()}
        onClick={handleMapClick}
      />
      <NationalDisplay data={covidUSData} />
      <Modal
        activeState={activeState}
        modalOpen={modalOpen}
        toggleOpen={toggleModalOpen}
      />
      <Footer />
    </div>
  );
}

export default App;
