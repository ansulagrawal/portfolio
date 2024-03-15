import { Col, Row } from 'react-bootstrap';
import { SiVisualstudiocode, SiPostman, SiSlack, SiVercel, SiWindows, SiJira, SiGithub } from 'react-icons/si';

const TOOL_LIST = [
  { name: 'Windows', icon: <SiWindows /> },
  { name: 'VSCode', icon: <SiVisualstudiocode /> },
  { name: 'Postman', icon: <SiPostman /> },
  { name: 'Slack', icon: <SiSlack /> },
  { name: 'Vercel', icon: <SiVercel /> },
  { name: 'Jira', icon: <SiJira /> },
  { name: 'GitHub', icon: <SiGithub /> },
];
function Toolstack() {
  return (
    <Row className="tech-wrapper" style={{ justifyContent: 'center', marginBlock: '30px 80px' }}>
      {TOOL_LIST.map(({ name, icon }) => (
        <Col xs={4} md={2} key={name} className='tech-card'>
          {icon}
          <div className="tech-card-content">
            <p>{name}</p>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
