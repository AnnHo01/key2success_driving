'use client';

//Import plugins
import React from 'react'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
// Import components
// Import media
// Import styles
import styles from '../../scss/main.module.scss';
import Header from '../components/nav';

function Home() {
  return (
    <>
    <Header page={'contact'} />
    <header className='bg-img contact position-relative' style={{backgroundImage: 'url("/cover-contact.png")'}}>
        <div className='overlay dark d-flex align-items-end align-items-lg-center'>
          <Container>
              <Row>
                  <Col className='mb-3 mb-lg-0'>
                      <h1>Let’s Get In Touch</h1>
                      <p className='mb-4 mb-lg-0'>Reach out for Driving Lessons and Inquiries</p>
                  </Col>
              </Row>
          </Container>
        </div>
      </header>
      <main>
        <section className='d-flex justify-content-center flex-column align-items-center'>
          <div className='d-flex mb-1'>
            <div className='car-icn'>
              <Image src='/icon/car-icn.svg' alt="Car Icon" fill={true} />
            </div>
          </div>
          <div className='divider-hor'>
          </div>
        </section>
        <section className='pt-0 text-center'>  
          <Container>
              <Row>
                <Col>
                  <h2>Ready to Take the Wheel?<br />Reach Out Today!</h2>
                </Col>
              </Row>
            </Container>
        </section>
        <section className='bg-yel text-center'>
          <form className={`${styles.exp_form}`} name="contact_form" method="POST"  action='/thanks' netlify>
            <Container>
              <Row className='d-flex justify-content-center' style={{gap: '40px'}}>
                <Col xs={12} lg={8}>
                  <label htmlFor='fname'>Name*</label>
                  <input type='text' id='fname' name='fname' placeholder='Type Your Name' />
                </Col>
                <Col xs={12} lg={8}>
                  <label htmlFor='email'>Email*</label>
                  <input type='email' id='email' name='email' placeholder='Type Your Email' required />
                </Col>
                <Col xs={12} lg={8}>
                  <label htmlFor='pnum'>Phone Number</label>
                  <input type='number' id='pnum' name='pnum' placeholder='Type Your Phone' />
                </Col>
                <Col xs={12} lg={8}>
                  <label htmlFor='fname'>Leave us a note</label>
                  <textarea id='experience' name='experience' rows={4} placeholder='Ask us anything'></textarea>
                </Col>
                <Col xs={12} lg={8} className='d-flex justify-content-center'>
                  <button type="submit" className='call_btn'>Connect Now</button>
                </Col>
              </Row>
            </Container>
          </form>
        </section>
      </main>
    </>
  )
}

export default Home;