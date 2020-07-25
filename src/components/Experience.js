import React from 'react';
import { Row, Col, Container, Card } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';

const certificates = [
    {
        title: 'Mern Stack front to back',
        link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-3cdd77f0-25c7-473b-8f9d-d010639193fe.pdf'
    },
    {
        title: 'Problem Solving Intermediate',
        link: 'https://www.hackerrank.com/certificates/ed28cca521af'
    },
    {
        title: 'Front-End Web Development with React',
        link: 'https://www.coursera.org/account/accomplishments/verify/TY9DY8GZ3Z49'
    },
    {
        title: 'Front-End Web UI Frameworks and Tools: Bootstrap 4',
        link: 'https://www.coursera.org/account/accomplishments/verify/EVQWQRTTKYU7'
    },
    {
        title: 'Android App Development',
        link: 'https://trainings.internshala.com/certificate/preview/android/coe/dashbaord?score=true'
    }
];

const experience = [
    {
        company: 'Fashn.me',
        image: '/portfolio/fashn.me.png',
        date: 'Jan 2020 - Feb 2020',
        description: `Worked as a backend engineer to develop backend for
        Patang App. Later worked on a bootstrap based Admin Dashboard.`,
        link: 'https://play.google.com/store/apps/details?id=com.patang'
    },
    {
        company: 'Jiit',
        image: '/portfolio/jiit.png',
        date: 'May 2020 - Jun 2020',
        description: `Interned within the college for 6 weeks and created
        DevConnector. Worked both on the front-end and backend.`,
        link: 'https://sheltered-garden-98635.herokuapp.com/'
    }
]

const CertiItem = ({ certi }) => {
    const { title, link } = certi;
    return (
        <li className='certi-item'>
            <a href={link}>{title}</a>
        </li>
    )
}

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x, y, s) => `perspective(600px) scale(${s})`;

const ExpCard = ({ experience }) => {
    const { company, image, date, description, link } = experience;
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));
    return (
        <animated.div className='col-xs-12 col-sm-6 col-md-4 shadow mx-4 my-2 rounded'
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans) }}
        >
            <Card.Body>
                <img className='exp_image' src={image} alt='company' />
                <Card.Title>{company}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
                <Card.Text>
                    {description}
                </Card.Text>
                <Card.Link href={link}><i class="fas fa-link"></i></Card.Link>
            </Card.Body>
        </animated.div>
    )
}

const Experience = () => {
    return (
        <Container >
            <Row className="text-center justify-content-center">
                <Col xs={12}>
                    <h1 className="display-3 font-weight-bolder my-4 py-4">Experience</h1>
                </Col>
                {experience.map((exp, i) => <ExpCard experience={exp} key={i} />)}
                <Col xs={12}>
                    <h1 className="display-4 font-weight-bolder pt-4">Skills</h1>
                    <ul className="list-inline">
                        <li className="list-inline-item"><i className="fab fa-html5"></i></li>
                        <li className="list-inline-item"><i className="fab fa-css3-alt"></i></li>
                        <li className="list-inline-item"><i className="fab fa-js-square"></i></li>
                        <li className="list-inline-item"><i className="fab fa-react"></i></li>
                        <li className="list-inline-item"><i className="fab fa-node-js"></i></li>
                        <li className="list-inline-item"><i className="fab fa-sass"></i></li>
                        <li className="list-inline-item"><i className="fab fa-npm"></i></li>
                    </ul>
                </Col>
                <Col xs={12} md={8} lg={6}>
                    <h1 className="display-4 font-weight-bolder">Certifications</h1>
                    <ul className='list-inline'>
                        {certificates.map((certi, i) => <CertiItem certi={certi} key={i} />)}
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default Experience;
