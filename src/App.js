import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import CookingTimer from "./components/CookingTimer";
import StopWatch from "./components/StopWatch";
import NavBarComponent from "./components/NavBarComponent";
import Footer from "./components/Footer";
import About from "./components/About";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import Container from "react-bootstrap/Container";

const App = () => {
  const [language, setLanguage] = useState("ko");
  const [timerFontScale, setTimerFontScale] = useState(1);

  return (
    <>
      <NavBarComponent
        language={language}
        setLanguage={setLanguage}
        timerFontScale={timerFontScale}
        setTimerFontScale={setTimerFontScale}
      />
      <Container
        className="min-vh-100 d-flex flex-column theme-dark"
      >
        <div className="flex-grow-1">
          <Routes>
            <Route
              path="/"
              element={
                <CookingTimer
                  language={language}
                  timerFontScale={timerFontScale}
                />
              }
            />
          {/* <Route
            path={`/generaltimer/:lang`}
            element={
              <GeneralTimer language={language} setLanguage={setLanguage} />
            }
          /> */}
            <Route
              path={"/cookingtimer/:lang"}
              element={
                <CookingTimer
                  language={language}
                  timerFontScale={timerFontScale}
                />
              }
            />
          {/* <Route path={"/alarm/:lang"} element={<Alarm />} /> */}
            <Route
              path={`/stopwatch/:lang`}
              element={<StopWatch language={language} />}
            />
          {/* <Route path={`/presentime/:lang`} element={<PresentTime />} />
          <Route path={`/sound/:lang`} element={<Sound />} />
          <Route path={`/test/:lang`} element={<Test />} /> */}
          {/* <Route path={`/worldtime/:lang`} element={<WorldTime />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
          </Routes>
        </div>
        <Footer />
      </Container>
    </>
  );
};

export default App;
