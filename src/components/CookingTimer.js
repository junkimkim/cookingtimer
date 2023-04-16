import React, { useState } from "react";
import EggTimer from "./EggTimer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function CookingTimer({ language }) {
  const eggLabels = {
    en: {
      name: "Cooking Timer",
      boiledegg: "Boiled Eggs",
      soft: "Soft Boiled Eggs",
      medium: "Medium Boiled Eggs",
      hard: "Hard Boiled Eggs",
    },
    pt: {
      name: "Cronômetro de Cozimento",
      boiledegg: "Ovo cozido",
      soft: "Ovos Moles",
      medium: "Ovos Medianamente Cozidos",
      hard: "Ovos Duros",
    },
    th: {
      name: "นาฬิกาจับเวลาการทำอาหาร",
      boiledegg: "ไข่ต้ม",
      soft: "ไข่ต้มนุ่ม",
      medium: "ไข่ต้มปานกลาง",
      hard: "ไข่ต้มแข็ง",
    },
    es: {
      name: "Temporizador de Cocina",
      boiledegg: "Huevo duro",
      soft: "Huevos Pasados por Agua",
      medium: "Huevos Medianamente Cocidos",
      hard: "Huevos Duros",
    },
    id: {
      name: "Timer Memasak",
      boiledegg: "Telur rebus",
      soft: "Telur Rebus Lunak",
      medium: "Telur Rebus Sedang",
      hard: "Telur Rebus Keras",
    },
    ar: {
      name: "مؤقت الطبخ",
      boiledegg: "بيض مسلوقs",
      soft: "بيض مسلوق ناعم",
      medium: "بيض مسلوق متوسط",
      hard: "بيض مسلوق صلب",
    },
    hi: {
      name: "पकाने का टाइमर",
      boiledegg: "उबले हुए अंडे",
      soft: "नरम उबले हुए अंडे",
      medium: "मध्यम उबले हुए अंडे",
      hard: "कठोर उबले हुए अंडे",
    },
    tr: {
      name: "Yemek Pişirme Zamanlayıcısı",
      boiledegg: "Haşlanmış yumurta",
      soft: "Yumuşak Haşlanmış Yumurtalar",
      medium: "Orta Haşlanmış Yumurtalar",
      hard: "Sert Haşlanmış Yumurtalar",
    },
    zh: {
      name: "烹饪计时器",
      boiledegg: "煮鸡蛋",
      soft: "软煮蛋",
      medium: "半熟蛋",
      hard: "硬煮蛋",
    },
    "zh-TW": {
      name: "烹飪計時器",
      boiledegg: "煮雞蛋",
      soft: "軟煮蛋",
      medium: "半熟蛋",
      hard: "硬煮蛋",
    },
    vi: {
      name: "Đồng Hồ Đếm Thời Gian Nấu Ăn",
      boiledegg: "Trứng luộc",
      soft: "Trứng Luộc Mềm",
      medium: "Trứng Luộc Trung Bình",
      hard: "Trứng Luộc Cứng",
    },
    ru: {
      name: "Таймер для приготовления пищи",
      boiledegg: "Вареное яйцо",
      soft: "яйца-пашот",
      medium: "яйца средней степени готовности",
      hard: "вкрутую",
    },
    it: {
      name: "Timer di Cottura",
      boiledegg: "Uovo sodo",
      soft: "Uova Sode Morbide",
      medium: "Uova Sode Medie",
      hard: "Uova Sode Dure",
    },
    pl: {
      name: "Minutnik do gotowania",
      boiledegg: "Ugotowane jajko",
      soft: "Jajka Na Miękko",
      medium: "Jajka Na Średnio",
      hard: "Jajka Na Twardo",
    },
    sv: {
      name: "Matlagningstimer",
      boiledegg: "Kokta Ägg",
      soft: "Mjukkokta Ägg",
      medium: "Mellankokta Ägg",
      hard: "Hårdkokta Ägg",
    },
    da: {
      name: "Madlavningstimer",
      boiledegg: "Kogte Æg",
      soft: "Blødkogte Æg",
      medium: "Mellemkogte Æg",
      hard: "Hårdkogte Æg",
    },
    ko: {
      name: "요리 타이머",
      boiledegg: "삶은 달걀",
      soft: "수란",
      medium: "반숙",
      hard: "완숙",
    },
    de: {
      name: "Kochtimer",
      boiledegg: "Gekochte Eier",
      soft: "Weich gekochte Eier",
      medium: "Mittel gekochte Eier",
      hard: "Hart gekochte Eier",
    },
    nl: {
      name: "Kookwekker",
      boiledegg: "Gekookte Eieren",
      soft: "Zacht Gekookte Eieren",
      medium: "Halfzacht Gekookte Eieren",
      hard: "Hard Gekookte Eieren",
    },
    fr: {
      name: "Minuteur de Cuisine",
      boiledegg: "Oeufs bouillis",
      soft: "Œufs à la Coque",
      medium: "Œufs Mollets",
      hard: "Œufs Durs",
    },
    ja: {
      name: "調理タイマー",
      boiledegg: "ゆで卵",
      soft: "ゆで卵（やわらかめ）",
      medium: "ゆで卵（中）",
      hard: "ゆで卵（かため）",
    },
  };

  const translations = {
    en: {
      hour: "hour",
      minute: "minute",
      second: "second",
    },
    pt: {
      hour: "hora",
      minute: "minuto",
      second: "segundo",
    },
    th: {
      hour: "ชั่วโมง",
      minute: "นาที",
      second: "วินาที",
    },
    es: {
      hour: "hora",
      minute: "minuto",
      second: "segundo",
    },
    id: {
      hour: "jam",
      minute: "menit",
      second: "detik",
    },
    ar: {
      hour: "ساعة",
      minute: "دقيقة",
      second: "ثانية",
    },
    hi: {
      hour: "घंटा",
      minute: "मिनट",
      second: "सेकंड",
    },
    tr: {
      hour: "saat",
      minute: "dakika",
      second: "saniye",
    },
    zh: {
      hour: "小时",
      minute: "分钟",
      second: "秒",
    },
    "zh-TW": {
      hour: "小時",
      minute: "分鐘",
      second: "秒",
    },
    vi: {
      hour: "giờ",
      minute: "phút",
      second: "giây",
    },
    ru: {
      hour: "час",
      minute: "минута",
      second: "секунда",
    },
    it: {
      hour: "ora",
      minute: "minuto",
      second: "secondo",
    },
    pl: {
      hour: "godzina",
      minute: "minuta",
      second: "sekunda",
    },
    sv: {
      hour: "timme",
      minute: "minut",
      second: "sekund",
    },
    da: {
      hour: "time",
      minute: "minut",
      second: "sekund",
    },
    ko: {
      hour: "시간",
      minute: "분",
      second: "초",
    },
    de: {
      hour: "Stunde",
      minute: "Minute",
      second: "Sekunde",
    },
    nl: {
      hour: "uur",
      minute: "minuut",
      second: "seconde",
    },
    fr: {
      hour: "heure",
      minute: "minute",
      second: "seconde",
    },
    ja: {
      hour: "時間",
      minute: "分",
      second: "秒",
    },
  };

  const pastaLabels = {
    en: {
      name: "Cooking Timer",
      pasta: "Pasta",
      spaghetti: "Spaghetti",
      linguine: "Linguine",
      mafalde: "Mafalde",
      fettuccine: "Fettuccine",
      tagliatelle: "Tagliatelle",
      rigatoni: "Rigatoni",
      macaroni: "Macaroni",
      penne: "Penne",
      farfalle: "Farfalle",
      fusilli: "Fusilli",
      conchiglie: "Conchiglie",
      fregola: "Fregola",
    },
    pt: {
      name: "Cronômetro de Cozimento",
      pasta: "Massa",
      spaghetti: "Espaguete",
      linguine: "Linguine",
      mafalde: "Mafaldine",
      fettuccine: "Fettuccine",
      tagliatelle: "Tagliatelle",
      rigatoni: "Rigatoni",
      macaroni: "Macarrão",
      penne: "Penne",
      farfalle: "Farfalle",
      fusilli: "Fusilli",
      conchiglie: "Conchiglie",
      fregola: "Fregola",
    },
    th: {
      name: "นาฬิกาจับเวลาการทำอาหาร",
      pasta: "พาสต้า",
      spaghetti: "สปาเก็ตตี",
      linguine: "ลิงกวินี",
      mafalde: "มาฟัลเด",
      fettuccine: "เฟตตูชีนี",
      tagliatelle: "ทาลีเอเตล",
      rigatoni: "ริกาโตนี",
      macaroni: "มักกะโรนี",
      penne: "เพนเน่",
      farfalle: "ฟาร์ฟัลล",
      fusilli: "ฟูซิลลี",
      conchiglie: "คอนคิลลี",
      fregola: "เฟรกโกล่า",
    },
    es: {
      name: "Temporizador de Cocina",
      pasta: "Pasta",
      spaghetti: "Espagueti",
      linguine: "Linguine",
      mafalde: "Mafalde",
      fettuccine: "Fettuccine",
      tagliatelle: "Tagliatelle",
      rigatoni: "Rigatoni",
      macaroni: "Macarrones",
      penne: "Penne",
      farfalle: "Farfalle",
      fusilli: "Fusilli",
      conchiglie: "Conchiglie",
      fregola: "Fregola",
    },
    id: {
      name: "Timer Memasak",
      pasta: "Pasta",
      spaghetti: "Spaghetti",
      linguine: "Linguine",
      mafalde: "Mafalde",
      fettuccine: "Fettuccine",
      tagliatelle: "Tagliatelle",
      rigatoni: "Rigatoni",
      macaroni: "Makaroni",
      penne: "Penne",
      farfalle: "Farfalle",
      fusilli: "Fusilli",
      conchiglie: "Conchiglie",
      fregola: "Fregola",
    },
    ar: {
      name: "مؤقت الطبخ",
      pasta: "معكرونة",
      spaghetti: "سباغيتي",
      linguine: "لينجويني",
      mafalde: "مافالدي",
      fettuccine: "فيتوتشيني",
      tagliatelle: "تالياتيلي",
      rigatoni: "ريغاتوني",
      macaroni: "مكرونة",
      penne: "بيني",
      farfalle: "فرفالي",
      fusilli: "فوسيلي",
      conchiglie: "كونكيجلي",
      fregola: "فريجولا",
    },
    hi: {
      name: "पकाने का टाइमर",
      pasta: "पास्ता",
      spaghetti: "स्पगेटी",
      linguine: "लिंगुइन",
      mafalde: "मफ़ाल्दे",
      fettuccine: "फेटुचीनी",
      tagliatelle: "टैगलियाटेले",
      rigatoni: "रिगाटोनी",
      macaroni: "मैकरोनी",
      penne: "पेने",
      farfalle: "फरफ़ाले",
      fusilli: "फ़्यूसिली",
      conchiglie: "कोंकिजली",
      fregola: "फ़्रेगोला",
    },
    tr: {
      name: "Yemek Pişirme Zamanlayıcısı",
      pasta: "Makarna",
      spaghetti: "Spagetti",
      linguine: "Linguine",
      mafalde: "Mafalde",
      fettuccine: "Fettuccine",
      tagliatelle: "Tagliatelle",
      rigatoni: "Rigatoni",
      macaroni: "Makaroni",
      penne: "Penne",
      farfalle: "Farfalle",
      fusilli: "Fusilli",
      conchiglie: "Conchiglie",
      fregola: "Fregola",
    },
    zh: {
      name: "烹饪计时器",
      pasta: "意大利面",
      spaghetti: "意大利面条",
      linguine: "扁意大利面",
      mafalde: "马法尔迪面",
      fettuccine: "宽扁面",
      tagliatelle: "塔格利亚特尔面",
      rigatoni: "里加通尼面",
      macaroni: "通心粉",
      penne: "贝壳面",
      farfalle: "蝴蝶结面",
      fusilli: "螺旋面",
      conchiglie: "贝壳面",
      fregola: "弗雷戈拉",
    },
    "zh-TW": {
      name: "烹飪計時器",
      pasta: "義大利麵",
      spaghetti: "意大利麵條",
      linguine: "扁意大利麵",
      mafalde: "馬法爾迪麵",
      fettuccine: "寬扁麵",
      tagliatelle: "塔格利亞特爾麵",
      rigatoni: "里加通尼麵",
      macaroni: "通心粉",
      penne: "貝殼麵",
      farfalle: "蝴蝶結麵",
      fusilli: "螺旋麵",
      conchiglie: "貝殼麵",
      fregola: "弗雷戈拉",
    },
    vi: {
      name: "Đồng Hồ Đếm Thời Gian Nấu Ăn",
      pasta: "Pasta",
      spaghetti: "Spaghetti",
      linguine: "Linguine",
      mafalde: "Mafalde",
      fettuccine: "Fettuccine",
      tagliatelle: "Tagliatelle",
      rigatoni: "Rigatoni",
      macaroni: "Mì ống",
      penne: "Penne",
      farfalle: "Farfalle",
      fusilli: "Fusilli",
      conchiglie: "Conchiglie",
      fregola: "Fregola",
    },
    ru: {
      name: "Таймер для приготовления пищи",
      pasta: "Паста",
      spaghetti: "Спагетти",
      linguine: "Лингвини",
      mafalde: "Мафальде",
      fettuccine: "Феттуччине",
      tagliatelle: "Тальятелле",
      rigatoni: "Ригатони",
      macaroni: "Макароны",
      penne: "Пенне",
      farfalle: "Фарфалле",
      fusilli: "Фузилли",
      conchiglie: "Конкилье",
      fregola: "Фрегола",
    },
    it: {
      name: "Timer di Cottura",
      pasta: "Pasta",
      spaghetti: "Spaghetti",
      linguine: "Linguine",
      mafalde: "Mafalde",
      fettuccine: "Fettuccine",
      tagliatelle: "Tagliatelle",
      rigatoni: "Rigatoni",
      macaroni: "Maccheroni",
      penne: "Penne",
      farfalle: "Farfalle",
      fusilli: "Fusilli",
      conchiglie: "Conchiglie",
      fregola: "Fregola",
    },
    pl: {
      name: "Minutnik do gotowania",
      pasta: "Makaron",
      spaghetti: "Spaghetti",
      linguine: "Linguine",
      mafalde: "Mafalde",
      fettuccine: "Fettuccine",
      tagliatelle: "Tagliatelle",
      rigatoni: "Rigatoni",
      macaroni: "Makaron",
      penne: "Penne",
      farfalle: "Farfalle",
      fusilli: "Fusilli",
      conchiglie: "Conchiglie",
      fregola: "Fregola",
    },
    sv: {
      name: "Matlagningstimer",
      pasta: "Pasta",
      spaghetti: "Spaghetti",
      linguine: "Linguine",
      mafalde: "Mafalde",
      fettuccine: "Fettuccine",
      tagliatelle: "Tagliatelle",
      rigatoni: "Rigatoni",
      macaroni: "Makaroner",
      penne: "Penne",
      farfalle: "Farfalle",
      fusilli: "Fusilli",
      conchiglie: "Conchiglie",
      fregola: "Fregola",
    },
    da: {
      name: "Madlavningstimer",
      pasta: "Pasta",
      spaghetti: "Spaghetti",
      linguine: "Linguine",
      mafalde: "Mafalde",
      fettuccine: "Fettuccine",
      tagliatelle: "Tagliatelle",
      rigatoni: "Rigatoni",
      macaroni: "Macaroni",
      penne: "Penne",
      farfalle: "Farfalle",
      fusilli: "Fusilli",
      conchiglie: "Conchiglie",
      fregola: "Fregola",
    },
    ko: {
      name: "요리 타이머",
      pasta: "파스타",
      spaghetti: "스파게티",
      linguine: "링귀니",
      mafalde: "마팔데",
      fettuccine: "페투치네",
      tagliatelle: "탈리아텔레",
      rigatoni: "리가토니",
      macaroni: "마카로니",
      penne: "펜네",
      farfalle: "파르팔레",
      fusilli: "푸질리",
      conchiglie: "콘킬리에",
      fregola: "프레골라",
    },
    de: {
      name: "Kochtimer",
      pasta: "Nudeln",
      spaghetti: "Spaghetti",
      linguine: "Linguine",
      mafalde: "Mafalde",
      fettuccine: "Fettuccine",
      tagliatelle: "Tagliatelle",
      rigatoni: "Rigatoni",
      macaroni: "Makkaroni",
      penne: "Penne",
      farfalle: "Farfalle",
      fusilli: "Fusilli",
      conchiglie: "Conchiglie",
      fregola: "Fregola",
    },
    nl: {
      name: "Kookwekker",
      pasta: "Pasta",
      spaghetti: "Spaghetti",
      linguine: "Linguine",
      mafalde: "Mafalde",
      fettuccine: "Fettuccine",
      tagliatelle: "Tagliatelle",
      rigatoni: "Rigatoni",
      macaroni: "Macaroni",
      penne: "Penne",
      farfalle: "Farfalle",
      fusilli: "Fusilli",
      conchiglie: "Conchiglie",
      fregola: "Fregola",
    },
    fr: {
      name: "Minuteur de Cuisine",
      pasta: "Pâtes",
      spaghetti: "Spaghetti",
      linguine: "Linguine",
      mafalde: "Mafalde",
      fettuccine: "Fettuccine",
      tagliatelle: "Tagliatelle",
      rigatoni: "Rigatoni",
      macaroni: "Macaroni",
      penne: "Penne",
      farfalle: "Farfalle",
      fusilli: "Fusilli",
      conchiglie: "Coquilles",
      fregola: "Fregola",
    },
    ja: {
      name: "調理タイマー",
      pasta: "パスタ",
      spaghetti: "スパゲッティ",
      linguine: "リングイネ",
      mafalde: "マファルデ",
      fettuccine: "フェットチーネ",
      tagliatelle: "タリアテッレ",
      rigatoni: "リガトニ",
      macaroni: "マカロニ",
      penne: "ペンネ",
      farfalle: "ファルファッレ",
      fusilli: "フジッリ",
      conchiglie: "コンキリエ",
      fregola: "フレゴラ",
    },
  };

  const degreeLabels = {
    en: {
      unripe: "Unripe",
      chewy: "Chewy",
      welldone: "Well done",
    },
    pt: {
      unripe: "Não Cozido",
      chewy: "Al dente",
      welldone: "Bem cozido",
    },
    th: {
      unripe: "ไม่สุก",
      chewy: "เคี้ยวง่าย",
      welldone: "สุกดี",
    },
    es: {
      unripe: "Crudo",
      chewy: "Al dente",
      welldone: "Bien hecho",
    },
    id: {
      unripe: "Mentah",
      chewy: "Kenyal",
      welldone: "Matang sempurna",
    },
    ar: {
      unripe: "غير ناضج",
      chewy: "مقرمش",
      welldone: "مطبوخ جيدًا",
    },
    hi: {
      unripe: "अपक्व",
      chewy: "चबाने योग्य",
      welldone: "अच्छी तरह पका हुआ",
    },
    tr: {
      unripe: "Çiğ",
      chewy: "Çıtır",
      welldone: "İyi pişmiş",
    },
    zh: {
      unripe: "未熟",
      chewy: "有嚼劲",
      welldone: "熟透",
    },
    "zh-TW": {
      unripe: "未熟",
      chewy: "有嚼勁",
      welldone: "熟透",
    },
    vi: {
      unripe: "Chưa chín",
      chewy: "Dai",
      welldone: "Chín đều",
    },
    ru: {
      unripe: "Недоваренный",
      chewy: "На зубок",
      welldone: "Хорошо проваренный",
    },
    it: {
      unripe: "Acerbo",
      chewy: "Al dente",
      welldone: "Ben cotto",
    },
    pl: {
      unripe: "Nieugotowany",
      chewy: "Al dente",
      welldone: "Dobrze ugotowany",
    },
    sv: {
      unripe: "Okokt",
      chewy: "Al dente",
      welldone: "Väl genomkokt",
    },
    da: {
      unripe: "Umoden",
      chewy: "Al dente",
      welldone: "Gennemkogt",
    },
    ko: {
      unripe: "아체르보",
      chewy: "알 덴테",
      welldone: "벤코토",
    },
    de: {
      unripe: "Unreif",
      chewy: "Al dente",
      welldone: "Gut durchgegart",
    },
    nl: {
      unripe: "Onrijp",
      chewy: "Al dente",
      welldone: "Goed gaar",
    },
    fr: {
      unripe: "Pas cuit",
      chewy: "Al dente",
      welldone: "Bien cuit",
    },
    ja: {
      unripe: "未熟",
      chewy: "アルデンテ",
      welldone: "よく煮た",
    },
  };

  const timeLabels = {
    en: {
      name: "Timer",
      a3: "3 seconds",
      a2: "5 seconds",
      a1: "10 seconds",
      a: "15 seconds",
      b: "20 seconds",
      c: "30 seconds",
      d: "45 seconds",
      e: "60 seconds",
      f: "90 seconds",
      f1: "100 seconds",
      f2: "2 minutes",
      g: "3 minutes",
      g1: "4 minutes",
      h: "5 minutes",
      i: "10 minutes",
      j: "15 minutes",
      k: "20 minutes",
      l: "30 minutes",
      m: "45 minutes",
      m1: "50 minutes",
      n: "1 hour",
      o: "1.5 hour",
      p: "2 hours",
      q: "3 hours",
      r: "4 hours",
    },
    pt: {
      name: "Temporizador",
      a3: "3 segundos",
      a2: "5 segundos",
      a1: "10 segundos",
      a: "15 segundos",
      b: "20 segundos",
      c: "30 segundos",
      d: "45 segundos",
      e: "60 segundos",
      f: "90 segundos",
      f1: "100 segundos",
      f2: "2 minutos",
      g: "3 minutos",
      g1: "4 minutos",
      h: "5 minutos",
      i: "10 minutos",
      j: "15 minutos",
      k: "20 minutos",
      l: "30 minutos",
      m: "45 minutos",
      m1: "50 minutos",
      n: "1 hora",
      o: "1.5 hora",
      p: "2 horas",
      q: "3 horas",
      r: "4 horas",
    },
    th: {
      name: "นาฬิกาจับเวลา",
      a3: "3 วินาที",
      a2: "5 วินาที",
      a1: "10 วินาที",
      a: "15 วินาที",
      b: "20 วินาที",
      c: "30 วินาที",
      d: "45 วินาที",
      e: "60 วินาที",
      f: "90 วินาที",
      f1: "100 วินาที",
      f2: "2 นาที",
      g: "3 นาที",
      g1: "4 นาที",
      h: "5 นาที",
      i: "10 นาที",
      j: "15 นาที",
      k: "20 นาที",
      l: "30 นาที",
      m: "45 นาที",
      m1: "50 นาที",
      n: "1 ชั่วโมง",
      o: "1.5 ชั่วโมง",
      p: "2 ชั่วโมง",
      q: "3 ชั่วโมง",
      r: "4 ชั่วโมง",
    },
    es: {
      name: "Temporizador",
      a3: "3 segundos",
      a2: "5 segundos",
      a1: "10 segundos",
      a: "15 segundos",
      b: "20 segundos",
      c: "30 segundos",
      d: "45 segundos",
      e: "60 segundos",
      f: "90 segundos",
      f1: "100 segundos",
      f2: "2 minutos",
      g: "3 minutos",
      g1: "4 minutos",
      h: "5 minutos",
      i: "10 minutos",
      j: "15 minutos",
      k: "20 minutos",
      l: "30 minutos",
      m: "45 minutos",
      m1: "50 minutos",
      n: "1 hora",
      o: "1.5 hora",
      p: "2 horas",
      q: "3 horas",
      r: "4 horas",
    },
    id: {
      name: "Pergantian waktu",
      a3: "3 detik",
      a2: "5 detik",
      a1: "10 detik",
      a: "15 detik",
      b: "20 detik",
      c: "30 detik",
      d: "45 detik",
      e: "60 detik",
      f: "90 detik",
      f1: "100 detik",
      f2: "2 menit",
      g: "3 menit",
      g1: "4 menit",
      h: "5 menit",
      i: "10 menit",
      j: "15 menit",
      k: "20 menit",
      l: "30 menit",
      m: "45 menit",
      m1: "50 menit",
      n: "1 jam",
      o: "1.5 jam",
      p: "2 jam",
      q: "3 jam",
      r: "4 jam",
    },
    ar: {
      name: "التبديل مرة",
      a3: "3 ثانية",
      a2: "5 ثانية",
      a1: "10 ثانية",
      a: "15 ثانية",
      b: "20 ثانية",
      c: "30 ثانية",
      d: "45 ثانية",
      e: "60 ثانية",
      f: "90 ثانية",
      f1: "100 ثانية",
      f2: "2 دقائق",
      g: "3 دقائق",
      g1: "4 دقائق",
      h: "5 دقائق",
      i: "10 دقائق",
      j: "15 دقيقة",
      k: "20 دقيقة",
      l: "30 دقيقة",
      m: "45 دقيقة",
      m1: "50 دقيقة",
      n: "1 ساعة",
      o: "1.5 ساعة",
      p: "2 ساعة",
      q: "3 ساعات",
      r: "4 ساعات",
    },
    hi: {
      name: "टाइमर",
      a3: "3 सेकंड",
      a2: "5 सेकंड",
      a1: "10 सेकंड",
      a: "15 सेकंड",
      b: "20 सेकंड",
      c: "30 सेकंड",
      d: "45 सेकंड",
      e: "60 सेकंड",
      f: "90 सेकंड",
      f1: "100 सेकंड",
      f2: "2 मिनट",
      g: "3 मिनट",
      g1: "4 मिनट",
      h: "5 मिनट",
      i: "10 मिनट",
      j: "15 मिनट",
      k: "20 मिनट",
      l: "30 मिनट",
      m: "45 मिनट",
      m1: "50 मिनट",
      n: "1 घंटा",
      o: "1.5 घंटा",
      p: "2 घंटे",
      q: "3 घंटे",
      r: "4 घंटे",
    },
    tr: {
      name: "Zamanlayıcı",
      a3: "3 saniye",
      a2: "5 saniye",
      a1: "10 saniye",
      a: "15 saniye",
      b: "20 saniye",
      c: "30 saniye",
      d: "45 saniye",
      e: "60 saniye",
      f: "90 saniye",
      f1: "100 saniye",
      f2: "2 dakika",
      g: "3 dakika",
      g1: "4 dakika",
      h: "5 dakika",
      i: "10 dakika",
      j: "15 dakika",
      k: "20 dakika",
      l: "30 dakika",
      m: "45 dakika",
      m1: "50 dakika",
      n: "1 saat",
      o: "1.5 saat",
      p: "2 saat",
      q: "3 saat",
      r: "4 saat",
    },
    zh: {
      name: "计时器",
      a3: "3 秒",
      a2: "5 秒",
      a1: "10 秒",
      a: "15 秒",
      b: "20 秒",
      c: "30 秒",
      d: "45 秒",
      e: "60 秒",
      f: "90 秒",
      f1: "100 秒",
      f2: "2 分钟",
      g: "3 分钟",
      g1: "4 分钟",
      h: "5 分钟",
      i: "10 分钟",
      j: "15 分钟",
      k: "20 分钟",
      l: "30 分钟",
      m: "45 分钟",
      m1: "50 分钟",
      n: "1 小时",
      o: "1.5 小时",
      p: "2 小时",
      q: "3 小时",
      r: "4 小时",
    },
    "zh-TW": {
      name: "計時器",
      a3: "3 秒",
      a2: "5 秒",
      a1: "10 秒",
      a: "15 秒",
      b: "20 秒",
      c: "30 秒",
      d: "45 秒",
      e: "60 秒",
      f: "90 秒",
      f1: "100 秒",
      f2: "2 分鐘",
      g: "3 分鐘",
      g1: "4 分鐘",
      h: "5 分鐘",
      i: "10 分鐘",
      j: "15 分鐘",
      k: "20 分鐘",
      l: "30 分鐘",
      m: "45 分鐘",
      m1: "50 分鐘",
      n: "1 小時",
      o: "1.5 小時",
      p: "2 小時",
      q: "3 小時",
      r: "4 小時",
    },
    vi: {
      name: "Bộ định giờ",
      a3: "3 giây",
      a2: "5 giây",
      a1: "10 giây",
      a: "15 giây",
      b: "20 giây",
      c: "30 giây",
      d: "45 giây",
      e: "60 giây",
      f: "90 giây",
      f1: "100 giây",
      f2: "2 phút",
      g: "3 phút",
      g1: "4 phút",
      h: "5 phút",
      i: "10 phút",
      j: "15 phút",
      k: "20 phút",
      l: "30 phút",
      m: "45 phút",
      m1: "50 phút",
      n: "1 giờ",
      o: "1.5 giờ",
      p: "2 giờ",
      q: "3 giờ",
      r: "4 giờ",
    },
    ru: {
      name: "Таймер",
      a3: "3 секунд",
      a2: "5 секунд",
      a1: "10 секунд",
      a: "15 секунд",
      b: "20 секунд",
      c: "30 секунд",
      d: "45 секунд",
      e: "60 секунд",
      f: "90 секунд",
      f1: "100 секунд",
      f2: "2 минуты",
      g: "3 минуты",
      g1: "4 минут",
      h: "5 минут",
      i: "10 минут",
      j: "15 минут",
      k: "20 минут",
      l: "30 минут",
      m: "45 минут",
      m1: "50 минут",
      n: "1 час",
      o: "1.5 час",
      p: "2 часа",
      q: "3 часа",
      r: "4 часа",
    },
    it: {
      name: "Timer",
      a3: "3 secondi",
      a2: "5 secondi",
      a1: "10 secondi",
      a: "15 secondi",
      b: "20 secondi",
      c: "30 secondi",
      d: "45 secondi",
      e: "60 secondi",
      f: "90 secondi",
      f1: "100 secondi",
      f2: "2 minuti",
      g: "3 minuti",
      g1: "4 minuti",
      h: "5 minuti",
      i: "10 minuti",
      j: "15 minuti",
      k: "20 minuti",
      l: "30 minuti",
      m: "45 minuti",
      m1: "50 minuti",
      n: "1 ora",
      o: "1.5 ora",
      p: "2 ore",
      q: "3 ore",
      r: "4 ore",
    },
    pl: {
      name: "Timer",
      a3: "3 sekund",
      a2: "5 sekund",
      a1: "10 sekund",
      a: "15 sekund",
      b: "20 sekund",
      c: "30 sekund",
      d: "45 sekund",
      e: "60 sekund",
      f: "90 sekund",
      f1: "100 sekund",
      f2: "2 minuty",
      g: "3 minuty",
      g1: "4 minut",
      h: "5 minut",
      i: "10 minut",
      j: "15 minut",
      k: "20 minut",
      l: "30 minut",
      m: "45 minut",
      m1: "50 minut",
      n: "1 godzina",
      o: "1.5 godzina",
      p: "2 godziny",
      q: "3 godziny",
      r: "4 godziny",
    },
    sv: {
      name: "Timer",
      a3: "3 sekunder",
      a2: "5 sekunder",
      a1: "10 sekunder",
      a: "15 sekunder",
      b: "20 sekunder",
      c: "30 sekunder",
      d: "45 sekunder",
      e: "60 sekunder",
      f: "90 sekunder",
      f1: "100 sekunder",
      f2: "2 minuter",
      g: "3 minuter",
      g1: "4 minuter",
      h: "5 minuter",
      i: "10 minuter",
      j: "15 minuter",
      k: "20 minuter",
      l: "30 minuter",
      m: "45 minuter",
      m1: "50 minuter",
      n: "1 timme",
      o: "1.5 timme",
      p: "2 timmar",
      q: "3 timmar",
      r: "4 timmar",
    },
    da: {
      name: "Timer",
      a3: "3 sekunder",
      a2: "5 sekunder",
      a1: "10 sekunder",
      a: "15 sekunder",
      b: "20 sekunder",
      c: "30 sekunder",
      d: "45 sekunder",
      e: "60 sekunder",
      f: "90 sekunder",
      f1: "100 sekunder",
      f2: "2 minutter",
      g: "3 minutter",
      g1: "4 minutter",
      h: "5 minutter",
      i: "10 minutter",
      j: "15 minutter",
      k: "20 minutter",
      l: "30 minutter",
      m: "45 minutter",
      m1: "50 minutter",
      n: "1 time",
      o: "1.5 time",
      p: "2 timer",
      q: "3 timer",
      r: "4 timer",
    },
    ko: {
      name: "타이머",
      a3: "3초",
      a2: "5초",
      a1: "10초",
      a: "15초",
      b: "20초",
      c: "30초",
      d: "45초",
      e: "60초",
      f: "90초",
      f1: "100초",
      f2: "2분",
      g: "3분",
      g1: "4분",
      h: "5분",
      i: "10분",
      j: "15분",
      k: "20분",
      l: "30분",
      m: "45분",
      m1: "50분",
      n: "1시간",
      o: "1.5시간",
      p: "2시간",
      q: "3시간",
      r: "4시간",
    },
    de: {
      name: "Timer",
      a3: "3 Sekunden",
      a2: "5 Sekunden",
      a1: "10 Sekunden",
      a: "15 Sekunden",
      b: "20 Sekunden",
      c: "30 Sekunden",
      d: "45 Sekunden",
      e: "60 Sekunden",
      f: "90 Sekunden",
      f1: "100 Sekunden",
      f2: "2 Minuten",
      g: "3 Minuten",
      g1: "4 Minuten",
      h: "5 Minuten",
      i: "10 Minuten",
      j: "15 Minuten",
      k: "20 Minuten",
      l: "30 Minuten",
      m: "45 Minuten",
      m1: "50 Minuten",
      n: "1 Stunde",
      o: "1.5 Stunde",
      p: "2 Stunden",
      q: "3 Stunden",
      r: "4 Stunden",
    },
    nl: {
      name: "Timer",
      a3: "3 seconden",
      a2: "5 seconden",
      a1: "10 seconden",
      a: "15 seconden",
      b: "20 seconden",
      c: "30 seconden",
      d: "45 seconden",
      e: "60 seconden",
      f: "90 seconden",
      f1: "100 seconden",
      f2: "2 minuten",
      g: "3 minuten",
      g1: "4 minuten",
      h: "5 minuten",
      i: "10 minuten",
      j: "15 minuten",
      k: "20 minuten",
      l: "30 minuten",
      m: "45 minuten",
      m1: "50 minuten",
      n: "1 uur",
      o: "1.5 uur",
      p: "2 uur",
      q: "3 uur",
      r: "4 uur",
    },
    fr: {
      name: "Minuteur",
      a3: "3 secondes",
      a2: "5 secondes",
      a1: "10 secondes",
      a: "15 secondes",
      b: "20 secondes",
      c: "30 secondes",
      d: "45 secondes",
      e: "60 secondes",
      f: "90 secondes",
      f1: "100 secondes",
      f2: "2 minutes",
      g: "3 minutes",
      g1: "4 minutes",
      h: "5 minutes",
      i: "10 minutes",
      j: "15 minutes",
      k: "20 minutes",
      l: "30 minutes",
      m: "45 minutes",
      m1: "50 minutes",
      n: "1 heure",
      o: "1.5 heure",
      p: "2 heures",
      q: "3 heures",
      r: "4 heures",
    },
    ja: {
      name: "タイマー",
      a3: "3秒",
      a2: "5秒",
      a1: "10秒",
      a: "15秒",
      b: "20秒",
      c: "30秒",
      d: "45秒",
      e: "60秒",
      f: "90秒",
      f1: "100秒",
      f2: "2分",
      g: "3分",
      g1: "4分",
      h: "5分",
      i: "10分",
      j: "15分",
      k: "20分",
      l: "30分",
      m: "45分",
      m1: "50分",
      n: "1時間",
      o: "1.5時間",
      p: "2時間",
      q: "3時間",
      r: "4時間",
    },
  };

  const labels = eggLabels[language];
  const hms = translations[language];
  const pastaNames = pastaLabels[language];
  const degreeNames = degreeLabels[language];
  const timeLabel = timeLabels[language];

  const [selectedDuration, setSelectedDuration] = useState(0);

  const handleOptionSelected = (duration) => {
    setSelectedDuration(duration);
  };

  return (
    <>
      <Row>
        <Col className="mainTimer">
          <h2>{labels.name}</h2>
        </Col>
      </Row>
      <Row>
        <EggTimer
          duration={selectedDuration}
          labels={labels}
          pastaNames={pastaNames}
          degreeNames={degreeNames}
          hms={hms}
          timeLabel={timeLabel}
        />
        {/* <Test duration={selectedDuration} labels={labels} hms={hms} /> */}
      </Row>
    </>
  );
}

export default CookingTimer;
