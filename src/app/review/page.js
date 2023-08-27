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

function Home() {
  return (
    <>
    <header className='bg-img position-relative' style={{backgroundImage: 'url("/cover-review.png")'}}>
        <div className='overlay dark d-flex align-items-end'>
          <Container>
              <Row>
                  <Col className='pb-3'>
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
          <Container>
            <Row>
              <Col>
                <h2>Share Your Experience</h2>
              </Col>
            </Row>
          </Container>
        </section>
        <section className='bg-yel text-center'>
          <form className={`${styles.exp_form}`} data-netlify="true" name="exp_form" method="POST" >
            <Container>
              <Row className='d-flex justify-content-center' style={{gap: '40px'}}>
                <Col xs={12} lg={8}>
                  <label for='fname'>Name</label>
                  <input type='text' id='fname' name='fname' placeholder='Type Your Name' />
                </Col>
                <Col xs={12} lg={8}>
                  <label for='email'>Email*</label>
                  <input type='email' id='email' name='email' placeholder='Type Your Email' required />
                </Col>
                <Col xs={12} lg={8}>
                  <label for='pnum'>Phone Number</label>
                  <input type='number' id='pnum' name='pnum' placeholder='Type Your Phone' />
                </Col>
                <Col xs={12} lg={8}>
                  <label for='fname'>Your Experience</label>
                  <textarea id='experience' name='experience' rows={4} placeholder='Tell Us What You Think'></textarea>
                </Col>
              </Row>
            </Container>
          </form>
        </section>
        <section className='d-flex justify-content-center pb-0'>
          <div className='divider-ver'>
          </div>
        </section>
        <section className='text-center'>
          <Container>
            <Row>
              <Col className='mb-4'>
                <h2>Real folks, real reviews</h2>
              </Col>
            </Row>
            <Row>
              <Col className='mb-5'>
                <Link href="/" className='call_btn' >
                  Write a review
                </Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className={`${styles.review_tbl}`}>
                  <div className={`${styles.star_lt}`}>
                    <Image src="/icon/star-lt-icn.svg" alt="Star Icon" fill={true} />
                  </div>
                  <div className={`${styles.cont}`}>
                    <Row>
                      <Col xs={3}>
                        <p>Name F</p>
                      </Col>
                      <Col xs={9} className='text-start'>
                        <p className='fw-lighter'>Reviews will be written here Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut est imperdiet, efficitur augue vel, </p>
                      </Col>
                    </Row>
                  </div>
                  <div className={`${styles.cont}`}>
                    <Row>
                      <Col xs={3}>
                        <p>Name F</p>
                      </Col>
                      <Col xs={9} className='text-start'>
                        <p className='fw-lighter'>Reviews will be written here Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut est imperdiet, efficitur augue vel, </p>
                      </Col>
                    </Row>
                  </div>
                  <div className={`${styles.star_rt}`}>
                    <Image src="/icon/star-rt-icn.svg" alt="Star Icon" fill={true} />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  )
}

export default Home;