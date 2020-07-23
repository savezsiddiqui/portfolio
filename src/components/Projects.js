import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { projectList } from './projectlist';

const projectCard = ({ title, created, description, github_link, demo_link }) =>
    <Col xs={12} md={6} lg={4} className='p-4' key={title}>
        <Card style={{ width: "100%", border: "1px solid #ffff" }}>
            <Card.Body className='shadow'>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{created}</Card.Subtitle>
                <Card.Text>{description}</Card.Text>
                <Button variant='link' className='p-0 m-0' href={demo_link} disabled={demo_link !== '' ? false : true}>Demo Link</Button>
                <Button variant='link' className='pl-2 p-0 m-0' href={github_link} disabled={github_link !== '' ? false : true}>Github Link</Button>
            </Card.Body>
        </Card>
    </Col>

const Projects = () => {

    const cards = projectList.map(project => projectCard(project))

    return (
        <Container fluid={true}>
            <Row>
                <Col xs={12} className='text-center my-5'>
                    <h1 className="display-1 font-weight-bolder">Projects</h1>
                </Col>
                {cards}
            </Row>
        </Container>
    )
}

export default Projects
