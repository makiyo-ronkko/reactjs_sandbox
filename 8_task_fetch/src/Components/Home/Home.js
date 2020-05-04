import React from 'react';
//import './Home.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Home = () => {
    return (
        <div>
            <Container fluid>
                <Card class="col-12">
                    <div class="card text-black bg-white">
                        <Card.Body >
                            <h3 class="card-title">Welcome To My Portfolio!</h3>
                        </Card.Body>
                    </div>
                </Card>
            </Container>
        </div>
    );
};


export default Home;