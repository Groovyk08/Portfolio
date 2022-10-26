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
                        <div className="projectCard bg-dark">
                            <img
                                className="cardImg"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                alt="portfolio"
                            />
                            <div className="cardBody">
                                <div className="row">
                                    <div className="col">
                                        <h5>Portfolio</h5>
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
                                        <Link to="https://groovyk08.github.io/Portfolio/">
                                            Preview on GitHub
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-5 col-md-6 col-sm-6">
                        <div className="projectCard bg-dark">
                            <img
                                className="cardImg"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                alt="OhMyFood"
                            />
                            <div className="cardBody">
                                <div className="row">
                                    <div className="col">
                                        <h5>Oh My Food</h5>
                                    </div>
                                    <div className="col">
                                        <div className="techUsed">
                                            <img
                                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                                                alt="HTML"
                                            />
                                            <img
                                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                                                alt="CSS"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cardFooter">
                                <div className="cardLink row">
                                    <div className="textCenter col">
                                        <Link to="https://groovyk08.github.io/OhMyFood_MobileFirst/">
                                            Preview on GitHub
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-5 col-md-6 col-sm-6">
                        <div className="projectCard bg-dark">
                            <img
                                className="cardImg"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                alt="kasaProject"
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
                                        <Link to="https://groovyk08.github.io/ReactApp_KASA/">
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
