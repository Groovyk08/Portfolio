import '../Form/Form.css';
import { Form, Button } from 'react-bootstrap';

// Form's function for the contact page
function FormContact(props) {
    return (
        <div className="containerForm">
            <h1>Get in touch</h1>
            <p>Please, feel free to contact me with filling the form below</p>
            <Form className="contactForm">
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your full name"
                    />
                </Form.Group>
                <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                >
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder=" Enter your message"
                    />
                </Form.Group>
                <Button type="submit" className="btn-success">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default FormContact;
