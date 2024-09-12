import './index.scss';
import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['o', 'r', 'y'];
    const jobArray = "web developer.".split("");

    useEffect( () => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 4000)
    }, []);

    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                <span className={letterClass} >H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>

                <img src={LogoTitle} className='logo' alt="developer" />
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />
                </h1>
                <h2>University of St Andrews 3rd year Computer Science Student</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    );

};

export default Home;