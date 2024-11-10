import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
const Cards = () => {
  return (
    <div>
      <Container>
      <Row className='imge '> 
        <Col xs={6} md={4}>
          <Image src="image1.jpg" roundedCircle
          style={{width:'260px', marginTop:'20px'}}/>
        </Col>
      </Row>
      <div className='about'>
        <h1 className='name'>ADHEETHI KS</h1>
        <h4>About Me</h4>
        <p className='para'>I'm Adheethi, an engineering student specializing in Computer Science. I'm passionate about developing full-stack web applications and building creative solutions for real-world problems. With a foundation in programming and problem-solving, I’m constantly learning and refining my skills to stay ahead in the tech world.</p>
    </div>
    </Container>
    
    </div>
  )
}

export default Cards
