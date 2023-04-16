import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faStop,
  faEgg,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";
import Form from "react-bootstrap/Form";
import { Howl } from "howler";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Nav from "react-bootstrap/Nav";
import 리가토니 from "../pasta/리가토니.png";
import 펜네 from "../pasta/펜네.png";
import 파르팔레 from "../pasta/파르팔레.png";
import 마카로니 from "../pasta/마카로니.png";
import 푸실리 from "../pasta/푸실리.png";
import 콘킬리에 from "../pasta/콘킬리에.png";
import 페투치네 from "../pasta/페투치네.png";
import 탈리아텔레 from "../pasta/탈리아텔레.png";
import 마팔데 from "../pasta/마팔데.png";
import 프레골라 from "../pasta/프레골라.png";

const audioClips = [
  {
    sound: "",
    label: "None",
  },
  {
    sound: "https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg",
    label: "Alarm 1",
  },
  {
    sound: "https://actions.google.com/sounds/v1/alarms/bugle_tune.ogg",
    label: "Alarm 2",
  },
  {
    sound:
      "https://actions.google.com/sounds/v1/alarms/dinner_bell_triangle.ogg",
    label: "Alarm 3",
  },
  {
    sound: "https://actions.google.com/sounds/v1/alarms/dosimeter_alarm.ogg",
    label: "Alarm 4",
  },
];

