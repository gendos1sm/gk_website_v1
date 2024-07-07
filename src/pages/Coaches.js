import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Coaches.css';
import AlissonBeckerImage from '../assets/Alisson_Becker.jpg';
import AlyssaNaeherImage from '../assets/Alyssa_Naeher.jpg';

const coachesData = [
  { id: 1, name: "Coach 1", bio: "Biography and licenses", image: AlissonBeckerImage },
  { id: 2, name: "Coach 2", bio: "Biography and licenses", image: AlyssaNaeherImage },
  // more coaches to come
];

const Coaches = () => (
  <Container className="coaches-container">
    <Row>
      {coachesData.map(coach => (
        <Col md={4} key={coach.id}>
          <Card className="coach-card">
            <Card.Img variant="top" src={coach.image} />
            <Card.Body>
              <Card.Title>{coach.name}</Card.Title>
              <Card.Text>{coach.bio}</Card.Text>
              <Button variant="primary">Contact Me</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Coaches;