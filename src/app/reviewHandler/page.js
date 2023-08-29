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
            </main>
        </>
    );
}

export default Home;