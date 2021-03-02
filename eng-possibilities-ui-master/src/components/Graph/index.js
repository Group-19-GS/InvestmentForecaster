import React from "react";
import forecastImg from './image/forecast.png';
import percentImg from './image/percentage.png';
import {FormControl, Table} from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { Button,ButtonGroup } from "react-bootstrap";
import {Container, Row, Col} from "react-bootstrap"



function OutputGraph() {
    return(
        <>
            <Container>
                    <div>
                        <img src={forecastImg} alt = "forecastImage"/>
                        <img src={percentImg} alt = "forecastImage"/>
                    </div>
                <div>
                    <ButtonGroup aria-label="Basic example" size="lg">
                        <Button variant="primary">
                            Energy
                        </Button>{' '}
                        <Button variant="secondary">
                            Retail
                        </Button>{' '}
                        <Button variant="success">
                            Financial Services
                        </Button>{' '}
                        <Button variant="warning">
                            Pharmaceutical
                        </Button>{' '}
                        <Button variant="info">
                            Airline
                        </Button>{' '}
                        <Button variant="light">
                            Technology
                        </Button>{' '}
                        <Button variant="dark">
                            Gaming
                        </Button>{' '}
                        <Button variant="danger">
                            Real Estate
                        </Button>{' '}
                    </ButtonGroup>
                </div>
            </Container>
        </>


    );
};

export default OutputGraph;