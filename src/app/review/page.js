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
    <Header page={'review'} />
    <header className='bg-img position-relative' style={{backgroundImage: 'url("/cover-review.png")'}}>
        <div className='overlay dark d-flex align-items-end align-items-lg-center'>
          <Container>
              <Row>
                  <Col className='mb-3 headline'>
                      <h1>Your Feedback Matters</h1>
                      <p className='mb-4'>Share Your Driving Journey: Write a Review for Key2Success Driving School</p>
                  </Col>
              </Row>
          </Container>
        </div>
      </header>
      <main>
        <section className='d-flex justify-content-center flex-column align-items-center'>
          <div className='d-flex mb-1'>
            <div className='star-icn'>
              <Image src="/icon/star-icn.svg" alt="Star Icon" fill={true} />
            </div>
            <div className='star-icn'>
              <Image src="/icon/star-icn.svg" alt="Star Icon" fill={true} />
            </div>
            <div className='star-icn'>
              <Image src="/icon/star-icn.svg" alt="Star Icon" fill={true} />
            </div>
            <div className='star-icn'>
              <Image src="/icon/star-icn.svg" alt="Star Icon" fill={true} />
            </div>
            <div className='star-icn'>
              <Image src="/icon/star-icn.svg" alt="Star Icon" fill={true} />
            </div>
          </div>
          <div className='divider-hor'>
          </div>
        </section>
        <section className='pt-0'>
          <Container className='text-center'>
              <Row>
                <Col>
                  <h2>Share Your Experience</h2>
                </Col>
              </Row>
            </Container>
        </section>
        <section className='bg-yel text-center'>
          <form className={`${styles.exp_form}`} name="exp_form" method="POST" action='/thanks' netlify>
            <input type="hidden" name="form-name" value="exp_form" />
            <Container>
              <Row className='d-flex justify-content-center' style={{gap: '40px'}}>
                <Col xs={12} lg={8}>
                  <label htmlFor='fname'>Name*</label>
                  <input type='text' id='fname' name='fname' placeholder='Type Your Name' required />
                </Col>
                <Col xs={12} lg={8}>
                  <label htmlFor='email'>Email</label>
                  <input type='email' id='email' name='email' placeholder='Type Your Email'/>
                </Col>
                <Col xs={12} lg={8}>
                  <label htmlFor='pnum'>Phone Number</label>
                  <input type='number' id='pnum' name='pnum' placeholder='Type Your Phone' />
                </Col>
                <Col xs={12} lg={8}>
                  <label htmlFor='experience'>Your Experience</label>
                  <textarea id='experience' name='experience' rows={4} placeholder='Tell Us What You Think'></textarea>
                </Col>
                <Col xs={12} lg={8} className='d-flex justify-content-center'>
                  <button type="submit" className='call_btn'>Send Feedback</button>
                </Col>
              </Row>
            </Container>
          </form>
        </section>
        <section className='d-flex justify-content-center pb-0'>
          <div className='divider-ver'>
          </div>
        </section>
        <section className='text-center' id='stories'>
          <Container>
            <Row>
              <Col className='mb-4 pb-lg-5'>
                <h2>Success Stories</h2>
              </Col>
            </Row>
            <Row>
              <Col xs={6} lg={4} className='mb-3 mb-lg-4'>
                <div className={`${styles.story_img}`}>
                  <Image fill='true' src='/stories/success-story-1.jpg' alt='Success Drivers' />
                </div>
              </Col>
              <Col xs={6} lg={4} className='mb-3 mb-lg-4'>
                <div className={`${styles.story_img}`}>
                  <Image fill='true' src='/stories/success-story-2.jpg' alt='Success Drivers' />
                </div>
              </Col>
              <Col xs={6} lg={4} className='mb-3 mb-lg-4'>
                <div className={`${styles.story_img}`}>
                  <Image fill='true' src='/stories/success-story-3.jpg' alt='Success Drivers' />
                </div>
              </Col>
              <Col xs={6} lg={4} className='mb-3 mb-lg-4'>
                <div className={`${styles.story_img}`}>
                  <Image fill='true' src='/stories/success-story-4.jpg' alt='Success Drivers' />
                </div>
              </Col>
              <Col xs={6} lg={4} className='mb-3 mb-lg-4'>
                <div className={`${styles.story_img}`}>
                  <Image fill='true' src='/stories/success-story-5.jpg' alt='Success Drivers' />
                </div>
              </Col>
              <Col xs={6} lg={4} className='mb-3 mb-lg-4'>
                <div className={`${styles.story_img}`}>
                  <Image fill='true' src='/stories/success-story-6.jpg' alt='Success Drivers' />
                </div>
              </Col>
              <Col xs={6} lg={4} className='mb-3 mb-lg-4'>
                <div className={`${styles.story_img}`}>
                  <Image fill='true' src='/stories/success-story-7.jpg' alt='Success Drivers' />
                </div>
              </Col>
              <Col xs={6} lg={4} className='mb-3 mb-lg-4'>
                <div className={`${styles.story_img}`}>
                  <Image fill='true' src='/stories/success-story-8.jpg' alt='Success Drivers' />
                </div>
              </Col>
              <Col xs={6} lg={4} className='mb-3 mb-lg-4'>
                <div className={`${styles.story_img}`}>
                  <Image fill='true' src='/stories/success-story-9.jpg' alt='Success Drivers' />
                </div>
              </Col>
              <Col xs={6} lg={4} className='mb-3 mb-lg-4'>
                <div className={`${styles.story_img}`}>
                  <Image fill='true' src='/stories/success-story-10.jpg' alt='Success Drivers' />
                </div>
              </Col>
              <Col xs={6} lg={4} className='mb-3 mb-lg-4'>
                <div className={`${styles.story_img}`}>
                  <Image fill='true' src='/stories/success-story-11.jpg' alt='Success Drivers' />
                </div>
              </Col>
              <Col xs={6} lg={4} className='mb-3 mb-lg-4'>
                <div className={`${styles.story_img}`}>
                  <Image fill='true' src='/stories/success-story-12.jpg' alt='Success Drivers' />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
                <section>
                    <form name="approved_form" method="POST" netlify>
                        <input type="hidden" name="form-name" value="approved_form" />
                        <Container>
                        <Row className='d-flex justify-content-center' style={{gap: '40px'}}>
                            <Col xs={12} lg={8}>
                            <label htmlFor='fname'>Name*</label>
                            <input type='text' id='afname' name='afname' placeholder='Type Your Name'  required />
                            </Col>
                            <Col xs={12} lg={8}>
                            <label htmlFor='aemail'>Email</label>
                            <input type='email' id='aemail' name='aemail' placeholder='Type Your Email' />
                            </Col>
                            <Col xs={12} lg={8}>
                            <label htmlFor='apnum'>Phone Number</label>
                            <input type='number' id='apnum' name='apnum' placeholder='Type Your Phone' />
                            </Col>
                            <Col xs={12} lg={8}>
                            <label htmlFor='aexperience'>Your Experience</label>
                            <textarea id='aexperience' name='aexperience' rows={4} placeholder='Tell Us What You Think' ></textarea>
                            </Col>
                            <Col xs={12} lg={8} className='d-flex justify-content-center'>
                            <button type="submit" className='call_btn'>Send Feedback</button>
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