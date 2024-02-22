import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ansul Agrawal </span>
            from <span className="purple"> Navsari, India.</span>
            <br />
            I am currently employed as a Software Developer at General Aeronautics.
            <br />
            I have completed B Tech  in Computer Science and Engineering at REVA University Bangalore.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          &quot;Strive to build things that make a difference&#33;&quot;{" "}
          </p>
          <footer className="blockquote-footer">Ansul</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
