import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => clearTimeout(timer);  // Proper cleanup
    }, []);

    return (
        <>
            <div className='container portfolio-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={["Skill", ' ', "&", ' ', "Experience"]}
                            idx={15}
                        />
                    </h1>
                    <p>I specialize in <b>Data Structures & Algorithms</b>, <b>Competitive Programming</b>, and <b>Full Stack Development</b>, with expertise in <b>React.js</b>, <b>Node.js</b>, and <b>JWT</b> for secure web applications.</p>
                    <p>I am skilled in <b>Python</b>, <b>C/C++</b>, <b>Java</b>, and <b>JavaScript</b>, and proficient with tools like <b>VS Code</b>, <b>Git</b>, <b>Docker</b>, and <b>MongoDB</b>. I have experience working in both <b>Windows</b> and <b>Linux</b> environments and am comfortable with <b>SQL</b> for database management.</p>
                    <p>Additionally, I have developed leadership skills through various projects and team roles.</p>
                    <p><a href="https://drive.google.com/file/d/1ti0nHfsiXs-ugi7ZDOBoqE6tHEVHgHVl/view?usp=sharing" target="_blank">View my resume</a></p>

                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Portfolio;