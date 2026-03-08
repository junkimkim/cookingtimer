import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { Button, Table } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Stack } from "react-bootstrap";

const stopwatchLabels = {
  en: {
    title: "StopWatch",
    elapsedTime: "Elapsed time",
    lapTime: "Lap time",
    start: "Start",
    continue: "Continue",
    pause: "Pause",
    lap: "Lap",
    initialize: "Initialize",
  },
  ko: {
    title: "스톱워치",
    elapsedTime: "경과 시간",
    lapTime: "랩 타임",
    start: "시작",
    continue: "재개",
    pause: "일시정지",
    lap: "랩",
    initialize: "초기화",
  },
  ja: {
    title: "ストップウォッチ",
    elapsedTime: "経過時間",
    lapTime: "ラップタイム",
    start: "開始",
    continue: "再開",
    pause: "一時停止",
    lap: "ラップ",
    initialize: "リセット",
  },
  zh: {
    title: "秒表",
    elapsedTime: "经过时间",
    lapTime: "单圈时间",
    start: "开始",
    continue: "继续",
    pause: "暂停",
    lap: "计圈",
    initialize: "重置",
  },
  "zh-TW": {
    title: "碼表",
    elapsedTime: "經過時間",
    lapTime: "單圈時間",
    start: "開始",
    continue: "繼續",
    pause: "暫停",
    lap: "計圈",
    initialize: "重置",
  },
  de: {
    title: "Stoppuhr",
    elapsedTime: "Verstrichene Zeit",
    lapTime: "Rundenzeit",
    start: "Start",
    continue: "Fortsetzen",
    pause: "Pause",
    lap: "Runde",
    initialize: "Zurücksetzen",
  },
  fr: {
    title: "Chronomètre",
    elapsedTime: "Temps écoulé",
    lapTime: "Temps du tour",
    start: "Démarrer",
    continue: "Reprendre",
    pause: "Pause",
    lap: "Tour",
    initialize: "Réinitialiser",
  },
  es: {
    title: "Cronómetro",
    elapsedTime: "Tiempo transcurrido",
    lapTime: "Tiempo de vuelta",
    start: "Iniciar",
    continue: "Continuar",
    pause: "Pausar",
    lap: "Vuelta",
    initialize: "Reiniciar",
  },
  pt: {
    title: "Cronômetro",
    elapsedTime: "Tempo decorrido",
    lapTime: "Tempo da volta",
    start: "Iniciar",
    continue: "Continuar",
    pause: "Pausar",
    lap: "Volta",
    initialize: "Reiniciar",
  },
  th: {
    title: "จับเวลา",
    elapsedTime: "เวลาที่ผ่านไป",
    lapTime: "เวลารอบ",
    start: "เริ่ม",
    continue: "ดำเนินการต่อ",
    pause: "หยุดชั่วคราว",
    lap: "รอบ",
    initialize: "รีเซ็ต",
  },
  id: {
    title: "Stopwatch",
    elapsedTime: "Waktu yang berlalu",
    lapTime: "Waktu putaran",
    start: "Mulai",
    continue: "Lanjutkan",
    pause: "Jeda",
    lap: "Putaran",
    initialize: "Atur ulang",
  },
  ar: {
    title: "ساعة توقيت",
    elapsedTime: "الوقت المنقضي",
    lapTime: "وقت اللفة",
    start: "بدء",
    continue: "متابعة",
    pause: "إيقاف مؤقت",
    lap: "لفة",
    initialize: "إعادة تعيين",
  },
  hi: {
    title: "स्टॉपवॉच",
    elapsedTime: "बीता हुआ समय",
    lapTime: "लैप समय",
    start: "शुरू",
    continue: "जारी रखें",
    pause: "विराम",
    lap: "लैप",
    initialize: "रीसेट",
  },
  tr: {
    title: "Kronometre",
    elapsedTime: "Geçen süre",
    lapTime: "Tur süresi",
    start: "Başlat",
    continue: "Devam",
    pause: "Duraklat",
    lap: "Tur",
    initialize: "Sıfırla",
  },
  vi: {
    title: "Đồng hồ bấm giờ",
    elapsedTime: "Thời gian đã trôi",
    lapTime: "Thời gian vòng",
    start: "Bắt đầu",
    continue: "Tiếp tục",
    pause: "Tạm dừng",
    lap: "Vòng",
    initialize: "Đặt lại",
  },
  ru: {
    title: "Секундомер",
    elapsedTime: "Прошедшее время",
    lapTime: "Время круга",
    start: "Старт",
    continue: "Продолжить",
    pause: "Пауза",
    lap: "Круг",
    initialize: "Сброс",
  },
  it: {
    title: "Cronometro",
    elapsedTime: "Tempo trascorso",
    lapTime: "Tempo giro",
    start: "Avvia",
    continue: "Riprendi",
    pause: "Pausa",
    lap: "Giro",
    initialize: "Reimposta",
  },
  pl: {
    title: "Stoper",
    elapsedTime: "Czas upłynął",
    lapTime: "Czas okrążenia",
    start: "Start",
    continue: "Kontynuuj",
    pause: "Wstrzymaj",
    lap: "Okrążenie",
    initialize: "Reset",
  },
  sv: {
    title: "Stoppur",
    elapsedTime: "Förfluten tid",
    lapTime: "Varvtid",
    start: "Starta",
    continue: "Fortsätt",
    pause: "Pausa",
    lap: "Varv",
    initialize: "Återställ",
  },
  da: {
    title: "Stopur",
    elapsedTime: "Forløbet tid",
    lapTime: "Omgangstid",
    start: "Start",
    continue: "Fortsæt",
    pause: "Pause",
    lap: "Omgang",
    initialize: "Nulstil",
  },
  nl: {
    title: "Stopwatch",
    elapsedTime: "Verstreken tijd",
    lapTime: "Rondetijd",
    start: "Start",
    continue: "Doorgaan",
    pause: "Pauzeren",
    lap: "Ronde",
    initialize: "Resetten",
  },
};

