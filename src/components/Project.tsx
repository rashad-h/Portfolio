import React from "react";
import Chip from '@mui/material/Chip';
import image1 from '../assets/images/image1.jpeg';
import liquidot from '../assets/images/liquidot-dashboard.png';
import '../assets/styles/Project.scss';
import '../assets/styles/Expertise.scss';

interface ProjectData {
    title: string;
    description: string;
    techTags: string[];
    link: string;
    image?: string;
    banner?: string;
    bannerBg?: string;
    note?: string;
}

const projects: ProjectData[] = [
    {
        title: "Interactive Bedtime Story Generator",
        description: "AI-powered story generation platform enabling users to guide multi-stage interactive narratives. Integrated Photo Maker v2 for personalised visual scenes from user-provided images, with content-safety filters to ensure child-appropriate output.",
        techTags: ["Django", "Vue.js", "AWS", "OpenAI API"],
        link: "https://rashad-h.github.io/AI_Story_Teller_Frontend/",
        banner: "📖",
        bannerBg: "linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)",
    },
    {
        title: "LEGO Minifigure Generator",
        description: "AI system that generates custom LEGO minifigures using a fine-tuned LLaMA 8B model trained on a self-scraped dataset of 16,000+ minifigures. Implements a retrieval and scoring mechanism to match generated descriptions with closest part sets.",
        techTags: ["LLaMA 8B", "LoRA", "Unsloth", "16K+ Dataset"],
        link: "https://github.com/rashad-h/LEGO-Minifig-Generator",
        banner: "🧱",
        bannerBg: "linear-gradient(135deg, #f7971e, #ffd200)",
    },
    {
        title: "LiquiDOT",
        description: "Decentralised Web3 crypto pool management platform built for the Polkadot ecosystem. Allows users to create and manage liquidity pools with configurable strategies, stop-loss ranges, and asymmetric range features.",
        techTags: ["Web3", "DeFi", "Solidity", "React"],
        link: "https://github.com/gabikreal1/LiquiDOT",
        image: liquidot,
        note: "Hackathon Winner — $13K Prize (Polkadot & EasyA)",
    },
    {
        title: "GapGrabber App",
        description: "Agentic cancellation management system that monitors appointment availability and automatically secures earlier slots on behalf of users, using an intelligent agent-based architecture.",
        techTags: ["TypeScript", "Agentic AI", "Node.js"],
        link: "https://github.com/rashad-h/GapGrabber_App",
        banner: "🔍",
        bannerBg: "linear-gradient(135deg, #134e5e, #71b280)",
    },
    {
        title: "Retro Game AI Generator",
        description: "AI system for procedurally generating retro-style games, leveraging generative models to produce game assets, levels, and mechanics in the style of classic arcade and console games.",
        techTags: ["Python", "Generative AI", "Game Dev"],
        link: "https://github.com/rashad-h/retro-game-ai-generator",
        banner: "🎮",
        bannerBg: "linear-gradient(135deg, #200122, #6f0000)",
    },
    {
        title: "Surgical Scene Understanding",
        description: "Deep learning model to enhance surgical scene understanding in laparoscopic hysterectomy procedures using image segmentation, improving intraoperative awareness for surgical teams.",
        techTags: ["Deep Learning", "CNNs", "Python", "PyTorch"],
        link: "https://github.com/rashad-h/Surgical-Scene-Understanding-Laparoscopic/blob/main/code.ipynb",
        image: image1,
    },
];

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div className="project" key={index}>
                        {project.image ? (
                            <a href={project.link} target="_blank" rel="noreferrer">
                                <img src={project.image} className="zoom" alt={project.title} width="100%" />
                            </a>
                        ) : (
                            <a href={project.link} target="_blank" rel="noreferrer">
                                <div className="project-banner" style={{ background: project.bannerBg }}>
                                    <span className="project-banner-emoji">{project.banner}</span>
                                </div>
                            </a>
                        )}
                        <a href={project.link} target="_blank" rel="noreferrer">
                            <h2>{project.title}</h2>
                        </a>
                        {project.note && <p className="project-note">{project.note}</p>}
                        <p>{project.description}</p>
                        <div className="flex-chips project-tags">
                            <span className="chip-title">Tech stack:</span>
                            {project.techTags.map((tag, i) => (
                                <Chip key={i} className="chip" label={tag} />
                            ))}
                        </div>
                        <a href={project.link} target="_blank" rel="noreferrer" className="project-link-btn">
                            View Project →
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;
