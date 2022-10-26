import '../Hard/HardSkills.css';

function HardSkills(props) {
    return (
        <div>
            <div className="container">
                <div className="details">
                    <div className="detailsTech">
                        <h2 className="detailsTechTitle">
                            Tools, Languages & Frameworks/Libraries
                        </h2>
                        <div className="detailsTechContainer">
                            <div className="mt-5 row">
                                <div className="col">
                                    <div className="techCard">
                                        <img
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                                            alt="REACT"
                                        />
                                        <h6 className="mt-2">REACT</h6>
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
                                            style={{ backgroundColor: '#FFF' }}
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

export default HardSkills;