const StopWatch = ({ language }) => {
  const { lang } = useParams();
  const currentLang = lang || language || "en";
  const labels = stopwatchLabels[currentLang] || stopwatchLabels.en;
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
    if (timerId) {
      clearInterval(timerId);
      setTimerId(null);
    }
    isRunning.current = false;
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
          <h1>{labels.title}</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8} className="stop-container">
          <Stack className="stop-timer">
            <Row className="time-passed mainTimer">
              <h3>{labels.elapsedTime}</h3>
              <h1>{formatTime(time)}</h1>
            </Row>
            <Row className="time-passed mainTimer">
              <h3>{labels.lapTime}</h3>
              <h1>{formatTime(lapTime)}</h1>
            </Row>
            <Row>
              <Col
                xs={12}
                className="d-flex justify-content-center flex-wrap gap-2"
                style={{ marginTop: "20px", marginBottom: "20px" }}
              >
                {!timerId && (
                  <>
                    <Button size="lg" variant="primary" onClick={startTimer}>
                      {time === 0 ? labels.start : labels.continue}
                    </Button>
                    <Button size="lg" variant="primary" onClick={resetTimer}>
                      {labels.initialize}
                    </Button>
                  </>
                )}
                {timerId && (
                  <>
                    <Button variant="warning" onClick={stopTimer}>
                      {labels.pause}
                    </Button>
                    <Button variant="warning" onClick={lapTimer}>
                      {labels.lap}
                    </Button>
                    <Button variant="warning" onClick={resetTimer}>
                      {labels.initialize}
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
              <div className="table-responsive w-100">
                <Table striped bordered hover variant="dark">
                  <thead>
                  <tr>
                    <th>#</th>
                    <th>{labels.lapTime}</th>
                    <th>{labels.elapsedTime}</th>
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
              </div>
            )}
          </Stack>
        </Col>
      </Row>
    </>
  );
};

export default StopWatch;
