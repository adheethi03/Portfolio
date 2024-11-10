import React from 'react'
import Card from 'react-bootstrap/Card';
const Cards2 = () => {
    return (
        <>
        <div style={{display:'flex',justifyContent:'space-around'}}>
          {[
            'secondary',
          ].map((variant) => (
            <Card
              bg={variant.toLowerCase()}
              key={variant}
              text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
              style={{ width: '18rem' , margin:'20px',boxShadow:'0px 10px 20px rgba(0, 0, 0, 0.3), 0px 6px 6px rgba(0, 0, 0, 0.2)'}}
              className="mb-2"
            
            
            >
              <Card.Header>SKILLS</Card.Header>
              <Card.Body>
                <Card.Text>
                    <li>Programming Languages: JavaScript, Python, Java,</li>
                    <li>Web Development: HTML, CSS, JavaScript, React.js, Node.js</li>
                    <li>Databases: MySQL</li>
                    <li>Tools & Technologies: Git, Docker, VS Code</li>
                    <li>Other Areas: Data Structures & Algorithms, Object-Oriented Programming</li>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
          {/* card2 */}
          {[
            'secondary',
          ].map((variant) => (
            <Card
              bg={variant.toLowerCase()}
              key={variant}
              text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
              style={{ width: '18rem' , margin:'20px',boxShadow:'0px 10px 20px rgba(0, 0, 0, 0.3), 0px 6px 6px rgba(0, 0, 0, 0.2)'}}
              className="mb-2"
            
            >
              <Card.Header>MY WORKS</Card.Header>
              <Card.Body>
                <Card.Text>
                    <li><strong>Project1:</strong>Lorem ipsum dolor sit amet.</li>
                    <li><strong>Project2:</strong>Lorem ipsum dolor sit amet.</li>
                    <li><strong>Project3:</strong>Lorem ipsum dolor sit amet.</li>
                    <li><strong>Project4:</strong>Lorem ipsum dolor sit amet.</li>
                    <li><strong>Project5:</strong>Lorem ipsum dolor sit amet.</li>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
          {/* card3 */}
          {[
            'secondary',
          ].map((variant) => (
            <Card
              bg={variant.toLowerCase()}
              key={variant}
              text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
              style={{ width: '18rem' , margin:'20px',boxShadow:'0px 10px 20px rgba(0, 0, 0, 0.3), 0px 6px 6px rgba(0, 0, 0, 0.2)'}}
              className="mb-2"
            
            >
              <Card.Header>EDUCATION</Card.Header>
              <Card.Body>
                <Card.Text>
                    <li>SCHOOL: Lorem, ipsum dolor.</li>
                    <li>COLLEGE: Lorem, ipsum dolor.</li>
                    <li>HIGHER STUDIES: Lorem, ipsum dolor.</li>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
          </div>
        </>
      );
    }

export default Cards2
