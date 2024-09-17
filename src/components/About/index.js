import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDocker, faGitAlt, faJsSquare, faNodeJs, faReact, faRust } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    
        return () => clearTimeout(timer);  // Proper cleanup
    }, []);

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                        idx={15}
                    />
                </h1>
                <p>Hi, I'm Himanshu Saraswat, currently pursuing a B.Tech in Computer Science and Engineering at the Indian Institute of Information Technology, Sri City.</p>
                <p>I'm passionate about coding and technology, always exploring innovative ways to solve problems. Alongside my love for coding, I'm deeply spiritual and believe in the power of mindfulness in everyday life. I also have a passion for travel, which allows me to connect with new experiences and perspectives.</p>
                <p>Balancing technology with spirituality and exploration defines who I am, both personally and professionally.</p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faReact} color= '#5ED4F4'/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faGitAlt} color= '#EC4D28'/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faJsSquare} color= '#EFD81D'/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faRust} color= '#DEA584'/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faNodeJs} color= '#43853D'/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faDocker} color= '#2496ED'/>
                    </div>
                </div>
            </div> 
        </div>
        <Loader type="pacman"/>
        </>
    ) 
}

export default About