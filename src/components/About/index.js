import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact,} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                    ind={15}
                    />
                </h1>
                <p>
                    Passionate about continuous learning and data optimization, I thrive on acquiring knowledge and finding innovative ways to enhance data processing. With a deep curiosity and an analytical mindset, I constantly seek opportunities to expand my skill set and make a tangible impact on business operations.
                </p>
                <p>
                Throughout my career, I have embraced the philosophy of lifelong learning, recognizing that the world of data is ever-evolving. Whether it's staying up-to-date with the latest industry trends, attending workshops and conferences, or exploring online courses, I am committed to keeping my knowledge and skills relevant in this rapidly changing landscape.
                </p>
                <p>
                My fascination with data extends beyond mere acquisition, as I am particularly drawn to the challenge of streamlining and optimizing data processing. I thoroughly enjoy digging into complex datasets, identifying patterns, and developing efficient methodologies to extract valuable insights. Through the utilization of advanced analytics techniques, automation, and machine learning algorithms, I strive to transform raw data into actionable information that drives informed decision-making.
                </p>
                <p>
                Collaboration is at the heart of my approach. I believe that the best solutions are born out of diverse perspectives and collective expertise. I actively seek opportunities to collaborate with cross-functional teams, leveraging their unique insights and working together to overcome challenges and uncover opportunities for improvement.
                </p>
                <p>
                In addition to my technical expertise in data processing and analysis, I possess strong communication and storytelling skills. I can effectively translate complex data findings into meaningful narratives that resonate with stakeholders at all levels of the organization. By bridging the gap between technical details and business objectives, I empower decision-makers to make data-driven choices confidently.
                </p>
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About