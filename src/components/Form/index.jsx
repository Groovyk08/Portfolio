import '../Form/Form.css';
import { Form, Button } from 'react-bootstrap';

// Form's function for the contact page
function FormContact(props) {
    return (
        <div className="container">
            <h1>Open for opportunities ?</h1>
            <p>Please, feel free to contact me with filling the form below</p>
            <Form className="contactForm">
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Full Name" />
                </Form.Group>
                <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                >
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Message"
                    />
                </Form.Group>
                <Button type="submit" className="btn-success">
                    Send Message
                </Button>
            </Form>
        </div>
    );
}

export default FormContact;
