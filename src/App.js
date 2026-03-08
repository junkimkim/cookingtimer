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

  return (
    <>
      <NavBarComponent language={language} setLanguage={setLanguage} />
      <Container className="min-vh-100 d-flex flex-column">
        <div className="flex-grow-1">
        <Routes>
          <Route
            path="/"
            element={
              <CookingTimer language={language} setLanguage={setLanguage} />
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
              <CookingTimer language={language} setLanguage={setLanguage} />
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
