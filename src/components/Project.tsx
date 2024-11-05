import React from "react";
import image2 from '../assets/images/image2.jpg';
import image1 from '../assets/images/image1.jpeg';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/rashad-h/Surgical-Scene-Understanding-Laparoscopic/blob/main/code.ipynb" target="_blank" rel="noreferrer"><img src={image1} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/rashad-h/Surgical-Scene-Understanding-Laparoscopic/blob/main/code.ipynb" target="_blank" rel="noreferrer"><h2>Surgical Scene Understanding Using Deep Learning</h2></a>
                <p>Designed and implemented a deep learning model to enhance surgical scene understanding in laparoscopic hysterectomy procedures using image segmentation.</p>
            </div>
            <div className="project">
                <a href="https://github.com/rashad-h/Covid-Simulation/blob/master/Summary.pdf" target="_blank" rel="noreferrer"><img src={image2} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/rashad-h/Covid-Simulation/blob/master/Summary.pdf" target="_blank" rel="noreferrer"><h2>COVID-19 Spread Simulation</h2></a>
                <p>This project models COVID-19 transmission within a population, incorporating factors like infection rate, recovery rate, and population density to simulate realistic spread patterns. Contributors are invited to enhance the code and explore the Summary section for insights and results.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;