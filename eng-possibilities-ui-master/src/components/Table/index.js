import React from "react";

import {FormControl, Table} from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";

const InputTable = () => {
    return (
        <>
            <div>
                <h3>Investment Allocations</h3>
                <p>Select your percentages for investment allocations in each of the sectors below. Add stock codes for a
                    more accurate forecast.</p>
            </div>
            <div>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">Total Investment</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="$0000"
                        aria-label="(to the nearest percent)"
                    />
                </InputGroup>

            </div>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Investment Sector</th>
                    <th>Percentage</th>
                    <th>Company 1</th>
                    <th>Company 2</th>
                    <th>Company 3</th>
                    <th>Company 4</th>
                    <th>Company 5</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th><p>Energy</p></th>
                    <th>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="00%"
                                aria-label="(to the nearest percent)"
                            />
                        </InputGroup>
                    </th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <th>Technology</th>
                    <th>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="00%"
                                aria-label="(to the nearest percent)"
                            />
                        </InputGroup>
                    </th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <th>Pharmaceuticals</th>
                    <th>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="00%"
                                aria-label="(to the nearest percent)"
                            />
                        </InputGroup>
                    </th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <th>Entertainment</th>
                    <th>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="00%"
                                aria-label="(to the nearest percent)"
                            />
                        </InputGroup>
                    </th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <th>Real Estate</th>
                    <th>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="00%"
                                aria-label="(to the nearest percent)"
                            />
                        </InputGroup>
                    </th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                </tbody>
            </Table>
            <div>
                <Button variant="primary" size="lg" block>
                    Update
                </Button>
            </div>
        </>
    );
};

export default InputTable;

