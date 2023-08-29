'use client';

//Import plugins
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
// Import components
import { getReviews } from '../components/fetchContext';
// Import media
// Import styles
import styles from '../../scss/main.module.scss';
import Header from '../components/nav';

function Home() {
  const [reviews, setReviews] =- useState();
  useEffect(() => {
    const myAsync = async() => {
      await getReviews().then((response) => response.json()).then((data) => {
        console.log(data);
        setReviews(data[0]);
      })
    }

    myAsync();
  })
  return (
    <>
    <Header page={'contact'} />
    <header className='bg-img contact position-relative' style={{backgroundImage: 'url("/cover-contact.png")', height: '80vh'}}>
        <div className='overlay dark d-flex align-items-end align-items-lg-center'>
          <Container>
              <Row>
                  <Col className='mb-3 mb-lg-0 headline'>
                      <h1>Thank you for your Submission!</h1>
                      <p>{reviews != undefined && reviews.id}</p>
                  </Col>
              </Row>
          </Container>
        </div>
      </header>
    </>
  )
}

export default Home;