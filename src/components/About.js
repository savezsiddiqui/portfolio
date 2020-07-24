import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { useTrail, animated } from 'react-spring';

const paragraphs = [
    `I'm a full stack engineer with experience in
    Express JS, Node JS, MySQL, MongoDB, and React.`,
    `My dream is to one day have my own company and
    become an entrepreneur (currently working on some ideas).`,
    `I'm constantly learning new things. currently those things
    include gaining more experience with MongoDB, React, Express JS, and Node JS
        and solving problems on leetcode.`,
    `When I'm not learning something new, chances are I'm watching some
    YouTube videos.`
];

const About = () => {

    const trails = useTrail(paragraphs.length, {
        to: { fontSize: '2rem' },
        from: { fontSize: '0rem' }
    });

    const animation = trails.map((style, index) =>
        <animated.p style={style} key={index}>
            {paragraphs[index]}
        </animated.p>
    );

    return (
        <Container fluid={true}>
            <Row className="text-center justify-content-center">
                <Col xs={12} className='p-0'>
                    <h1 className="display-1 font-weight-bolder py-5">About</h1>
                </Col>
                <Col className="display-6" lg={8}>
                    <img src='emma_watson.jpg' alt="#" className="about_image mb-3" />
                    {animation}
                </Col>
            </Row>
        </Container>
    )
}

export default About;
