import React from 'react';
import aiIllustration from '../assets/aitool.svg';
import '../styles/home.css';

const Home = () => {
    return (
        <div className='main-home'>
            <div className='left'>
                <div>
                    <h1>Welcome to AI Genius Lab! 🚀</h1>
                </div>
                <div>
                    <p style={{ color: '#A3B3BC' }}>Learn AI hands-on! Join our project-based journey to master coding and delve into <span className='highlight-text'>Artificial Intelligence.</span></p>
                </div>
                <div>
                    <h1 className='highlight'>Learn AI by Doing 🧠</h1>
                </div>
                <div className='buttons-container'>
                    <button>Start Exploring</button>
                    <button>Make Contribution</button>
                </div>
            </div>
            <div className='right'>
                <img src={aiIllustration} alt='AI Illustration' />
            </div>
        </div>
    );
}

export default Home;
