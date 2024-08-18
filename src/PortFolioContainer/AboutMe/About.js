import React from 'react';
import './About.css';

function About() {
    const skills = [
        { category: 'Programming Languages', items: ['Java', 'C', 'C#', 'Python'] },
        { category: 'Web Technologies', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript'] },
        { category: 'Front-end Libraries', items: ['Vue.js', 'React.js', 'Angular'] },
        { category: 'Data Analytics Tools', items: ['Tableau', 'Power BI'] },
        { category: 'Other Skills', items: ['SQL', 'Data Structures', 'Algorithms', 'IT Knowledge', 'Team Collaboration', 'MS Productivity Suite'] }
    ];

    const experiences = [
        {
            role: 'Graduate Research Assistant',
            company: 'Kennesaw State University',
            duration: 'Jan 2024 - Present',
            description: 'Led a web development research project with React.js, HTML, CSS, and JavaScript. Presented findings at academic conferences and acquired advanced proficiency in modern web development frameworks.'
        },
        {
            role: 'Systems Engineer',
            company: 'Infosys',
            duration: 'Nov 2021 - Aug 2023',
            description: 'Developed a low-code application portal using React.js and Vue.js. Enhanced front-end solutions and state management, recognized for delivering robust, standards-compliant solutions.'
        },
        {
            role: 'Student Aid, Dean’s Office',
            company: 'SRKR Engineering College',
            duration: 'Sept 2018 - Feb 2020',
            description: 'Developed a responsive website using HTML5, CSS3, and JavaScript. Implemented interactive features and collaborated with the IT team to meet design and performance requirements.'
        }
    ];

    return (
        <div className='about-container'>
            <section className='skills-section'>
                <h2>Skills</h2>
                {skills.map((skill, index) => (
                    <div key={index} className='skill-category'>
                        <h3>{skill.category}</h3>
                        <ul>
                            {skill.items.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>

            <section className='experience-section'>
                <h2>Experience</h2>
                {experiences.map((experience, index) => (
                    <div key={index} className='experience-card'>
                        <h3>{experience.role}</h3>
                        <h4>{experience.company}</h4>
                        <p>{experience.duration}</p>
                        <p>{experience.description}</p>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default About;
