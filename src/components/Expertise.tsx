import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Django", "Flask","Vue.js", "Python", "JavaScript", "HTML5", "CSS3", "SQL", "RESTful API"
];

const labelsSecond = [
    "Docker", "GitHub Actions", "AWS", "Linux", "CI/CD Pipelines", "Automation Tools"
];

const labelsThird = [
    "LLaMA", "Unsloth", "LoRA", "Hugging Face", "OpenAI API", "Weights & Biases", "CNNs",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Machine Learning & Generative AI</h3>
                    <p>With expertise in large language models and generative AI, I develop custom applications for interactive and retrieval-based AI tasks. My skills include data preprocessing, fine-tuning models, and engineering effective prompts for high-quality AI outputs.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I build responsive and interactive web applications, combining robust backend architectures with intuitive frontend interfaces. My experience spans designing and deploying full-stack solutions, integrating APIs, and optimizing UIs to ensure a seamless user experience.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps</h3>
                    <p>I implement DevOps best practices for scalable and efficient application deployment, including automated workflows, CI/CD pipelines, and deployment optimizations that ensure reliable production environments.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                
            </div>
        </div>
    </div>
    );
}

export default Expertise;