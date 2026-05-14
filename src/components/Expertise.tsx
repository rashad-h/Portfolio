import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Go", "TypeScript", "Python", "Django", "Flask", "Vue.js", "AWS", "PostgreSQL", "RESTful APIs"
];

const labelsSecond = [
    "Docker", "GitHub Actions", "AWS", "GCP", "Linux", "CI/CD Pipelines", "Kubernetes"
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
                    <p>With expertise in large language models and generative AI, I build custom applications for interactive storytelling, retrieval-based AI, and fine-tuned model pipelines. My skills include data preprocessing, fine-tuning with LoRA/Unsloth, and engineering effective prompts for high-quality AI outputs.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Backend & Full Stack Engineering</h3>
                    <p>I design and build high-throughput backend services and distributed systems, including payment APIs and sports betting platforms handling millions of daily transactions. My stack spans Go, Python, and TypeScript backends with cloud-native deployment on AWS, combined with full-stack experience building responsive frontends.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Cloud</h3>
                    <p>I implement DevOps best practices for scalable, cloud-native deployment, including automated CI/CD workflows, containerisation, and multi-cloud infrastructure across AWS and GCP that ensure reliable production environments.</p>
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
