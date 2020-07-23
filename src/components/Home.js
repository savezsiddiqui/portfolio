import React from 'react';
import { Container, Jumbotron, Row, Col } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';

const Home = () => {

    const style = useSpring({ opacity: 1, from: { opacity: 0 } });

    return (
        <animated.div style={style}>
            <Jumbotron className="bg-transparent jumbotron-fluid p-0" >
                <Container fluid={true} style={{ minHeight: "80vh" }}>
                    <Row className="text-center py-5">
                        <Col>
                            <h1 className="display-1 font-weight-bolder">Hi! I'm Savez.</h1>
                            <h3 className="display-4 font-weight-light">I am a JS Developer.</h3>
                            <h3 className="lead font-weight-light">I work in the MERN stack and I am passionate about everything javascript.<br />
                        I even bought a shirt with a Node sticker on it.</h3>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </animated.div>
    )
}

export default Home;
