import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import CookingTimer from "./components/CookingTimer";
import StopWatch from "./components/StopWatch";
import NavBarComponent from "./components/NavBarComponent";
import Container from "react-bootstrap/Container";

const App = () => {
  const [language, setLanguage] = useState("ko");

  return (
    <>
      <NavBarComponent language={language} setLanguage={setLanguage} />
      <Container>
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
          <Route path={`/stopwatch/:lang`} element={<StopWatch />} />
          {/* <Route path={`/presentime/:lang`} element={<PresentTime />} />
          <Route path={`/sound/:lang`} element={<Sound />} />
          <Route path={`/test/:lang`} element={<Test />} /> */}
          {/* <Route path={`/worldtime/:lang`} element={<WorldTime />} /> */}
        </Routes>
      </Container>
    </>
  );
};

export default App;
