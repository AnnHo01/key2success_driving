'use client';

//Import plugins
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
//Import Components
import { approveReview, deleteSubmission, getSubmission } from "../components/fetchContext";
import Header from "../components/nav";

function Home() {
    const [submission , setSubmisison] = useState();
    const search = useSearchParams();
    const submissionID = search.get('submissionID');
    const method = search.get('method');

    useEffect(() => {
        const myAsync = async() => {
            if(method === 'approve'){
                await approveReview(submissionID);
                await getSubmission(submissionID).then((response) => response.json()).then((data) => {
                    console.log(data.data);
                    setSubmisison(data.data);
                })
                // setTimeout(handleSubmit, 1500);
            } else {
                await deleteSubmission(submissionID);
                console.log('reject');

            }
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
                            { method == 'approve' ? (
                                    <>
                                        <h1>We are processing your approval...</h1>
                                    </>
                                )
                                 : (
                                    <h1>We are deleting the submission with ID {submissionID}...</h1>
                                )
                            }
                        </Col>
                    </Row>
                </Container>
                </div>
            </header>
            <main>
                <section>
                    <form name="reapp_form" method="POST" action='/thanks' netlify>
                        <input type="hidden" name="form-name" value="reapp_form" />
                        <Container>
                        <Row className='d-flex justify-content-center' style={{gap: '40px'}}>
                            <Col xs={12} lg={8}>
                            <label htmlFor='afname'>Name*</label>
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
    );
}

export default Home;