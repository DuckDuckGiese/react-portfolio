import { Link } from 'react-router-dom';
import './index.scss';

const Home = () => {


    return (
        <dix className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> 
                I'm Ricky <br /> 
                Web Developer</h1>
                <h2>Full Stack Developer</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </dix>
    );
}

export default Home;