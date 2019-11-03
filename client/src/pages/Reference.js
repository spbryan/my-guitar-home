import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import con from "../utils/const";
import './Reference.css';

class Reference extends Component {
    componentDidMount() {
        if (!sessionStorage.getItem("userID")) {
            this.props.updateWhichNav(con.LOGGED_OUT);
        } else {
            this.props.updateWhichNav(con.LOGGED_IN);
        }
    }
    
    render() {
        return (
            <div>
                <Container id="container">
                    <Row>
                        <Col size="md-12">
                            <h1>Reference</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Reference;