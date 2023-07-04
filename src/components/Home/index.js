import { Link } from 'react-router-dom';
import './index.scss';
import { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ','R', 'i', 'c', 'k', 'y']
    const jobArray = ['w', 'e', 'b',' ','d','e','v','e','l','o','p','e','r','.']

    return (
        <dix className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm  
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15} />
                <br /> 
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22} /></h1>
                <h2>Full Stack Developer</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </dix>
    );
}

export default Home;