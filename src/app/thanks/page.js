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
    <header className='bg-img contact position-relative' style={{backgroundImage: 'url("/cover-contact.png")', height: '80vh'}}>
        <div className='overlay dark d-flex align-items-end align-items-lg-center'>
          <Container>
              <Row>
                  <Col className='mb-3 mb-lg-0 headline'>
                      <h1>Thank you for your Submission!</h1>
                  </Col>
              </Row>
          </Container>
        </div>
      </header>
    </>
  )
}

export default Home;