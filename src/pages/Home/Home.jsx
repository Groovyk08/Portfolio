import '../../styles/Home.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { BsDownload } from 'react-icons/bs';

function Home() {
    return (
        <div>
            <div className="container">
                <div className="introduction">
                    <div className="row">
                        <div className="introductionContent col-sm">
                            <div>
                                <h6>Hey!</h6>
                                <span>I'm Ludovic Kitoko</span>
                                <h2>Web Developper Junior</h2>
                                <p>I have a passion for technology.</p>
                                <div className="resume">
                                    <Link to="/">
                                        <Button variant="danger">
                                            Email Me
                                        </Button>
                                    </Link>
                                    <Link to="/">
                                        <Button variant="primary">
                                            <span>{BsDownload}</span>
                                            Resume
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className=" col-sm">
                            <img
                                className="picture"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grunt/grunt-original.svg"
                                alt="Ludovic KITOKO"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container"></div>

            <div className="container">
                <h2> Why Hire Me ? </h2>
                <div className="row strengths">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="strengthsItem">
                            <div className="strengthsImg">
                                <img
                                    src="https://ik.imagekit.io/itsrakesh/Portfolio/communicative_9gtXcXgTB.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644134493404"
                                    alt="Communicative"
                                />
                            </div>
                            <div className="strengthsContent">
                                <h3>Communicative</h3>
                                <p>
                                    I balance talking and listening hence
                                    ensuring effective communication.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="strengthsItem">
                            <div className="strengthsImg">
                                <img
                                    src="https://ik.imagekit.io/itsrakesh/Portfolio/collaborative_-lWdw0PUM.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644134493423"
                                    alt="Collaborative"
                                />
                            </div>
                            <div className="strengthsContent">
                                <h3>Collaborative</h3>
                                <p>
                                    I balance talking and listening hence
                                    ensuring effective communication.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="strengthsItem">
                            <div className="strengthsImg">
                                <img
                                    src="https://ik.imagekit.io/itsrakesh/Portfolio/work-ethic_jaB_-v1Sr.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644134495355"
                                    alt="WorkEthic"
                                />
                            </div>
                            <div className="strengthsContent">
                                <h3>Work Ethic</h3>
                                <p>
                                    I balance talking and listening hence
                                    ensuring effective communication.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="strengthsItem">
                            <div className="strengthsImg">
                                <img
                                    src="https://ik.imagekit.io/itsrakesh/Portfolio/self-motivation_PLXNT-6da.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644134495068"
                                    alt="Self-Motivated"
                                />
                            </div>
                            <div className="strengthsContent">
                                <h3>Self-Motivated</h3>
                                <p>
                                    I balance talking and listening hence
                                    ensuring effective communication.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
