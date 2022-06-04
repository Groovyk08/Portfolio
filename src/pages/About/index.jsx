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
                    Application Developper with OpenClassrooms. I've always be
                    passionnate by new technologies and I saw this formation as
                    a good challenge and opportunity for me to fully express my
                    creativity. Today, I'm looking for an opportunity to start
                    working as a Front Developper Junior. I'm a self-motivating
                    and because of my background, I have developed an ability to
                    adapt, a curiosity and an autonomy and I think that these
                    assets are essential to evolve in any environment.
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
                <div className="details">
                    <div className="details_tech">
                        <h6>Tools,Languages & Frameworks/Librairies</h6>
                        <div className="details_tech_container">
                            <div className="mt-5 row"></div>
                            <div className="col">
                                <div className="techCard">
                                    <img
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                                        alt="REACT JS"
                                    />
                                    <h6>REACT JS</h6>
                                </div>
                            </div>
                            <div className="col"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
