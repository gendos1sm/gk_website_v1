import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import YouTube from 'react-youtube';
import './About.css';

const About = () => {
  const videoOptions = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <Container className="about-container">
      <Row>
        <Col>
          <h1>About Us</h1>
          <p>Welcome to our Goalkeeper School, where we are dedicated to providing top-notch training and resources for aspiring and professional soccer goalkeepers. Our mission is to help goalkeepers of all levels improve their skills, confidence, and understanding of the game.</p>
          
          <h2>Our Philosophy</h2>
          <p>We believe that every goalkeeper has the potential to excel with the right guidance and support. Our training programs are designed to cater to the unique needs of each individual, ensuring that they receive personalized coaching that addresses their strengths and areas for improvement.</p>
          
          <h2>Experienced Coaches</h2>
          <p>Our team of experienced coaches includes former professional goalkeepers and seasoned trainers who have a deep understanding of the game. They bring a wealth of knowledge and expertise to our programs, helping our students reach their full potential.</p>
          
          <h2>Comprehensive Training Programs</h2>
          <p>We offer a variety of training programs that cover all aspects of goalkeeping, from basic skills and techniques to advanced strategies and mental preparation. Our courses are designed to be engaging and challenging, providing goalkeepers with the tools they need to succeed on and off the field.</p>
          
          <h2>Join Us Today</h2>
          <p>Whether you are a beginner looking to learn the fundamentals or an experienced goalkeeper aiming to refine your skills, we have the right program for you. Join us today and take the first step towards becoming a better goalkeeper!</p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <div className="video-container">
            <YouTube videoId="lQQUrbATlhI" opts={videoOptions} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;