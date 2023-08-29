'use client';

//Import plugins
import { useSearchParams } from "next/navigation";
import { Container, Row, Col } from 'react-bootstrap';
//Import Components
import Header from "../../components/nav";

function Home() {
    const search = useSearchParams();
    const { method } = search.get('method');
    
    return (
        <>
            <Header page={'contact'} />
            <header className='bg-img contact position-relative' style={{backgroundImage: 'url("/cover-contact.png")', height: '80vh'}}>
                <div className='overlay dark d-flex align-items-end align-items-lg-center'>
                <Container>
                    <Row>
                        <Col className='mb-3 mb-lg-0 headline'>
                            <h1 className="text-capitalize">Your {method} was success!</h1>
                        </Col>
                    </Row>
                </Container>
                </div>
            </header>
        </>
    );
}

export default Home;