import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";

const languageOptions = [
  { name: "English", code: "en" },
  { name: "Português", code: "pt" },
  { name: "ภาษาไทย", code: "th" },
  { name: "Español", code: "es" },
  { name: "Bahasa Indonesia", code: "id" },
  { name: "العربية", code: "ar" },
  { name: "हिंदी", code: "hi" },
  { name: "Türkçe", code: "tr" },
  { name: "简体中文", code: "zh" },
  { name: "繁體中文 (台灣)", code: "zh-TW" },
  { name: "Tiếng Việt", code: "vi" },
  { name: "Русский", code: "ru" },
  { name: "Italiano", code: "it" },
  { name: "Polski", code: "pl" },
  { name: "Svenska", code: "sv" },
  { name: "Dansk", code: "da" },
  { name: "한국어", code: "ko" },
  { name: "Deutsch", code: "de" },
  { name: "Nederlands", code: "nl" },
  { name: "Français", code: "fr" },
  { name: "日本語", code: "ja" },
];

function NavBarComponent({ language, setLanguage }) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand style={{ fontsize: "1.5em" }}>
            CookingTimer
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <LinkContainer to={`/cookingtimer/${language}`}>
              <Nav.Link>요리타이머</Nav.Link>
            </LinkContainer> */}
            {/* <LinkContainer to={`/generaltimer/${language}`}>
              <Nav.Link>타이머</Nav.Link>
            </LinkContainer> */}
            {/* <LinkContainer to={`/alarm/${language}`}>
              <Nav.Link>알람</Nav.Link>
            </LinkContainer> */}
            <LinkContainer to={`/stopwatch/${language}`}>
              <Nav.Link>StopWatch</Nav.Link>
            </LinkContainer>
            {/* <LinkContainer to={`/presentime/${language}`}>
              <Nav.Link>현재시간</Nav.Link>
            </LinkContainer> */}
            {/* <LinkContainer to={`/worldtime/${language}`}>
              <Nav.Link>세계시간</Nav.Link>
            </LinkContainer> */}
          </Nav>
          <Nav>
            <LanguageDropdown setLanguage={setLanguage} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function LanguageDropdown({ setLanguage }) {
  const navigate = useNavigate();

  const handleLanguageChange = (eventKey) => {
    setLanguage(eventKey);
    navigate(`/cookingtimer/${eventKey}`);
  };

  return (
    <NavDropdown
      title={<FontAwesomeIcon icon={faLanguage} size="2xl" />}
      id="collasible-nav-dropdown"
      onSelect={(eventKey) => handleLanguageChange(eventKey)}
    >
      {languageOptions.map((option) => (
        <NavDropdown.Item eventKey={option.code} key={option.code}>
          {option.name}
        </NavDropdown.Item>
      ))}
    </NavDropdown>
  );
}

export default NavBarComponent;
