import "./App.css";
import {
    Navbar,
    Container,
    Nav,
    Button,
    Image,
    Jumbotron,
    Row,
    Col,
} from "react-bootstrap";

function App() {
    return (
        <div className="App">
            <Navbar bg="light" expand="lg" sticky="top">
                <Navbar.Brand>
                    <Image
                        src="../images/austria_dark.png"
                        alt="project-access-logo"
                        width="100"
                    ></Image>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className="m-2" href="#who">
                            <h5>Who we are</h5>
                        </Nav.Link>
                        <Nav.Link className="m-2" href="#what">
                            <h5>What we do</h5>
                        </Nav.Link>
                        <Nav.Link className="m-2" href="#our-services">
                            <h5>Our services</h5>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Jumbotron className="m-0">
                <Container>
                    <h1>Begin your college journey with us!</h1>
                    <hr className="my-4"></hr>
                    <p>
                        Project Access is a nonprofit organisation that helps
                        socioeconomically disadvantaged students apply to
                        international top universities in the UK, US, and
                        Europe. The organisation is driven purely by volunteers
                        that study at the world’s leading Universities, such as
                        the University of Oxford, Harvard College or Yale
                        University.
                    </p>
                    <p>
                        <Button className="button">Apply here!</Button>
                    </p>
                </Container>
            </Jumbotron>
            <Container className="p-3" fluid>
                <Row>
                    <Col className="d-flex flex-column justify-content-center align-items-center border-right">
                        <h2>Already a student?</h2>
                        <Button className="m-4 button">Student Login</Button>
                    </Col>
                    <Col className="d-flex flex-column justify-content-center align-items-center">
                        <h2>Want to catch up?</h2>
                        <Button className="m-4 button">Mentor Login</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
