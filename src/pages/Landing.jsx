import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <>
      <Row className='w-100 mt-5 d-flex justify-content-center align-times-center ps-4'>
        <Col md={1}></Col>
        <Col md={5} className='p-4'>
        <h3>Wlecome to <span className='text-warning'>Media player</span></h3>
        <p style={{textAlign:'justify'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aut debitis eveniet omnis? Obcaecati inventore sed harum fugit possimus ducimus voluptas accusantium ipsam, neque vel esse asperiores amet ipsum dolore! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa quibusdam esse quis omnis repudiandae alias facilis laborum necessitatibus fuga magnam, at labore totam, voluptatem, id quos similique soluta praesentium a.</p>
        <Link to={'./home'}><button className='btn btn-warning mt-3'>Get started</button></Link>
        </Col>
        <Col md={1}></Col>
        <Col md={5} className=' d-flex justify-content-center align-items-center'>
        <img src='https://img.freepik.com/premium-photo/girl-playing-video-game-while-wearing-headphones_931878-20352.jpg' alt='no img' className='w-50 h-75 rounded'/>
        </Col>
      </Row>

      <div className='container'>
        <h3 className='text-center'>Features</h3>
      <Row >
        <Col md={1} ></Col>
        <Col md={3}>
          <Card style={{ width: '100%'}} className='mt-3'>
        <Card.Img variant="top" src="https://i.gifer.com/2zFo.gif" height={'300px'}/>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
             bulk of the card's content.
            </Card.Text>
           
          </Card.Body>
          </Card>
        </Col>
        <Col md={4} className='px-md-5' >
          <Card style={{ width: '100%'}} className='mt-3 '>
        <Card.Img variant="top" src="https://i.gifer.com/7BPQ.gif" height={'300px'}/>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
             bulk of the card's content.
            </Card.Text>
           
          </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card style={{ width: '100%' }} className='mt-3'>
        <Card.Img variant="top" src="https://i.gifer.com/2QeW.gif" height={'300px'} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
             bulk of the card's content.
            </Card.Text>
           
          </Card.Body>
          </Card>
        </Col>
        <Col md={1}></Col>
      </Row>
      </div>

      <div className="container-fluid my-5">
        <div className='row'>
          <div className="col-md-1"></div>
          <div className="col-md-10 border border-light border-2 rounded">
            <div className="row p-5">
              <div className="col-md-6 ">
                <h3 className='text-warning'>Simple fsat and Powerful</h3>
                <p style={{textAlign:'justify'}}><span className='fs-5 text-warning'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam nesciunt corporis ad dignissimos pariatur assumenda perferendis. </p>
                <p style={{textAlign:'justify'}}><span className='fs-5 text-warning'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam nesciunt corporis ad dignissimos pariatur assumenda perferendis. !</p>
                <p style={{textAlign:'justify'}}><span className='fs-5 text-warning'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam nesciunt corporis ad dignissimos pariatur assumenda perferendis. </p>
              </div>
              <div className="col-md-6">
              <iframe className='ms-md-3' width="100%" height="400" src="https://www.youtube.com/embed/rhrD7as3KJg" title="Neeraj Madhav - BALLAATHA JAATHI [Official Video] ft. Dabzee | Baby Jean | ​⁠Rzee" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </>
  )
}

export default Landing
