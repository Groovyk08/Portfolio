import { Link } from 'react-router-dom';
import '../../styles/About.css';

function About() {
    return (
        <div>
            <div className="container">
                <h1>About Me page </h1>
                <p> Hi there ! Thank you for visiting my portfolio.</p>
                <p>
                    I'm Ludovic Kitoko, a Frontend Developper, in 2021, I had
                    the opportunity to start a nine month formation as a Web
                    Application Developper. I've always be passionnate by new
                    technologies and I saw this formation as a good challenge
                    and opportunity for me to fully express my creativity.
                    Today, I'm looking for an opportunity to start working as a
                    Front Developper Junior. I'm a self-motivating and because
                    of my background, I have developed an ability to adapt, a
                    curiosity and an autonomy and I think that these assets are
                    essential to evolve in any environment.
                </p>
                <div className="social">
                    <h6>Follow Me on</h6>
                    <Link to="/https://medium.com/@ludovickitokoEdit">
                        Medium
                    </Link>
                    <Link to="/https://github.com/Groovyk08">GitHub</Link>
                </div>
            </div>
            <div className="container">
                <h2>EXPERIENCES</h2>
                <div className="experienceContent">
                    <div className="experienceItem">
                        <div className="hstack gap-5">
                            <div className="imgItem">
                                <img src="" alt="EXPLEO FRANCE" />
                            </div>
                            <div className="experienceDetails">
                                <h5> EXPLEO FRANCE FOR RENAULT</h5>
                                <h3>Technicien d'essais</h3>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
