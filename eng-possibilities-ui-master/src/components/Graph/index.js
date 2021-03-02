import React from "react";
import forecastImg from './image/forecast.png';
import percentImg from './image/percentage.png';
import {FormControl, Table} from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";



function OutputGraph() {
    return(
        <>
            <div>
                <img src={forecastImg} alt = "forecastImage"/>
                <img src={percentImg} alt = "forecastImage"/>
            </div>
 
            <div>
                <Button variant="primary" size="lg" >
                    Energy Forecast
                </Button>{' '}
                <Button variant="secondary" size="lg" >
                    Retail Forecast
                </Button>{' '}
                <Button variant="success" size="lg" >
                    Financial Services Forecast
                </Button>{' '}
                <Button variant="warning" size="lg" >
                    Pharmaceutical Forecast
                </Button>{' '}
                <Button variant="primary" size="lg" >
                    Airline Forecast
                </Button>{' '}
                <Button variant="secondary" size="lg" >
                    Technology Forecast
                </Button>{' '}
                <Button variant="success" size="lg" >
                    Gaming Forecast
                </Button>{' '}
                <Button variant="warning" size="lg" >
                    Real Estate Forecast
                </Button>{' '}

            </div>
        </>


    );
};

export default OutputGraph;