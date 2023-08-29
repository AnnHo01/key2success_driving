'use client';

//Import plugins
import { redirect, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
//Import Components
import { approveReview, deleteSubmission, getSubmission } from "../components/fetchContext";
import Header from "../components/nav";

function Home() {
    const search = useSearchParams();
    const submissionID = search.get('submissionID');
    const method = search.get('method');

    useEffect(() => {
        const myAsync = async() => {
            if(method === 'approve'){
                await approveReview(submissionID);
                // await getSubmission(submissionID).then((response) => response.json()).then((data) => {
                //     console.log(data.data);
                // })

                setTimeout(() => {
                    redirect('/reviewHandler/success?method=approval');
                }, 100)
            } else {
                await deleteSubmission(submissionID);

                setTimeout(() => {
                    redirect('/reviewHandler/success?method=deletion');
                }, 100)
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
        </>
    );
}

export default Home;