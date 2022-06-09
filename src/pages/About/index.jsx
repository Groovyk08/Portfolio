import '../../styles/About.css';
import Introduction from '../../components/Introduction';
import Experiences from '../../components/Experiences';
import HardSkills from '../../components/Skills/Hard';

function About() {
    return (
        <div>
            <Introduction />
            <Experiences />
            <HardSkills />
        </div>
    );
}

export default About;
