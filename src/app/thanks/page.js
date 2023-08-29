'use client';

//Import plugins
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
// Import components
import { getReviews, pendReview } from '../components/fetchContext';
// Import media
// Import styles
import styles from '../../scss/main.module.scss';
import Header from '../components/nav';
import { useSearchParams } from 'next/navigation';

function Home() {
  const search = useSearchParams();
  const form = search.get('form');

  useEffect(() => {
    const myAsync = async() => {
      await getReviews().then((response) => response.json()).then((data) => {
        console.log(data);
        if(form === 'review'){
          pendReview(data[0].id);
        }
      })
    }

    myAsync();
  }, [])
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