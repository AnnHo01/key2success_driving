'use client';

//Import plugins
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';

// Import components
// Import media
// Import styles
import styles from '../scss/main.module.scss';

export default function Home() {
  return (
    <>
      <header className='bg-img position-relative' style={{backgroundImage: 'url("/cover-1.png")'}}>
        <div className='overlay dark d-flex align-items-end'>
          <Container>
              <Row>
                  <Col className='pb-5'>
                      <h1>Unlock Your Path<br />to Success</h1>
                      <p className='mb-4'>Apply now to accelerate your driving journey with Key2Success Driving School!</p>
                      <Link href="/contact" className='call_btn'>
                          {/* <div> */}
                            <span>Sign Up Today!</span>
                          {/* </div> */}
                      </Link>
                  </Col>
              </Row>
          </Container>
        </div>
      </header>
      <main>
        <section>
          <Container>
            <Row>
              <Col className='text-center'>
                <h3>Your Journey to Safe and Confidents Driving<br />Starts Here</h3>
              </Col>
            </Row>
            <Row>
              <Col xs={12} lg={6} className='mt-3 mt-lg-4 pt-lg-2'>
                <div className='cont-box'>
                  <div className='icn-box'>
                    <Image src="/icon/expert-icn.svg" fill={true} style={{objectFit: 'contain'}} alt="Expert Instructors" />
                  </div>
                  <div className='info-box'>
                    <h4>Expert Instructors</h4>
                    <p>Learn from highly experienced instructors with a combined 34 years of teaching expertise. Benefit from their vast knowledge and personalized guidance.</p>
                  </div>
                </div>
              </Col>
              <Col xs={12} lg={6} className='mt-4 pt-2'>
                <div className='cont-box flex-row-reverse flex-lg-row'>
                  <div className='icn-box'>
                    <Image src="/icon/roadmap-icn.svg" fill={true} style={{objectFit: 'contain'}} alt="Comprehensive Curriculum" />
                  </div>
                  <div className='info-box'>
                    <h4>Comprehensive Curriculum</h4>
                    <p>Our structured curriculum covers everything from foundational skills to advanced techniques. Get well-rounded training that prepares you for real-world driving challenges.</p>
                  </div>
                </div>
              </Col>
              <Col xs={12} lg={6} className='mt-4 pt-2'>
                <div className='cont-box flex-lg-row-reverse '>
                  <div className='icn-box'>
                    <Image src="/icon/shield-icn.svg" fill={true} style={{objectFit: 'contain'}} alt="Expert Instructors" />
                  </div>
                  <div className='info-box'>
                    <h4>Safety-Centric Approach</h4>
                    <p>Your safety is our top priority. Gain defensive driving skills and road awareness that help you navigate confidently and responsibly.</p>
                  </div>
                </div>
              </Col>
              <Col xs={12} lg={6} className='mt-4 pt-2'>
                <div className='cont-box flex-row-reverse'>
                  <div className='icn-box'>
                    <Image src="/icon/handshake-icn.svg" fill={true} style={{objectFit: 'contain'}} alt="Expert Instructors" />
                  </div>
                  <div className='info-box'>
                    <h4>Personalized Guidance</h4>
                    <p>Received one-on-one attention and personalized instruction that caters to your learning style, ensuring comfortable and efficient learning experience.</p>
                  </div>
                </div>
              </Col>
              <Col xs={12} lg={6} className='mt-4 pt-2'>
                <div className='cont-box'>
                  <div className='icn-box'>
                    <Image src="/icon/cap-wheel-icn.svg" fill={true} style={{objectFit: 'contain'}} alt="Expert Instructors" />
                  </div>
                  <div className='info-box'>
                    <h4>Proven Success Stories</h4>
                    <p>Join the ranks of our successful graduates who have become confident drivers after completing our program. Your success is our achievement.</p>
                  </div>
                </div>
              </Col>
              <Col xs={12} lg={6} className='mt-4 pt-2'>
                <div className='cont-box flex-row-reverse flex-lg-row'>
                  <div className='icn-box'>
                    <Image src="/icon/sched-icn.svg" fill={true} style={{objectFit: 'contain'}} alt="Expert Instructors" />
                  </div>
                  <div className='info-box'>
                    <h4>Convenient Scheduling</h4>
                    <p>Enjoy flexible scheduling options that fit your routine. We make it easy to learn at your own pace and convenience.</p>
                  </div>
                </div>
              </Col>
              <Col xs={12} className='mt-4 pt-2 text-center'>
                <Link href="/contact" className='call_btn'>
                    {/* <div> */}
                      <span>Contact Now</span>
                    {/* </div> */}
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
        <section className='d-flex justify-content-center pt-0'>
          <div className='divider-hor'>
          </div>
        </section>
        <section className='bg-yel text-center'>
          <Container>
            <Row>
              <Col className='mb-3'>
                <h2>Services</h2>
              </Col>
            </Row>
            <Row className='d-flex justify-content-center'>
              <Col xs={8} lg={4} className='mb-3 g-0 g-lg-3'>
                <div className={`${styles.course}`}>
                  <p className={`${styles.price}`}>$60</p>
                  <h4>1 Hour Lesson</h4>
                  <p>Free pickup and dropoff to student designated location.</p>
                </div>
              </Col>
              <Col xs={8} lg={4} className='mb-3 g-0 g-lg-3'>
                <div className={`${styles.course}`}>
                  <p className={`${styles.price}`}>$80</p>
                  <h4>1.5 Hour Lesson</h4>
                  <p>Free pickup and dropoff to student designated location.</p>
                </div>
              </Col>
              <Col xs={8} lg={4} className='mb-3 g-0 g-lg-3'>
                <div className={`${styles.course}`}>
                  <p className={`${styles.price}`}>$100</p>
                  <h4>Road Test Package</h4>
                  <p>Inlcudes an hour practice before the road test and the use of vehicle for the road test.</p>
                </div>
              </Col>
            </Row>
            <Row className='d-flex justify-content-center'>
              <Col xs={8} lg={4} className='mb-3 g-0 g-lg-3'>
                <div className={`${styles.course}`}>
                  <p className={`${styles.price}`}>$275</p>
                  <h4>5 Lessons Package (1 hr)</h4>
                  <p>Inlcudes 5 lessons, each 1 hour long.</p>
                </div>
              </Col>
              <Col xs={8} lg={4} className='mb-3 g-0 g-lg-3'>
                <div className={`${styles.course}`}>
                  <p className={`${styles.price}`}>$375</p>
                  <h4>5 Lessons Package (1.5 hrs)</h4>
                  <p>Inlcudes 5 lessons, each 1.5 hours long.</p>
                </div>
              </Col>
              <Col xs={12} lg={8} className='text-start py-2 py-lg-0'>
                <p>* Pricing is different for those who live far away from South West of Winnipeg</p>
              </Col>
            </Row>
          </Container>
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
                <Link href="/review" className='call_btn' >
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
        <section className='d-flex justify-content-center pt-0'>
          <div className='divider-hor'>
          </div>
        </section>
        <section className='bg-yel'>
          <Container>
            <Row className='d-flex justify-content-center text-center'>
              <Col xs={12} className='mb-4'>
                <h2>Give us a Call</h2>
              </Col>
              <Col xs={12} className='mb-4'>
                <p>Take the First Step Towards Driving Independence. Call Now to Book Your Lesson!</p>
              </Col>
              <Col xs={12}>
                <Link href="tel:2049992051" className='call_btn'>
                  Call Now
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  )
}
