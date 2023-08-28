'use client';

//Import plugins
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
//Import Components
import { deleteSubmission, getSubmission } from "../components/fetchContext";
import Header from "../components/nav";

function Home() {
    const [submission , setSubmisison] = useState();
    const search = useSearchParams();
    const submissionID = search.get('submissionID');
    const method = search.get('method');

    const handleSubmit = (event) => {
        event.preventDefault();
      
        const myForm = event.target;
        const formData = new FormData(myForm);
      
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString(),
        })
          .then(() => navigate("/thanks"))
          .catch((error) => alert(error));
    };

    useEffect(() => {
        const myAsync = async() => {
            if(method === 'approve'){
                await getSubmission(submissionID).then((response) => response.json()).then((data) => {
                    console.log(data.data);
                    setSubmisison(data.data);
                })
                // setTimeout(handleSubmit, 1500);
            } else {
                // await deleteSubmission(submissionID);
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
                <section style={{height: 0, overflow: 'hidden', padding: 0}}>
                    <form name="approved_form" method="POST" netlify>
                        <input type="hidden" name="form-name" value="approved_form" />
                        <Container>
                        <Row className='d-flex justify-content-center' style={{gap: '40px'}}>
                            <Col xs={12} lg={8}>
                            <label htmlFor='fname'>Name*</label>
                            <input type='text' id='fname' name='fname' placeholder='Type Your Name' defaultValue={submission != undefined && submission.fname} required />
                            </Col>
                            <Col xs={12} lg={8}>
                            <label htmlFor='email'>Email</label>
                            <input type='email' id='email' name='email' placeholder='Type Your Email' defaultValue={submission != undefined && submission.email} />
                            </Col>
                            <Col xs={12} lg={8}>
                            <label htmlFor='pnum'>Phone Number</label>
                            <input type='number' id='pnum' name='pnum' placeholder='Type Your Phone' defaultValue={submission != undefined && submission.pnum} />
                            </Col>
                            <Col xs={12} lg={8}>
                            <label htmlFor='fname'>Your Experience</label>
                            <textarea id='experience' name='experience' rows={4} placeholder='Tell Us What You Think' defaultValue={submission != undefined && submission.experience}></textarea>
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