import { Link } from 'react-router-dom';
import { FaGithub, FaMedium, FaLinkedin } from 'react-icons/fa';
import expleo from '../../assets/expleo.png';
import '../../styles/About.css';

function About() {
    return (
        <div>
            <div className="container">
                <div className="introduction">
                    <div className="row">
                        <div className="col-sm">
                            <div className="introductionImg">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg"
                                    alt="PictureProfile"
                                />
                            </div>
                        </div>
                        <div className="introduction__short mt-4 col-sm">
                            <div>
                                <h1>Ludovic Kitoko</h1>
                                <p>Web Developper Junior</p>
                            </div>
                            <div>
                                <h6>Mail Me</h6>
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
            <div className="container">
                <h2>EXPERIENCES</h2>
                <div className="experienceContent">
                    <div className="experienceItem">
                        <div className="hstack gap-5">
                            <div className="imgItem">
                                <img src={expleo} alt="EXPLEO FRANCE" />
                            </div>
                            <div className="experienceDetails">
                                <h2> Expleo Group for Renault</h2>
                                <h5>Automotive Test Technician</h5>
                                <span className="type">
                                    <span className="status"></span>
                                    Full time
                                </span>
                                <p> July 2019 - Present </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="details">
                    <div className="detailsTech">
                        <h2 className="detailsTechTitle">
                            Tools,Languages & Frameworks/Librairies
                        </h2>
                        <div className="detailsTechContainer">
                            <div className="mt-5 row">
                                <div className="col">
                                    <div className="techCard">
                                        <img
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                                            alt="REACT JS"
                                        />
                                        <h6 className="mt-2">REACT JS</h6>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="techCard">
                                        <img
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                                            alt="HTML"
                                        />
                                        <h6 className="mt-2">HTML</h6>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="techCard">
                                        <img
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                                            alt="CSS"
                                        />
                                        <h6 className="mt-2">CSS</h6>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="techCard">
                                        <img
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                                            alt="BOOTSTRAP"
                                        />
                                        <h6 className="mt-2">BOOTSTRAP</h6>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="techCard">
                                        <img
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                                            alt="JAVASCRIPT"
                                        />
                                        <h6 className="mt-2">JAVASCRIPT</h6>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="techCard">
                                        <img
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                            alt="GITHUB"
                                        />
                                        <h6 className="mt-2">GITHUB</h6>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="techCard">
                                        <img
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                                            alt="GIT"
                                        />
                                        <h6 className="mt-2">GIT</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
