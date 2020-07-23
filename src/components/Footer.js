import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
            <Container fluid={true}>
                <Row className="border-top p-1">
                    <Col className='text-center'>
                        You can contact me at savezsiddiqui@gmail.com {' '}
                       <a href='https://www.linkedin.com/in/savez-siddiqui-53564617a/'>linkedin</a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;
