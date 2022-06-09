import expleo from '../../assets/expleo.png';
import '../Experiences/Experiences.css';

function Experiences() {
    return (
        <div>
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
        </div>
    );
}

export default Experiences;
