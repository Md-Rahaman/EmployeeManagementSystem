import { Container, Nav, Navbar } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {
    return (<>
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="/"><h4> <FontAwesomeIcon icon={faUsers} />Employee Management System</h4></Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/department">Department</Nav.Link>
                    <Nav.Link href="/employee">Employee</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </>)
}

export default Navigation;