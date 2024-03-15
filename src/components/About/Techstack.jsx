import { Col, Row } from 'react-bootstrap';
import { DiJavascript1, DiReact, DiNodejs, DiMongodb, DiGit } from 'react-icons/di';
import { SiRedis, SiFirebase, SiNextdotjs, SiPostgresql, SiMysql, SiEslint } from 'react-icons/si';
import { SiSocketdotio } from 'react-icons/si';

const TECH_LIST = [
  { name: 'Javascript', icon: <DiJavascript1 /> },
  { name: 'Node.js', icon: <DiNodejs /> },
  { name: 'React', icon: <DiReact /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'PostgreSQL', icon: <SiPostgresql /> },
  { name: 'MongoDB', icon: <DiMongodb /> },
  { name: 'Git', icon: <DiGit /> },
  { name: 'Firebase', icon: <SiFirebase /> },
  { name: 'Redis', icon: <SiRedis /> },
  { name: 'Socket.io', icon: <SiSocketdotio /> },
  { name: 'Eslint', icon: <SiEslint /> },
];
function Techstack() {
  return (
    <Row className="tech-wrapper" style={{ justifyContent: 'center', marginBlock: '30px 80px' }}>
      {TECH_LIST.map(({ name, icon }) => (
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

export default Techstack;
