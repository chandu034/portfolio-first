import { useEffect, useState } from 'react';
import './Profile.css';
import profilePicture from '../../images/profile.jpg';

function Profile() {
    const roles = ["Web Developer", "Software Engineer", "UI/UX Designer", "React Developer"];
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }, 2000); // 2000ms = 2 seconds

        // Cleanup the interval on component unmount
        return () => clearInterval(intervalId);
    }, [roles.length]);

    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
                            <i className='fa fa-facebook-square'></i>
                        </a>
                        <a href='https://plus.google.com' target='_blank' rel='noopener noreferrer'>
                            <i className='fa fa-google-plus-square'></i>
                        </a>
                        <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
                            <i className='fa fa-instagram'></i>
                        </a>
                        <a href='https://www.youtube.com/@TeluguPandaa' target='_blank' rel='noopener noreferrer'>
                            <i className='fa fa-youtube-square'></i>
                        </a>
                        <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
                            <i className='fa fa-twitter'></i>
                        </a>
                    </div>
                    <div className='profile-info-container'>
                        <div className='profile-text'>
                            <div className='profile-details-name'>
                                <span className='primary-text'>
                                    {" "}
                                    Hello, I'm <span className='highlighted-text'> Chandra Sekhar</span>
                                </span>
                            </div>
                            <div className='profile-details-role'>
                                <span className='primary-text'>
                                    {" "}
                                    <h1>{roles[currentRoleIndex]}</h1>
                                </span>
                            </div>
                        </div>
                        <div className='profile-picture'>
                            <img src={profilePicture} alt='Chandra Sekhar' className='profile-img' />
                        </div>
                    </div>
                    <div className='profile-details-para'>
                        <span className='secondary-text'>
                            <p> Seeking an internship opportunity in the field of computer science, where I can apply my extensive technical knowledge, effective communication skills, and teaching experience. Eager to contribute to a dynamic team, I aim to gain practical experience, refine my skills, and actively contribute to innovative projects while fostering my professional growth in the ever-evolving landscape of computer science.</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