const EggTimer = ({ labels, hms, pastaNames, degreeNames, timeLabel }) => {
  const [timeLeft, setTimeLeft] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [eggNames, setEggNames] = useState("");
  const [duration, setDuration] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [hasTimerStarted, setHasTimerStarted] = useState(false);
  const [selectedSound, setSelectedSound] = useState(null);
  const [sound, setSound] = useState(null);
  // const [buttonClicked, setButtonClicked] = useState(false);

  //계란 종류
  // useEffect(
  //   (buttonClicked) => {
  //     let eggNames = "";

  //     if (duration === 360) {
  //       eggNames = labels.soft;
  //     } else if (duration === 540) {
  //       eggNames = labels.medium;
  //     } else if (duration === 720) {
  //       eggNames = labels.hard;
  //     }

  //     setEggNames(eggNames);
  //     setButtonClicked(false);
  //   },
  //   [buttonClicked, duration, labels]
  // );

  //시간 줄이기
  useEffect(() => {
    let timer;

    if (timerActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          if (prevTimeLeft === 0) {
            clearInterval(timer);
            return 0;
          } else {
            return prevTimeLeft - 1;
          }
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [timerActive, timeLeft, duration]);

  //알람 울리기
  useEffect(() => {
    if (timeLeft === 0 && timerActive && hasTimerStarted) {
      playSound();
    }
  }, [timeLeft, timerActive, hasTimerStarted]);

  //소리 울리기
  const playSound = () => {
    if (selectedSound) {
      const newSound = new Howl({
        src: [selectedSound],
        html5: true,
        loop: true,
      });
      setSound(newSound);
      newSound.play();
    }
  };

  //시간 업데이트
  useEffect(() => {
    clearInterval(formatTime);
    setTimeLeft(duration);
    setTimerActive(true);
  }, [duration]);

  //타이머
  const formatTime = (seconds) => {
    const hr = Math.floor(seconds / 3600);
    const min = Math.floor((seconds % 3600) / 60);
    const sec = seconds % 60;
    return `${hr.toString().padStart(2, "0")}:${min
      .toString()
      .padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  };

  //타이머 일시정지
  const pause = () => {
    setTimerActive(false);
  };

  //타이머 정지
  const stop = () => {
    setTimerActive(false);
    setTimeLeft(0);
  };

  const handleSoundSelect = (sound) => {
    setSelectedSound(sound);
  };

  const handleStopSound = () => {
    if (sound) {
      sound.stop();
    }
  };

  const renderSoundOptions = () => {
    return audioClips.map((soundObj, index) => (
      <Dropdown.Item
        key={index}
        onClick={() => handleSoundSelect(soundObj.sound)}
      >
        {soundObj.label}
      </Dropdown.Item>
    ));
  };

  const getSelectedSoundLabel = () => {
    const soundObj = audioClips.find((clip) => clip.sound === selectedSound);
    return soundObj ? (
      soundObj.label
    ) : (
      <FontAwesomeIcon
        icon={faMusic}
        size="lg"
        style={{ padding: "2.5px 10px" }}
      />
    );
  };

  return (
    <>
      <Row>
        <Col></Col>
        <Col className="timer-container">
          <Stack className="timer">
            <Row>
              <Col className="mainTimer">
                <h2>{eggNames}</h2>
              </Col>
            </Row>
            <Row>
              <Col className="time-passed mainTimer">
                {formatTime(timeLeft)}
              </Col>
            </Row>

            <Row>
              <Col
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <Button
                  size="lg"
                  onClick={() => {
                    setHasTimerStarted(true);
                    if (timeLeft > 0) {
                      setTimerActive(true);
                    } else {
                      const totalSeconds =
                        hours * 3600 + minutes * 60 + seconds;
                      setTimeLeft(totalSeconds);
                      setTimerActive(true);
                    }
                  }}
                  aria-label="Restart timer"
                >
                  <FontAwesomeIcon icon={faPlay} size="2xl" />
                </Button>

                <Button size="lg" onClick={pause} aria-label="Pause timer">
                  <FontAwesomeIcon icon={faPause} size="2xl" />
                </Button>
                <Button
                  size="lg"
                  onClick={() => {
                    stop();
                    setEggNames("");
                    handleStopSound();
                  }}
                  aria-label="Stop timer"
                >
                  <FontAwesomeIcon icon={faStop} size="2xl" />
                </Button>
              </Col>

              <Col className="d-flex align-items-center">
                <Form.Group
                  controlId="hours-dropdown"
                  className="timer-dropdown"
                  inline="true"
                >
                  <Form.Label>{`${hms.hour}:`}</Form.Label>
                  <Form.Select onChange={(e) => setHours(e.target.value)}>
                    {[...Array(24)].map((_, i) => (
                      <option key={i} value={i}>
                        {i}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
                <Form.Group
                  controlId="minutes-dropdown"
                  className="timer-dropdown"
                  inline="true"
                >
                  <Form.Label>{`${hms.minute}:`}</Form.Label>
                  <Form.Select onChange={(e) => setMinutes(e.target.value)}>
                    {[...Array(60)].map((_, i) => (
                      <option key={i} value={i}>
                        {i}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
                <Form.Group
                  controlId="seconds-dropdown"
                  className="timer-dropdown"
                  inline="true"
                >
                  <Form.Label>{`${hms.second}:`}</Form.Label>
                  <Form.Select onChange={(e) => setSeconds(e.target.value)}>
                    {[...Array(60)].map((_, i) => (
                      <option key={i} value={i}>
                        {i}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col className="d-flex align-items-center">
                <DropdownButton
                  // value={selectedSound}
                  // onClick={handleSoundSelect}
                  size="sm"
                  variant="success"
                  title={getSelectedSoundLabel()}
                >
                  {/* <option>Select a sound...</option> */}
                  {renderSoundOptions()}
                </DropdownButton>
                <Button variant="success" onClick={playSound}>
                  <FontAwesomeIcon icon={faPlay} />
                </Button>
                <Button
                  variant="success"
                  onClick={handleStopSound}
                  disabled={!sound}
                >
                  <FontAwesomeIcon icon={faStop} />
                </Button>
              </Col>
            </Row>
          </Stack>
        </Col>
        <Col></Col>
      </Row>

      <Row>
        <Col></Col>
        <Col className="egg-options" xs={5}>
          <Tabs
            defaultActiveKey={labels.boiledegg}
            style={{ fontSize: "1.7em" }}
            id="justify-tab-example"
            className="mb-3"
            justify
            onClick={() => {
              stop();
              setEggNames("");
              handleStopSound();
            }}
          >
            <Tab eventKey={labels.boiledegg} title={labels.boiledegg}>
              <Stack gap={2} className="col-md-5 mx-auto">
                <Button
                  variant="warning"
                  onClick={() => {
                    setDuration(6 * 60);
                    setEggNames(labels.soft);
                    setHasTimerStarted(true);
                  }}
                >
                  {labels.soft} <FontAwesomeIcon icon={faEgg} />
                </Button>
                <Button
                  variant="warning"
                  onClick={() => {
                    setDuration(9 * 60);
                    setEggNames(labels.medium);
                  }}
                >
                  {labels.medium} <FontAwesomeIcon icon={faEgg} />
                </Button>
                <Button
                  variant="warning"
                  onClick={() => {
                    setDuration(12 * 60);
                    setEggNames(labels.hard);
                  }}
                >
                  {labels.hard} <FontAwesomeIcon icon={faEgg} />
                </Button>
              </Stack>
            </Tab>
            <Tab eventKey={pastaNames.pasta} title={pastaNames.pasta}>
              <Tab.Container id="left-tabs-example" defaultActiveKey="스파게티">
                <Row>
                  <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link
                          eventKey="스파게티"
                          style={{ fontSize: "1.2em" }}
                        >
                          {pastaNames.spaghetti}
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          eventKey="링귀니"
                          style={{ fontSize: "1.2em" }}
                        >
                          {pastaNames.linguine}
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          eventKey="마팔데"
                          style={{ fontSize: "1.2em" }}
                        >
                          {pastaNames.mafalde} <img src={마팔데} width="20%" />
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          eventKey="페투치네"
                          style={{ fontSize: "1.2em" }}
                        >
                          {pastaNames.fettuccine}{" "}
                          <img src={페투치네} width="17%" />
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          eventKey="탈리아텔레"
                          style={{ fontSize: "1.2em" }}
                        >
                          {pastaNames.tagliatelle}{" "}
                          <img src={탈리아텔레} width="20%" />
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          eventKey="리가토니"
                          style={{ fontSize: "1.2em" }}
                        >
                          {pastaNames.rigatoni}{" "}
                          <img src={리가토니} width="20%" />
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          eventKey="마카로니"
                          style={{ fontSize: "1.2em" }}
                        >
                          {pastaNames.macaroni}{" "}
                          <img src={마카로니} width="20%" />
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="펜네" style={{ fontSize: "1.2em" }}>
                          {pastaNames.penne} <img src={펜네} width="20%" />
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          eventKey="파르팔레"
                          style={{ fontSize: "1.2em" }}
                        >
                          {pastaNames.farfalle}{" "}
                          <img src={파르팔레} width="20%" />
                        </Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Nav.Link
                          eventKey="푸실리"
                          style={{ fontSize: "1.2em" }}
                        >
                          {pastaNames.fusilli} <img src={푸실리} width="20%" />
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          eventKey="콘킬리에"
                          style={{ fontSize: "1.2em" }}
                        >
                          {pastaNames.conchiglie}{" "}
                          <img src={콘킬리에} width="20%" />
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          eventKey="프레골라"
                          style={{ fontSize: "1.2em" }}
                        >
                          {pastaNames.fregola}{" "}
                          <img src={프레골라} width="20%" />
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={9}>
                    <Tab.Content>
                      <Tab.Pane eventKey="스파게티">
                        <Stack gap={2} className="col-md-5 mx-auto">
                          <Button
                            variant="warning"
                            onClick={() => {
                              setDuration(8 * 60);
                              setEggNames(pastaNames.spaghetti);
                            }}
                          >
                            {degreeNames.unripe}
                          </Button>
                          <Button
                            variant="warning"
                            onClick={() => {
                              setDuration(9 * 60);
                              setEggNames(pastaNames.spaghetti);
                            }}
                          >
                            {degreeNames.chewy}
                          </Button>
                          <Button
                            variant="warning"
                            onClick={() => {
                              setDuration(10 * 60);
                              setEggNames(pastaNames.spaghetti);
                            }}
                          >
                            {degreeNames.welldone}
                          </Button>
                        </Stack>
                      </Tab.Pane>
                      <Tab.Pane eventKey="페투치네">
                        <Stack gap={2} className="col-md-5 mx-auto">
                          <Button
                            variant="warning"
                            onClick={() => {
                              setDuration(8 * 60);
                              setEggNames(pastaNames.fettuccine);
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                          >
                            {degreeNames.unripe}
                          </Button>
                          <Button
                            variant="warning"
                            onClick={() => {
                              setDuration(10 * 60);
                              setEggNames(pastaNames.fettuccine);
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                          >
                            {degreeNames.chewy}
                          </Button>
                          <Button
                            variant="warning"
                            onClick={() => {
                              setDuration(12 * 60);
                              setEggNames(pastaNames.fettuccine);
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                          >
                            {degreeNames.welldone}
                          </Button>
                        </Stack>
                      </Tab.Pane>
                      <Tab.Pane eventKey="펜네">
                        <Stack gap={2} className="col-md-5 mx-auto">
                          <Button
                            variant="warning"
                            onClick={() => {
                              setDuration(8 * 60);
                              setEggNames(pastaNames.penne);
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                          >
                            {degreeNames.unripe}
                          </Button>
                          <Button
                            variant="warning"
                            onClick={() => {
                              setDuration(10 * 60);
                              setEggNames(pastaNames.penne);
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                          >
                            {degreeNames.chewy}
                          </Button>
                          <Button
                            variant="warning"
                            onClick={() => {
                              setDuration(12 * 60);
                              setEggNames(pastaNames.penne);
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                          >
                            {degreeNames.welldone}
                          </Button>
                        </Stack>
                      </Tab.Pane>
                      <Tab.Pane eventKey="파르팔레">
                        <Stack gap={2} className="col-md-5 mx-auto">
                          <Button
                            variant="warning"
                            onClick={() => {
                              setDuration(9 * 60);
                              setEggNames(pastaNames.farfalle);
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                          >
                            {degreeNames.unripe}
                          </Button>
                          <Button
                            variant="warning"
                            onClick={() => {
                              setDuration(11 * 60);
                              setEggNames(pastaNames.farfalle);
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                          >
                            {degreeNames.chewy}
                          </Button>
                          <Button
                            variant="warning"
                            onClick={() => {
                              setDuration(13 * 60);
                              setEggNames(pastaNames.farfalle);
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                          >
                            {degreeNames.welldone}
                          </Button>
                        </Stack>
                      </Tab.Pane>
                      <Tab.Pane eventKey="링귀니">
                        <Stack gap={2} className="col-md-5 mx-auto">
                          <Button
                            variant="warning"
                            onClick={() => {
                              setDuration(8 * 60);
                              setEggNames(pastaNames.linguine);
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                          >
                            {degreeNames.unripe}
                          </Button>
                          <Button
                            variant="warning"
                            onClick={() => {
                              setDuration(9 * 60);
                              setEggNames(pastaNames.linguine);
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                          >
                            {degreeNames.chewy}
                          </Button>
                          <Button
                            variant="warning"
                            onClick={() => {
                              setDuration(11 * 60);
                              setEggNames(pastaNames.linguine);
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                          >
                            {degreeNames.welldone}
                          </Button>
                        </Stack>
                      </Tab.Pane>
                      <Tab.Pane eventKey="푸실리">
                        <Stack gap={2} className="col-md-5 mx-auto">
                          <Button
                            variant="warning"
                            onClick={() => {
                              setDuration(9 * 60);
                              setEggNames(pastaNames.fusilli);
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                          >
                            {degreeNames.unripe}
                          </Button>
                          <Button
                            variant="warning"
                            onClick={() => {
                              setDuration(10 * 60);
                              setEggNames(pastaNames.fusilli);
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                          >
                            {degreeNames.chewy}
                          </Button>
                          <Button
                            variant="warning"
                            onClick={() => {
                              setDuration(12 * 60);
                              setEggNames(pastaNames.fusilli);
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                          >
                            {degreeNames.welldone}
                          </Button>
                        </Stack>
                      </Tab.Pane>
                      <Tab.Pane eventKey="마팔데">
                        <Stack gap={2} className="col-md-5 mx-auto">
                          <Button
                            variant="warning"
                            onClick={() => {
                              setDuration(10 * 60);
                              setEggNames(pastaNames.mafalde);
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                          >
                            {degreeNames.unripe}
                          </Button>
                          <Button
                            variant="warning"
                            onClick={() => {
                              setDuration(11 * 60);
                              setEggNames(pastaNames.mafalde);
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                          >
                            {degreeNames.chewy}
                          </Button>
                          <Button
                            variant="warning"
                            onClick={() => {
                              setDuration(12 * 60);
                              setEggNames(pastaNames.mafalde);
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                          >
                            {degreeNames.welldone}
                          </Button>
                        </Stack>
                      </Tab.Pane>
                      <Tab.Pane eventKey="탈리아텔레">
                        <Stack gap={2} className="col-md-5 mx-auto">
                          <Button
                            variant="warning"
                            onClick={() => {
                              setDuration(9 * 60);
                              setEggNames(pastaNames.tagliatelle);
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                          >
                            {degreeNames.unripe}
                          </Button>
                          <Button
                            variant="warning"
                            onClick={() => {
                              setDuration(10 * 60);
                              setEggNames(pastaNames.tagliatelle);
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                          >
                            {degreeNames.chewy}
                          </Button>
                          <Button
                            variant="warning"
                            onClick={() => {
                              setDuration(11 * 60);
                              setEggNames(pastaNames.tagliatelle);
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                          >
                            {degreeNames.welldone}
                          </Button>
                        </Stack>
                      </Tab.Pane>
                      <Tab.Pane eventKey="리가토니">
                        <Stack gap={2} className="col-md-5 mx-auto">
                          <Button
                            variant="warning"
                            onClick={() => {
                              setDuration(12 * 60);
                              setEggNames(pastaNames.rigatoni);
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                          >
                            {degreeNames.unripe}
                          </Button>
                          <Button
                            variant="warning"
                            onClick={() => {
                              setDuration(13 * 60);
                              setEggNames(pastaNames.rigatoni);
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                          >
                            {degreeNames.chewy}
                          </Button>
                          <Button
                            variant="warning"
                            onClick={() => {
                              setDuration(14 * 60);
                              setEggNames(pastaNames.rigatoni);
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                          >
                            {degreeNames.welldone}
                          </Button>
                        </Stack>
                      </Tab.Pane>
                      <Tab.Pane eventKey="마카로니">
                        <Stack gap={2} className="col-md-5 mx-auto">
                          <Button
                            variant="warning"
                            onClick={() => {
                              setDuration(11 * 60);
                              setEggNames(pastaNames.rigatoni);
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                          >
                            {degreeNames.unripe}
                          </Button>
                          <Button
                            variant="warning"
                            onClick={() => {
                              setDuration(12 * 60);
                              setEggNames(pastaNames.rigatoni);
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                          >
                            {degreeNames.chewy}
                          </Button>
                          <Button
                            variant="warning"
                            onClick={() => {
                              setDuration(13 * 60);
                              setEggNames(pastaNames.rigatoni);
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                          >
                            {degreeNames.welldone}
                          </Button>
                        </Stack>
                      </Tab.Pane>
                      <Tab.Pane eventKey="콘킬리에">
                        <Stack gap={2} className="col-md-5 mx-auto">
                          <Button
                            variant="warning"
                            onClick={() => {
                              setDuration(12 * 60);
                              setEggNames(pastaNames.conchiglie);
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                          >
                            {degreeNames.unripe}
                          </Button>
                          <Button
                            variant="warning"
                            onClick={() => {
                              setDuration(13 * 60);
                              setEggNames(pastaNames.conchiglie);
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                          >
                            {degreeNames.chewy}
                          </Button>
                          <Button
                            variant="warning"
                            onClick={() => {
                              setDuration(14 * 60);
                              setEggNames(pastaNames.conchiglie);
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                          >
                            {degreeNames.welldone}
                          </Button>
                        </Stack>
                      </Tab.Pane>
                      <Tab.Pane eventKey="프레골라">
                        <Stack gap={2} className="col-md-5 mx-auto">
                          <Button
                            variant="warning"
                            onClick={() => {
                              setDuration(10 * 60);
                              setEggNames(pastaNames.fregola);
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                          >
                            {degreeNames.unripe}
                          </Button>
                          <Button
                            variant="warning"
                            onClick={() => {
                              setDuration(11 * 60);
                              setEggNames(pastaNames.fregola);
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                          >
                            {degreeNames.chewy}
                          </Button>
                          <Button
                            variant="warning"
                            onClick={() => {
                              setDuration(12 * 60);
                              setEggNames(pastaNames.fregola);
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                          >
                            {degreeNames.welldone}
                          </Button>
                        </Stack>
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </Tab>
            <Tab eventKey="타이머" title={timeLabel.name}>
              <Tab.Container id="left-tabs-example" defaultActiveKey="초">
                <Row>
                  <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey="초" style={{ fontSize: "1.2em" }}>
                          {hms.second}
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="분" style={{ fontSize: "1.2em" }}>
                          {hms.minute}
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="시" style={{ fontSize: "1.2em" }}>
                          {hms.hour}
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={9}>
                    <Tab.Content>
                      <Tab.Pane eventKey="초">
                        <Row>
                          <Col>
                            <Stack gap={2} className="col-md-10 mx-auto">
                              <Button
                                variant="warning"
                                onClick={() => {
                                  setDuration(3);
                                  setEggNames(timeLabel.a3);
                                  setHasTimerStarted(true);
                                }}
                              >
                                {timeLabel.a3}
                              </Button>
                              <Button
                                variant="warning"
                                onClick={() => {
                                  setDuration(5);
                                  setEggNames(timeLabel.a2);
                                  setHasTimerStarted(true);
                                }}
                              >
                                {timeLabel.a2}
                              </Button>
                              <Button
                                variant="warning"
                                onClick={() => {
                                  setDuration(10);
                                  setEggNames(timeLabel.a1);
                                  setHasTimerStarted(true);
                                }}
                              >
                                {timeLabel.a1}
                              </Button>
                              <Button
                                variant="warning"
                                onClick={() => {
                                  setDuration(15);
                                  setEggNames(timeLabel.a);
                                  setHasTimerStarted(true);
                                }}
                              >
                                {timeLabel.a}
                              </Button>
                              <Button
                                variant="warning"
                                onClick={() => {
                                  setDuration(20);
                                  setEggNames(timeLabel.b);
                                  setHasTimerStarted(true);
                                  window.scrollTo({
                                    top: 0,
                                    behavior: "smooth",
                                  });
                                }}
                              >
                                {timeLabel.b}
                              </Button>
                            </Stack>
                          </Col>
                          <Col>
                            <Stack gap={2} className="col-md-10 mx-auto">
                              <Button
                                variant="warning"
                                onClick={() => {
                                  setDuration(30);
                                  setEggNames(timeLabel.c);
                                  setHasTimerStarted(true);
                                }}
                              >
                                {timeLabel.c}
                              </Button>
                              <Button
                                variant="warning"
                                onClick={() => {
                                  setDuration(45);
                                  setEggNames(timeLabel.d);
                                  setHasTimerStarted(true);
                                }}
                              >
                                {timeLabel.d}
                              </Button>
                              <Button
                                variant="warning"
                                onClick={() => {
                                  setDuration(60);
                                  setEggNames(timeLabel.e);
                                  setHasTimerStarted(true);
                                }}
                              >
                                {timeLabel.e}
                              </Button>
                              <Button
                                variant="warning"
                                onClick={() => {
                                  setDuration(90);
                                  setEggNames(timeLabel.f);
                                  setHasTimerStarted(true);
                                }}
                              >
                                {timeLabel.f}
                              </Button>
                              <Button
                                variant="warning"
                                onClick={() => {
                                  setDuration(100);
                                  setEggNames(timeLabel.f1);
                                  setHasTimerStarted(true);
                                  window.scrollTo({
                                    top: 0,
                                    behavior: "smooth",
                                  });
                                }}
                              >
                                {timeLabel.f1}
                              </Button>
                            </Stack>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="분">
                        <Row>
                          <Col>
                            <Stack gap={2} className="col-md-10 mx-auto">
                              <Button
                                variant="warning"
                                onClick={() => {
                                  setDuration(120);
                                  setEggNames(timeLabel.f2);
                                  setHasTimerStarted(true);
                                }}
                              >
                                {timeLabel.f2}
                              </Button>
                              <Button
                                variant="warning"
                                onClick={() => {
                                  setDuration(180);
                                  setEggNames(timeLabel.g);
                                  setHasTimerStarted(true);
                                }}
                              >
                                {timeLabel.g}
                              </Button>
                              <Button
                                variant="warning"
                                onClick={() => {
                                  setDuration(240);
                                  setEggNames(timeLabel.g1);
                                  setHasTimerStarted(true);
                                }}
                              >
                                {timeLabel.g1}
                              </Button>
                              <Button
                                variant="warning"
                                onClick={() => {
                                  setDuration(300);
                                  setEggNames(timeLabel.h);
                                  setHasTimerStarted(true);
                                }}
                              >
                                {timeLabel.h}
                              </Button>
                              <Button
                                variant="warning"
                                onClick={() => {
                                  setDuration(600);
                                  setEggNames(timeLabel.i);
                                  setHasTimerStarted(true);
                                  window.scrollTo({
                                    top: 0,
                                    behavior: "smooth",
                                  });
                                }}
                              >
                                {timeLabel.i}
                              </Button>
                            </Stack>
                          </Col>
                          <Col>
                            <Stack gap={2} className="col-md-10 mx-auto">
                              <Button
                                variant="warning"
                                onClick={() => {
                                  setDuration(900);
                                  setEggNames(timeLabel.j);
                                  setHasTimerStarted(true);
                                }}
                              >
                                {timeLabel.j}
                              </Button>
                              <Button
                                variant="warning"
                                onClick={() => {
                                  setDuration(1200);
                                  setEggNames(timeLabel.k);
                                  setHasTimerStarted(true);
                                }}
                              >
                                {timeLabel.k}
                              </Button>
                              <Button
                                variant="warning"
                                onClick={() => {
                                  setDuration(1800);
                                  setEggNames(timeLabel.l);
                                  setHasTimerStarted(true);
                                }}
                              >
                                {timeLabel.l}
                              </Button>
                              <Button
                                variant="warning"
                                onClick={() => {
                                  setDuration(2700);
                                  setEggNames(timeLabel.m);
                                  setHasTimerStarted(true);
                                }}
                              >
                                {timeLabel.m}
                              </Button>
                              <Button
                                variant="warning"
                                onClick={() => {
                                  setDuration(3000);
                                  setEggNames(timeLabel.m1);
                                  setHasTimerStarted(true);
                                  window.scrollTo({
                                    top: 0,
                                    behavior: "smooth",
                                  });
                                }}
                              >
                                {timeLabel.m1}
                              </Button>
                            </Stack>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="시">
                        <Row>
                          <Col>
                            <Stack gap={2} className="col-md-10 mx-auto">
                              <Button
                                variant="warning"
                                onClick={() => {
                                  setDuration(3600);
                                  setEggNames(timeLabel.n);
                                  setHasTimerStarted(true);
                                }}
                              >
                                {timeLabel.n}
                              </Button>
                              <Button
                                variant="warning"
                                onClick={() => {
                                  setDuration(5400);
                                  setEggNames(timeLabel.o);
                                  setHasTimerStarted(true);
                                }}
                              >
                                {timeLabel.o}
                              </Button>
                              <Button
                                variant="warning"
                                onClick={() => {
                                  setDuration(7200);
                                  setEggNames(timeLabel.p);
                                  setHasTimerStarted(true);
                                }}
                              >
                                {timeLabel.p}
                              </Button>
                              <Button
                                variant="warning"
                                onClick={() => {
                                  setDuration(10800);
                                  setEggNames(timeLabel.q);
                                  setHasTimerStarted(true);
                                }}
                              >
                                {timeLabel.q}
                              </Button>
                              <Button
                                variant="warning"
                                onClick={() => {
                                  setDuration(14400);
                                  setEggNames(timeLabel.r);
                                  setHasTimerStarted(true);
                                  window.scrollTo({
                                    top: 0,
                                    behavior: "smooth",
                                  });
                                }}
                              >
                                {timeLabel.r}
                              </Button>
                            </Stack>
                          </Col>
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </Tab>
            <Tab eventKey="신라면" title="Shin Ramyun">
              <Stack gap={2} className="col-md-5 mx-auto">
                <Button variant="warning" onClick={() => setDuration(5 * 60)}>
                  辛
                </Button>
              </Stack>
            </Tab>
          </Tabs>
        </Col>
        <Col></Col>
      </Row>
    </>
  );
};

export default EggTimer;
