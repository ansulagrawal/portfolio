import { Col, Row } from 'react-bootstrap';
import { SiVisualstudiocode, SiPostman, SiSlack, SiVercel, SiWindows, SiJira, SiGithub } from 'react-icons/si';

const TOOL_LIST = [
  { name: 'windows', icon: <SiWindows /> },
  { name: 'vscode', icon: <SiVisualstudiocode /> },
  { name: 'postman', icon: <SiPostman /> },
  { name: 'slack', icon: <SiSlack /> },
  { name: 'vercel', icon: <SiVercel /> },
  { name: 'jira', icon: <SiJira /> },
  { name: 'github', icon: <SiGithub /> },
];
function Toolstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      {TOOL_LIST.map(({ name, icon }) => (
        <Col xs={4} md={2} key={name} className='tech-icons'>
          {icon}
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
