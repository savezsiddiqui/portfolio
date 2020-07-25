import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { useSpring, useTrail, animated } from 'react-spring';

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

    const [grow, setGrow] = useState(true);
    const trails = useTrail(paragraphs.length, {
        fontSize: grow ? '2rem' : '3rem'
    });

    const [flipped, set] = useState(false);
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 }
    });

    const animation = trails.map((style, index) =>
        <animated.p style={style} key={index} onClick={() => setGrow(!grow)}>
            {paragraphs[index]}
        </animated.p>
    );

    return (
        <Container >
            <Row className="text-center justify-content-center">
                <Col xs={12} className='p-0'>
                    <h1 className="display-3 font-weight-bolder py-4 my-4">About</h1>
                </Col>
                <Col className="display-6" lg={8}>
                    <div className='text-center about-div' onClick={() => set(!flipped)}>
                        <animated.div className='c' style={{ opacity: opacity.interpolate(o => 1 - o), transform }}>
                            <img src='/portfolio/savez.jpg' alt="#" className="about_image mb-3" />
                        </animated.div>
                        <animated.div className='c' style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}>
                            <img src='/portfolio/stark.jpg' alt="#" className="about_image mb-3" />
                        </animated.div>
                    </div>
                    {animation}
                </Col>
            </Row>
        </Container>
    )
}

export default About;
