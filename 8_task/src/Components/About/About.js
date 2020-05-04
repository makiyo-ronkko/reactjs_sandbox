import React from 'react';
//import './About.css';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';



const About = () => {
    return (
        <Container fluid>
            <Card>
                <Row>
                    <Col sm={5}>
                        <Image alt="about" src="//source.unsplash.com/1600x900/?nature" thumbnail className="m-1" />
                    </Col>
                    <Col sm={5} className="m-1">
                        <Card.Text className="mt-5">
                            <h2>About me</h2>
                        </Card.Text>
                        <Card.Text>
                            <p>Lorem ipsum dolor sit amet, nec probo eripuit propriae no, mucius appareat moderatius id duo, duo mazim fabellas ea. Vel porro perfecto ne, omnesque disputationi ex duo. Ex illum elitr ocurreret sit. Pro ei nemore omittantur voluptatibus, dicit graeco ut pri. Eu eum duis populo discere.</p>
                        </Card.Text>
                    </Col>
                </Row>
            </Card>
        </Container>
    );
};
export default About;