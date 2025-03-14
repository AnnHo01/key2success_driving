'use client';

//Import plugins
import React from 'react'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import { useRouter } from 'next/navigation';

// Import components
// Import media
// Import styles
import styles from '../../scss/main.module.scss';
import Header from '../components/nav';

function Home() {
  const router = useRouter();

  async function handleSubmit(e){
    e.preventDefault();
    const submitBtn = document.querySelector('.call_btn');
    submitBtn.disabled = true;
    document.body.style.cursor='wait';
    const form = e.target;
    const formData = new FormData(form);
    const response = await fetch('/__forms.html', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    });
    if (response.ok) {
      document.body.style.cursor='auto';
      router.push('/thanks?form=review');
    } else {
      document.body.style.cursor='auto';
      submitBtn.disabled = false;
      alert('An error occurred while submitting the form. Please try again later.');
    }
  }

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
          <form className={`${styles.exp_form}`} name="exp_form" method="POST" action='/thanks?form=review' onSubmit={handleSubmit} netlify="true">
            <input type="hidden" name="form-name" value="exp_form" />
            <input type="hidden" name="tag" value='review' />
            <Container>
              <Row className='d-flex justify-content-center' style={{gap: '40px'}}>
                <Col xs={12} lg={8}>
                  <label htmlFor='fname'>Name*</label>
                  <input type='text' id='fname' name='fname' placeholder='Type Your Name' required />
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
                  <label htmlFor='experience'>Your Experience</label>
                  <textarea id='experience' name='experience' rows={4} placeholder='Tell Us What You Think'></textarea>
                </Col>
                <Col xs={12} lg={8} className='d-flex justify-content-center'>
                  <button type="submit" className='call_btn' >Send Feedback</button>
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
              <Col xs={6} lg={4} className='mb-3 mb-lg-4'>
                <div className={`${styles.story_img}`}>
                  <Image fill='true' src='/stories/success-story-13.jpg' alt='Success Drivers' />
                </div>
              </Col>
              <Col xs={6} lg={4} className='mb-3 mb-lg-4'>
                <div className={`${styles.story_img}`}>
                  <Image fill='true' src='/stories/success-story-14.jpg' alt='Success Drivers' />
                </div>
              </Col>
              <Col xs={6} lg={4} className='mb-3 mb-lg-4'>
                <div className={`${styles.story_img}`}>
                  <Image fill='true' src='/stories/success-story-15.jpg' alt='Success Drivers' />
                </div>
              </Col>
              <Col xs={6} lg={4} className='mb-3 mb-lg-4'>
                <div className={`${styles.story_img}`}>
                  <Image fill='true' src='/stories/success-story-16.jpg' alt='Success Drivers' />
                </div>
              </Col>
              <Col xs={6} lg={4} className='mb-3 mb-lg-4'>
                <div className={`${styles.story_img}`}>
                  <Image fill='true' src='/stories/success-story-17.jpg' alt='Success Drivers' />
                </div>
              </Col>
              <Col xs={6} lg={4} className='mb-3 mb-lg-4'>
                <div className={`${styles.story_img}`}>
                  <Image fill='true' src='/stories/success-story-18.jpg' alt='Success Drivers' />
                </div>
              </Col>
              <Col xs={6} lg={4} className='mb-3 mb-lg-4'>
                <div className={`${styles.story_img}`}>
                  <Image fill='true' src='/stories/success-story-19.jpg' alt='Success Drivers' />
                </div>
              </Col>
              <Col xs={6} lg={4} className='mb-3 mb-lg-4'>
                <div className={`${styles.story_img}`}>
                  <Image fill='true' src='/stories/success-story-20.jpg' alt='Success Drivers' />
                </div>
              </Col>
              <Col xs={6} lg={4} className='mb-3 mb-lg-4'>
                <div className={`${styles.story_img}`}>
                  <Image fill='true' src='/stories/success-story-21.jpg' alt='Success Drivers' />
                </div>
              </Col>
              <Col xs={6} lg={4} className='mb-3 mb-lg-4'>
                <div className={`${styles.story_img}`}>
                  <Image fill='true' src='/stories/success-story-22.jpg' alt='Success Drivers' />
                </div>
              </Col>
              <Col xs={6} lg={4} className='mb-3 mb-lg-4'>
                <div className={`${styles.story_img}`}>
                  <Image fill='true' src='/stories/success-story-23.jpg' alt='Success Drivers' />
                </div>
              </Col>
              <Col xs={6} lg={4} className='mb-3 mb-lg-4'>
                <div className={`${styles.story_img}`}>
                  <Image fill='true' src='/stories/success-story-24.jpg' alt='Success Drivers' />
                </div>
              </Col>
              <Col xs={6} lg={4} className='mb-3 mb-lg-4'>
                <div className={`${styles.story_img}`}>
                  <Image fill='true' src='/stories/success-story-25.jpg' alt='Success Drivers' />
                </div>
              </Col>
              <Col xs={6} lg={4} className='mb-3 mb-lg-4'>
                <div className={`${styles.story_img}`}>
                  <Image fill='true' src='/stories/success-story-26.jpg' alt='Success Drivers' />
                </div>
              </Col>
              <Col xs={6} lg={4} className='mb-3 mb-lg-4'>
                <div className={`${styles.story_img}`}>
                  <Image fill='true' src='/stories/success-story-27.jpg' alt='Success Drivers' />
                </div>
              </Col>
              <Col xs={6} lg={4} className='mb-3 mb-lg-4'>
                <div className={`${styles.story_img}`}>
                  <Image fill='true' src='/stories/success-story-28.jpg' alt='Success Drivers' />
                </div>
              </Col>
              <Col xs={6} lg={4} className='mb-3 mb-lg-4'>
                <div className={`${styles.story_img}`}>
                  <Image fill='true' src='/stories/success-story-29.jpg' alt='Success Drivers' />
                </div>
              </Col>
              <Col xs={6} lg={4} className='mb-3 mb-lg-4'>
                <div className={`${styles.story_img}`}>
                  <Image fill='true' src='/stories/success-story-30.jpg' alt='Success Drivers' />
                </div>
              </Col>
              <Col xs={6} lg={4} className='mb-3 mb-lg-4'>
                <div className={`${styles.story_img}`}>
                  <Image fill='true' src='/stories/success-story-31.jpg' alt='Success Drivers' />
                </div>
              </Col>
              <Col xs={6} lg={4} className='mb-3 mb-lg-4'>
                <div className={`${styles.story_img}`}>
                  <Image fill='true' src='/stories/success-story-32.jpg' alt='Success Drivers' />
                </div>
              </Col>
              <Col xs={6} lg={4} className='mb-3 mb-lg-4'>
                <div className={`${styles.story_img}`}>
                  <Image fill='true' src='/stories/success-story-33.jpg' alt='Success Drivers' />
                </div>
              </Col>
              <Col xs={6} lg={4} className='mb-3 mb-lg-4'>
                <div className={`${styles.story_img}`}>
                  <Image fill='true' src='/stories/success-story-34.jpg' alt='Success Drivers' />
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
