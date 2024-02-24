import { Col, Row } from 'react-bootstrap';
import { DiJavascript1, DiReact, DiNodejs, DiMongodb, DiGit } from 'react-icons/di';
import { SiRedis, SiFirebase, SiNextdotjs, SiPostgresql, SiMysql, SiEslint } from 'react-icons/si';
import { SiSocketdotio } from 'react-icons/si';

const TECH_LIST = [
  { name: 'javascript', icon: <DiJavascript1 /> },
  { name: 'nodejs', icon: <DiNodejs /> },
  { name: 'react', icon: <DiReact /> },
  { name: 'next.js', icon: <SiNextdotjs /> },
  { name: 'mysql', icon: <SiMysql /> },
  { name: 'postgresql', icon: <SiPostgresql /> },
  { name: 'mongodb', icon: <DiMongodb /> },
  { name: 'git', icon: <DiGit /> },
  { name: 'firebase', icon: <SiFirebase /> },
  { name: 'redis', icon: <SiRedis /> },
  { name: 'socket.io', icon: <SiSocketdotio /> },
  { name: 'eslint', icon: <SiEslint /> },
];
function Techstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      {TECH_LIST.map(({ name, icon }) => (
        <Col xs={4} md={2} key={name} className='tech-icons'>
          {icon}
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
