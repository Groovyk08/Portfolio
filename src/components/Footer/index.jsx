import '../Footer/Footer.css';
// import React, { useEffect, useState } from 'react';
import {
    Col,
    Row,
    Spinner,
    OverlayTrigger,
    Tooltip,
    Stack,
} from 'react-bootstrap';

import { FaGithub, FaMedium, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    //const [visits, setVisits] = useState(0);
    // const { isLoading, error, sendRequest } = useHttpClient();

    return (
        <div>
            <footer>
                <Row>
                    <span className="divider"></span>
                    <Col sm>
                        <h1>Let's Connect</h1>
                    </Col>
                    <Col className="p-2" col-sm>
                        <Link to="/profiles/github">
                            <FaGithub className="socialIcon" />
                        </Link>
                        <Link to="/profiles/medium">
                            <FaMedium className="socialIcon" />
                        </Link>
                        <Link to="/profiles/linkedin">
                            <FaLinkedin className="socialIcon" />
                        </Link>
                    </Col>
                </Row>
                <Row className="extras"></Row>
            </footer>
        </div>
    );
};

export default Footer;
