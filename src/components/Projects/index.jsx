import '../Projects/Projects.css';
import { Link } from 'react-router-dom';

// Component for showing my projects
function ShowProjects() {
    return (
        <div>
            <div className="projetsHeader">
                <h2> Here are my recents projects</h2>
            </div>
            <div className="container">
                <div className="row">
                    <div className="mt-5 col-md-6 col-sm-6">
                        <div className="projectCard">
                            <img
                                className="cardImg"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                alt="portfolio"
                            />
                            <div className="cardBody">
                                <div className="row">
                                    <div className="col">
                                        <h5>Portfolio project</h5>
                                    </div>
                                    <div className="col">
                                        <div className="techUsed">
                                            <img
                                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                                                alt="React"
                                            />
                                            <img
                                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                                                alt="Bootstrap"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cardFooter">
                                <div className="cardLink row">
                                    <div className="textCenter col">
                                        <Link to="/https://github.com/Groovyk08/Portfolio">
                                            Preview on GitHub
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 col-md-6 col-sm-6">
                        <div className="projectCard">
                            <img
                                className="cardImg"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                alt="portfolio"
                            />
                            <div className="cardBody">
                                <div className="row">
                                    <div className="col">
                                        <h5>Kasa project</h5>
                                    </div>
                                    <div className="col">
                                        <div className="techUsed">
                                            <img
                                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                                                alt="React"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cardFooter">
                                <div className="cardLink row">
                                    <div className="textCenter col">
                                        <Link to="https://github.com/Groovyk08/ReactApp_KASA">
                                            Preview on GitHub
                                        </Link>
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

export default ShowProjects;
