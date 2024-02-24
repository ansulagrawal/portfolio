import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import acnme from '../../Assets/Projects/acme.png';
import reactBigScheduule from '../../Assets/Projects/react-big-schedule.png';
import mangaVerse from '../../Assets/Projects/manga-verse.png';
import gameVault from '../../Assets/Projects/game-vault.png';
import ipTracker from '../../Assets/Projects/ip-tracker.png';
import countriesAroundTheWorld from '../../Assets/Projects/countries-around-the-world.webp';

const PROJECT_LIST = [
  {
    name: 'React Big Schedule (Open Source Library)',
    image: reactBigScheduule,
    description:
      'React Big Schedule is a powerful and intuitive scheduler and resource planning solution built with React. Seamlessly integrate this modern, browser-compatible component into your applications to effectively manage time, appointments, and resources. With drag-and-drop functionality, interactive UI, and granular views, react-big-schedule empowers users to effortlessly schedule and allocate resources with precision.',
    gitLink: 'https://github.com/react-scheduler/react-big-schedule',
    demoLink: 'https://react-big-schedule.vercel.app/',
  },
  {
    name: 'Manga Verse',
    image: mangaVerse,
    description: `Manga Verse is a comprehensive web application that showcases a diverse collection of manga (Japanese comics) from various genres, including romance, thriller, action, crime, and boy's love. The platform features a wide range of manga titles, such as "My Introverted Boy," "Yuri!!! on Ice - Minus 6 Do no Gin Shiro Zokukyou," and "Most Popular S-Class Hunter Doesn't Want to Be a Villainous Princess." The web application highlights the authors and their respective circles, along with the genres and tags associated with each work, providing a user-friendly interface for manga enthusiasts to explore and enjoy their favorite titles.`,
    gitLink: 'https://github.com/JitendraSoni1234/manga-verse',
    demoLink: 'https://mangaverse.vercel.app/',
  },
  {
    name: 'Countries around the world',
    image: countriesAroundTheWorld,
    description: `
    "Rest Countries API with Color Theme Switcher by Frontend Mentor Task" is an engaging project that harnesses the power of the Rest Countries API to present a wealth of country-related information. With its intuitive interface, users can effortlessly explore data ranging from country names to populations, languages spoken, and currencies used. What sets this project apart is its innovative color theme switcher, granting users the freedom to tailor the app's visual aesthetics to their liking. By completing this task from Frontend Mentor, developers gain valuable experience in integrating APIs, implementing dynamic features, and enhancing user interaction through customizable design elements.`,
    gitLink: 'https://github.com/ansulagrawal/rest-countries-api-with-color-theme-switcher',
    demoLink: 'https://rest-countries-api-with-color-theme-switcher-ansulagrawal.vercel.app/',
  },
  {
    name: 'Game Vault',
    image: gameVault,
    description:
      "Game Vault is your go-to web application for comprehensive game details, including gameplay info, system requirements, and user reviews. Explore a diverse range of titles from first-person shooters to MMORPGs, battle royales, and strategy games, featuring popular releases like Overwatch 2, Diablo Immortal, Lost Ark, PUBG: Battlegrounds, and World of Tanks. Each listing includes links to official game websites for additional resources. Whether you're a seasoned gamer or new to the scene, Game Vault provides all the information you need to make informed gaming choices. Dive into the world of gaming with Game Vault today!",
    gitLink: 'https://github.com/ansulagrawal/game-vault',
    demoLink: 'https://game-vault-ansulagrawal.vercel.app',
  },
  {
    name: 'IP Address Tracker',
    image: ipTracker,
    description: "The IP Address Tracker task from Frontend Mentor challenges developers to create a web application that tracks and displays the location of any given IP address. Users can input an IP address into the interface, and the application retrieves and visualizes the corresponding location information, such as the country, region, city, and postal code. This project provides an opportunity for frontend developers to practice integrating with location-based APIs, handling user input, and presenting data in a clear and user-friendly manner. It's an engaging task that combines technical skills with practical application in a real-world scenario..",
    gitLink: 'https://github.com/ansulagrawal/ip-tracker',
    demoLink: 'https://ansulagrawal.github.io/ip-tracker/',
  },
  {
    name: 'Acme Dashboard',
    image: acnme,
    description: "Acme Dashboard is a user-friendly invoice management tool developed during the learning process of Next JS. Seamlessly blending functionality with learning, this project showcases the power and versatility of Next JS for creating dynamic web applications. With intuitive features designed for efficient invoice management, Acme Dashboard offers a streamlined user experience. Whether you're tracking invoices, managing clients, or monitoring payment statuses, this tool simplifies the process, empowering users to stay organized and productive. Built with a focus on learning and practical application, Acme Dashboard serves as a testament to the capabilities of Next JS in real-world projects.",
    gitLink: 'https://github.com/ansulagrawal/acname-dashboard',
    demoLink: 'https://acme-dashboard-ansulagrawal.vercel.app/',
  },
];

function Projects() {
  return (
    <Container fluid className='project-section'>
      <Particle />
      <Container>
        <h1 className='project-heading'>
          My Recent <strong className='purple'>Works</strong>
        </h1>
        <p style={{ color: 'white' }}>Here are a few projects I&apos;ve worked on recently.</p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          {PROJECT_LIST.map((project, index) => (
            <Col key={index} md={4} className='project-card'>
              <ProjectCard
                imgPath={project.image}
                title={project.name}
                description={project.description}
                ghLink={project.gitLink}
                demoLink={project.demoLink}
                isBlog={project.isBlog}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
