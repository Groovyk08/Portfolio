import '../../styles/Home.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { BsDownload } from 'react-icons/bs';
import SoftSkills from '../../components/Skills/Soft';
import profilePic from '../../assets/profilePic.jpeg';

function Home() {
    return (
        <div>
            <div className="container">
                <div className="introduction">
                    <div className="row">
                        <div className="introductionContent col-sm">
                            <h6>Hey!</h6>
                            <span>I'm Ludovic Kitoko</span>
                            <h2>Frontend Developper Junior</h2>
                            <p>I have a passion for technology.</p>
                            <div className="resume">
                                <Link to="/">
                                    <Button variant="danger">Email Me</Button>
                                </Link>
                                <Link to="/">
                                    <Button variant="primary">
                                        <span>{BsDownload}</span>
                                        Resume
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className=" col-sm">
                            <img
                                className="picture"
                                src={profilePic}
                                alt="Ludovic KITOKO"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container"></div>
            <SoftSkills />
        </div>
    );
}

export default Home;
