import '../../styles/About.css';
import Introduction from '../../components/Introduction';
import Skills from '../../components/Skills';
import Experiences from '../../components/Experiences';

function About() {
    return (
        <div>
            <Introduction />
            <Experiences />
            <Skills />
        </div>
    );
}

export default About;
