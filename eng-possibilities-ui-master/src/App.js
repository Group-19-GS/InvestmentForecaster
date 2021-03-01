import { Container } from "react-bootstrap";

import NavBar from "./components/NavBar";
import ForecasterHome from './pages/Forecaster'
import InputTable from "./components/Table"

import "./App.css";
import React from "react";

function App() {
  return (
    <div>
      <Container fluid className="App">
        <NavBar/>
        <Container fluid>
            <ForecasterHome/>
            <InputTable/>
        </Container>
      </Container>
    </div>
  );
}

export default App;
