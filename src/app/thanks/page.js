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
        <section className='pt-0 text-center'>  
          <Container>
              <Row>
                <Col>
                  <h2>Thank you for your Submission!</h2>
                </Col>
                <Col>
                    <Link href="/">Back to Home page</Link>
                </Col>
              </Row>
            </Container>
        </section>
      </main>
    </>
  )
}

export default Home;