# CookingTimer 프로젝트 계획서

## 1. 프로젝트 개요

- **이름**: CookingTimer (cookkingtimer)
- **버전**: 0.1.0
- **설명**: 달걀·파스타·일반 요리용 타이머 및 스톱워치를 제공하는 React 웹 앱
- **기술 스택**: React 18, React Router v6, React Bootstrap, Howler(오디오), FontAwesome

---

## 2. 프로젝트 구조

```
cookingtimer/
├── public/
│   ├── index.html          # 앱 진입점 HTML
│   ├── manifest.json       # PWA 매니페스트
│   ├── site.webmanifest
│   ├── robots.txt
│   └── about.txt
├── src/
│   ├── index.js            # React 루트, BrowserRouter, ThemeProvider
│   ├── index.css           # 전역 스타일
│   ├── App.js               # 라우팅 및 언어 상태
│   ├── App.css
│   ├── App.test.js          # 기본 테스트
│   ├── reportWebVitals.js
│   ├── setupTests.js
│   ├── components/
│   │   ├── NavBarComponent.js   # 상단 네비게이션 + 언어 선택
│   │   ├── CookingTimer.js      # 요리 타이머 페이지 (다국어 레이블)
│   │   ├── EggTimer.js          # 타이머 UI (달걀/파스타/일반 타이머)
│   │   └── StopWatch.js         # 스톱워치 페이지
│   └── pasta/                   # 파스타 이미지 에셋
│       ├── 리가토니.png, 펜네.png, 파르팔레.png 등
│       └── noun-spaghetti-1723772.svg
├── package.json
├── .gitignore
└── README.md
```

---

## 3. 라우팅 구조

| 경로 | 컴포넌트 | 설명 |
|------|----------|------|
| `/` | CookingTimer | 메인 요리 타이머 |
| `/cookingtimer/:lang` | CookingTimer | 언어별 요리 타이머 |
| `/stopwatch/:lang` | StopWatch | 스톱워치 |

**주석 처리된(미구현) 라우트**: GeneralTimer, Alarm, PresentTime, Sound, Test, WorldTime

---

## 4. 주요 기능

### 4.1 네비게이션 (NavBarComponent)

- **브랜드**: "CookingTimer" → `/` 링크
- **메뉴**: StopWatch 링크 (`/stopwatch/:lang`)
- **언어 선택**: 드롭다운으로 21개 언어 지원 (한국어, 영어, 일본어, 중국어(간체/번체), 독일어, 프랑스어, 스페인어, 포르투갈어, 태국어, 인도네시아어, 아랍어, 힌디어, 터키어, 베트남어, 러시아어, 이탈리아어, 폴란드어, 스웨덴어, 덴마크어, 네덜란드어)
- 언어 변경 시 `setLanguage` 호출 및 `/cookingtimer/:lang`로 이동

### 4.2 요리 타이머 (CookingTimer + EggTimer)

- **다국어**: 위 21개 언어에 대해 화면 텍스트(타이머 이름, 달걀/파스타/시간 단위 등) 번역 객체 유지
- **EggTimer 하위 기능**:
  1. **달걀 타이머 (Boiled Eggs)**
     - 수란(6분), 반숙(9분), 완숙(12분) 프리셋
  2. **파스타 타이머 (Pasta)**
     - 종류: 스파게티, 링귀니, 마팔데, 페투치네, 탈리아텔레, 리가토니, 마카로니, 펜네, 파르팔레, 푸실리, 콘킬리에, 프레골라
     - 익힘 정도: Unripe(덜 익음), Chewy/Al dente(알 덴테), Well done(잘 익음) — 종류별로 다른 시간 프리셋
  3. **일반 타이머 (Timer)**
     - 초: 3초 ~ 100초
     - 분: 2분 ~ 50분
     - 시: 1시간 ~ 4시간
  4. **Shin Ramyun**
     - 5분(辛) 단일 버튼
- **직접 시간 입력**: 시/분/초 드롭다운 (0~23시, 0~59분, 0~59초)
- **재생/일시정지/정지**: Play, Pause, Stop 버튼
- **알람 소리**: Howler 사용, Google 오디오 샘플 4종 + None 선택, 타이머 종료 시 재생(선택 시), 반복 재생
- **표시**: 남은 시간 HH:MM:SS, 선택한 요리명(예: 수란, 스파게티)

### 4.3 스톱워치 (StopWatch)

- **경과 시간**: 시작 후 흐른 시간 (MM:SS.ms, 10ms 단위)
- **랩 타임**: 마지막 랩 이후 시간
- **버튼**: Start/Continue, Pause, Lap, Initialize
- **랩 테이블**: 랩 번호, 랩 타임, 경과 시간 기록 (다크 테이블)

---

## 5. 의존성 요약

| 패키지 | 용도 |
|--------|------|
| react, react-dom | UI |
| react-router-dom, react-router-bootstrap | 라우팅, Nav 링크 |
| react-bootstrap, bootstrap | 레이아웃·컴포넌트 |
| @fortawesome/* | 아이콘 (Play, Pause, Stop, Egg, Music, Language) |
| howler | 알람 오디오 재생 |

---

## 6. 상태 관리

- **App**: `language` (기본 "ko"), `setLanguage` → NavBar, CookingTimer에 props로 전달
- **CookingTimer**: `selectedDuration` (현재 미사용), 다국어 레이블 객체
- **EggTimer**: `timeLeft`, `timerActive`, `eggNames`, `duration`, `hours/minutes/seconds`, `hasTimerStarted`, `selectedSound`, `sound`
- **StopWatch**: `time`, `lapTime`, `timerId`, `laps`, `isRunning`(ref)

---

## 7. 알려진 이슈·개선 포인트 (반영 완료)

- ~~**CookingTimer**: `handleOptionSelected`, `selectedDuration` 미사용**~~ → 제거 완료
- ~~**EggTimer**: 마카로니 탭에서 `pastaNames.rigatoni` 사용**~~ → `pastaNames.macaroni`로 수정 완료
- ~~**EggTimer**: `useEffect` 의존성에 `formatTime` 포함**~~ → 잘못된 `clearInterval(formatTime)` 제거 완료
- ~~**테스트**: App.test.js는 "learn react" 텍스트 검색**~~ → 네비·요리 타이머 제목 검사로 변경 완료
- ~~**다국어**: StopWatch는 영어 고정**~~ → 21개 언어 레이블 추가, `language`/URL `:lang` 반영 완료

---

## 8. 스크립트

- `npm start` — 개발 서버 (기본 http://localhost:3000)
- `npm run build` — 프로덕션 빌드
- `npm test` — Jest + React Testing Library

---

## 9. 향후 확장 (주석 기준)

- General Timer (`/generaltimer/:lang`)
- Alarm (`/alarm/:lang`)
- Present Time (`/presentime/:lang`)
- Sound (`/sound/:lang`)
- World Time (`/worldtime/:lang`)
- Test 페이지

이 문서는 현재 코드베이스 기준으로 작성되었으며, 기능 추가·리팩터 시 이 계획서를 함께 갱신하는 것을 권장합니다.
