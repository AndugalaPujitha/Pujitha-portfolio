import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2025 - July 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Internships</h3>
            <h4 className="vertical-timeline-element-subtitle">Bhimavarm, AP</h4>
            <p>
              Skill-Dzire Deep Learning.
            </p>
          </VerticalTimelineElement>
                    <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2024 - July 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Internships</h3>
            <h4 className="vertical-timeline-element-subtitle">Bhimavarm, AP</h4>
            <p>
              Skill-Dzire Machine Learning.
            </p>
          </VerticalTimelineElement>
                    <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="March 2024 - April 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Hackathons</h3>
            <h4 className="vertical-timeline-element-subtitle">Bhimavaram, AP</h4>
            <p>• IITM-BUILDCLUB Machine Learning, IOT</p>
            <p>Qualified for semi-finals in IITMIC ‘Build to Innovate’ (Rural-Agri Ed.) Challenge (April 2024).</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2023 - 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Hackathons</h3>
            <h4 className="vertical-timeline-element-subtitle">Bhimavaram, AP</h4>
            <p>• GDSC Full-stack Web Development,</p>
            <p>• Block Chain Project Management.</p>
          </VerticalTimelineElement>
                      <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2026"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">B.Tech (CSE-AI & DS)</h3>
            <h4 className="vertical-timeline-element-subtitle">Bhimavaram, AP</h4>
            <p>
              Shri Vishnu Engineering College For Women.
            </p>
          </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Intermediate (M.P.C)</h3>
            <h4 className="vertical-timeline-element-subtitle">Bhimavarm, AP</h4>
            <p>
              Tirumala Junior College.
            </p>
          </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019 - 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Secondary School Certificate</h3>
            <h4 className="vertical-timeline-element-subtitle">Kaikaluru, AP</h4>
            <p>
              Sri Chaitanya Techno School.
            </p>
          </VerticalTimelineElement>




        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
