import GitHubCalendar from 'react-github-calendar';
import { Row } from 'react-bootstrap';

function Github() {
  const explicitTheme = {
    dark: ['hsl(0, 0%, 60%)', 'hsla(272, 85%, 74%, 0.44)', 'hsla(272, 85%, 74%, 0.6)', 'hsla(272, 85%, 74%, 0.76)', 'hsla(272, 85%, 74%, 0.92)'],
  };

  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
      <h1 className='project-heading' style={{ paddingBottom: '20px' }}>
        Days I <strong className='purple'>Code</strong>
      </h1>
      <GitHubCalendar username='ansulagrawal' blockSize={15} blockMargin={5} color='#ff' colorScheme='dark' theme={explicitTheme} fontSize={16} />
    </Row>
  );
}

export default Github;
