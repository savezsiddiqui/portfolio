import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <Container fluid={true}>
                <Row className="text-center justify-content-center">
                    <Col xs={12} className='p-0'>
                        <h1 className="display-1 font-weight-bolder py-5">About</h1>
                    </Col>
                    <Col lg={8}>
                        <img src='emma_watson.jpg' className="about_image mb-3" />

                        <p>Hello, my name is Savez. I'm a full stack engineer with experience in
                            Express JS, Node JS, MySQL, MongoDB, and React.</p>

                        <p>My dream is to one day have my own company and
                            become an entrepreneur (currently working on some ideas).</p>

                        <p>I'm constantly learning new things. currently those things
                        include gaining more experience with MongoDB, React, Express JS, and Node JS
                            and solving problems on leetcode.</p>

                        <p>My latest project, DevConnector, is a facebook for developers.
                            You can check it out <a href="https://sheltered-garden-98635.herokuapp.com/">here</a>.
                            It is built with React, MongoDB, Express JS, and Node JS.</p>

                        <p>When I'm not learning something new, chances are I'm watching some
                            YouTube videos.</p>
                    </Col>
                </Row>
            </Container>


        </div>
    )
}

export default About;
