import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

const my_style = { background: '#002858', color: 'black' }


function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="March 2025 – Present"
            iconStyle={my_style}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Checkout.com, London</h4>
            <p>Led merchant card verification system for global high-volume merchants, processing millions of transactions via a secure zero-charge validation flow.</p>
            <p>Designed Go + AWS payment APIs reliably handling 10M+ transactions/day, ensuring resilience, scalability, and low-latency performance.</p>
            <p>Owned PSP integrations end-to-end: architecture design, technical planning, stakeholder communication, testing, and production rollout.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="July 2024 – Feb 2025"
            iconStyle={my_style}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Playtech, London</h4>
            <p>Backend services in Go and Python for Playtech's sports betting engine, supporting 100,000+ daily transactions across a distributed multi-region system.</p>
            <p>Added and improved betting functionalities, working cross-functionally with product, data, and platform teams.</p>
            <p>Diagnosed and resolved latency issues in event processing pipelines, improving responsiveness during high-traffic sporting events.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="July 2022 – Sep 2023"
            iconStyle={my_style}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer (Placement)</h3>
            <h4 className="vertical-timeline-element-subtitle">ecobee, Leeds, UK</h4>
            <p>Built and integrated backend APIs in Flask (Python) and TypeScript, collaborating with third-party providers and internal teams.</p>
            <p>Wrote high-performance Go firmware for a next-generation smart doorbell camera.</p>
            <p>Identified and resolved a long-standing issue causing unnecessary server requests, reducing off-peak request volume by 15%.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 – 2024"
            iconStyle={my_style}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Bachelor of Computer Science</h3>
            <h4 className="vertical-timeline-element-subtitle">University of Leeds, UK</h4>
            <p>First Class Honours</p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
