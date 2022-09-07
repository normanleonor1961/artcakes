import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    const today = new Date();
  return (
    <footer>
        <Container>
            <Row>
                <Col className='text-center py-3'>
                    Copyright &copy; {today.getFullYear()} Art Cakes
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer