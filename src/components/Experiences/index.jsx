import expleo from '../../assets/expleo.png';
import '../Experiences/Experiences.css';

function Experiences(props) {
    return (
        <div>
            <div className="container">
                <div className="experience">
                    <h2>Experience</h2>
                    <div className="experienceContent">
                        <div className="experienceItem">
                            <div className="hstack gap-5">
                                <div className="imgItem">
                                    <img src={expleo} alt="EXPLEO FRANCE" />
                                </div>
                                <div className="experienceDetails">
                                    <h3> Expleo Group for Renault</h3>
                                    <h5>Automotive Test Technician</h5>
                                    <span className="type">
                                        <span className="status"></span>
                                        Full time
                                    </span>
                                    <p>July 2019 - August 2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experiences;
