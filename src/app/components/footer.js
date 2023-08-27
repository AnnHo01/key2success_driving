'use client';

//Import plugins
import Image from 'next/image';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
// Import components
// Import media
// Import styles
import styles from '../../scss/footer.module.scss';

function Footer() {
  return (
    <footer className={`${styles.footer}`}>
        <Container>
            <Row>
                <Col lg={3} xs={12} className='d-flex align-items-center flex-column mb-3'>
                    <h6>Quick Links</h6>
                    <ul>
                        <li>
                            <a href='/' >Home</a>
                        </li>
                        <li>
                            <a href='/contact'>Contact Us</a>
                        </li>
                    </ul>
                </Col>
                <Col lg={3} xs={12} className='d-flex align-items-center flex-column mb-3'>
                    <h6>Contact</h6>
                    <ul>
                        <li>
                            <a href='tel:2049992051'>(204) 999 - 2051</a>
                        </li>
                        <li>
                            <a href='mailto:ch%69ra%67%338@hotmail.%63om'>chirag38@hotmail.com</a>
                        </li>
                    </ul>
                </Col>
                <Col lg={3} xs={12} className='d-flex align-items-center flex-column mb-3'>
                    <h6>Hours of Services</h6>
                    <ul>
                        <li>
                            <a>Monday - Friday</a>
                        </li>
                        <li>
                            <a>9:00 am - 5:00 pm</a>
                        </li>
                    </ul>
                </Col>
                <Col lg={3} xs={12} className='d-flex align-items-center flex-column mb-4 pb-1 order-lg-first'>
                    <a className={`${styles.logo}`} href='/'>
                        <Image src='/key2success-logo-full-wht.svg' alt="Key 2 Success Driving School Logo" fill={true} style={{objectFit: 'contain'}} />
                    </a>
                </Col>
            </Row>
            <Row className='text-center'>
                <Col xs={12}>
                    <p className='mb-lg-0'>© 2023 Key2Success Driving School. All Rights Reserved</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer;