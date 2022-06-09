import { Link } from 'react-router-dom';
import { FaGithub, FaMedium, FaLinkedin } from 'react-icons/fa';
import profilePic from '../../assets/profilePic.jpeg';
import '../Introduction/Introduction.css';

function Introduction() {
    return (
        <div>
            <div className="container">
                <div className="introduction">
                    <div className="row">
                        <div className="col-sm">
                            <div className="introductionImg">
                                <img src={profilePic} alt="PictureProfile" />
                            </div>
                        </div>
                        <div className="introduction__short mt-4 col-sm">
                            <div>
                                <h1>Ludovic Kitoko</h1>
                                <p>Web Developper Junior</p>
                            </div>
                            <div>
                                <h6>Email Me</h6>
                                <Link to="mailto:kitokoludovic@gmail.com">
                                    <span className="emailContact">
                                        kitokoludovic@gmail.com
                                    </span>
                                </Link>
                            </div>
                            <div className="introductionLinks"></div>
                            <div className="social">
                                <h6>Follow Me on</h6>
                                <div>
                                    <Link to="/https://medium.com/@ludovickitokoEdit">
                                        <FaMedium className="socialIcon" />
                                    </Link>
                                    <Link to="/https://github.com/Groovyk08">
                                        <FaGithub className="socialIcon" />
                                    </Link>
                                    <Link to="https://www.linkedin.com/in/ludovic-kitoko/">
                                        <FaLinkedin className="socialIcon" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="introductionBrief">
                        <p> Hi there ! Thank you for visiting my portfolio.</p>
                        <p>
                            I'm Ludovic Kitoko, a Frontend Developper, in 2021,
                            I had the opportunity to start a nine month
                            formation as a Web Application Developper. I've
                            always be passionnate by new technologies and I saw
                            this formation as a good challenge and opportunity
                            for me to fully express my creativity. Today, I'm
                            looking for an opportunity to start working as a
                            Front Developper Junior. I'm a self-motivating and
                            because of my background, I have developed an
                            ability to adapt, a curiosity and an autonomy and I
                            think that these assets are essential to evolve in
                            any environment.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;
