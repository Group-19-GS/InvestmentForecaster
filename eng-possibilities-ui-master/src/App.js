import {Container} from "react-bootstrap";

import NavBar from "./components/NavBar";
import ForecasterHome from './pages/Forecaster'
import InputTable from "./components/Table"
import Displaygraph from "./components/Graph"
import forecastImg from './components/Graph/image/forecast.png';


import "./App.css";
import React from "react";
import OutputGraph from "./components/Graph";

function App() {
  return (
    <div>
      <Container fluid className="App">
        <NavBar/>
        <Container fluid>
            <ForecasterHome/>
            <InputTable/>
            <OutputGraph/>
        </Container>
      </Container>
    </div>
  );
}

export default App;
