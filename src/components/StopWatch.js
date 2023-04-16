import React, { useState, useRef } from "react";
import { Button, Table } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Stack } from "react-bootstrap";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [lapTime, setLapTime] = useState(0);
  const [timerId, setTimerId] = useState(null);
  const [laps, setLaps] = useState([]);

  const isRunning = useRef(false);

  const startTimer = () => {
    isRunning.current = true;
    setTimerId(
      setInterval(() => {
        setTime((prevTime) => prevTime + 10);
        setLapTime((prevLapTime) => prevLapTime + 10);
      }, 10)
    );
  };

  const stopTimer = () => {
    isRunning.current = false;
    clearInterval(timerId);
    setTimerId(null);
  };

  const resetTimer = () => {
    setTime(0);
    setLapTime(0);
    setLaps([]);
  };

  const lapTimer = () => {
    const lap = { lapNumber: laps.length + 1, lapTime, totalTime: time };
    setLaps((prevLaps) => [...prevLaps, lap]);
    setLapTime(0);
  };

  const formatTime = (timeMs) => {
    const minutes = Math.floor(timeMs / 60000);
    const seconds = Math.floor((timeMs % 60000) / 1000);
    const milliseconds = Math.floor((timeMs % 1000) / 10);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}.${milliseconds.toString().padStart(2, "0")}`;
  };

  return (
    <>
      <Row>
        <Col className="mainTimer">
          <h1>StopWatch</h1>
        </Col>
      </Row>
      <Row>
        <Col></Col>
        <Col className="stop-container">
          <Stack className="stop-timer">
            <Row className="time-passed mainTimer">
              <h3>Elapsed time</h3>
              <h1>{formatTime(time)}</h1>
            </Row>
            <Row className="time-passed mainTimer">
              <h3>Lap time</h3>
              <h1>{formatTime(lapTime)}</h1>
            </Row>
            <Row>
              <Col
                style={{
                  justifyContent: "center",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                {!timerId && (
                  <>
                    <Button size="lg" variant="primary" onClick={startTimer}>
                      {time === 0 ? "Start" : "Continue"}
                    </Button>
                    <Button size="lg" variant="primary" onClick={resetTimer}>
                      Initialize
                    </Button>
                  </>
                )}
                {timerId && (
                  <>
                    <Button variant="warning" onClick={stopTimer}>
                      Pause
                    </Button>
                    <Button variant="warning" onClick={lapTimer}>
                      Lap
                    </Button>
                    <Button variant="warning" onClick={resetTimer}>
                      Initialize
                    </Button>
                  </>
                )}
                {/* {!timerId &&
          <>
          <Button variant="primary" onClick={resetTimer}>
            Initialize
          </Button>
          <Button variant="primary" onClick={startTimer}>
            Continue
          </Button> 
        </>}*/}
              </Col>
            </Row>
            {laps.length > 0 && (
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Lap time</th>
                    <th>Elapsed time</th>
                  </tr>
                </thead>
                <tbody>
                  {laps.map((lap) => (
                    <tr key={lap.lapNumber}>
                      <td>{lap.lapNumber}</td>
                      <td>{formatTime(lap.lapTime)}</td>
                      <td>{formatTime(lap.totalTime)}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </Stack>
        </Col>
        <Col></Col>
      </Row>
    </>
  );
};

export default StopWatch;
