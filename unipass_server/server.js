const express = require('express');
const cors = require('cors');

// 🔹 dotenv 로드 (맨 위에 위치)
require('dotenv').config();

const app = express();
app.use(cors());

// UNIPASS 중계
app.get('/unipass', async (req, res) => {
    const 관세청출처 = 'https://unipass.customs.go.kr:38010';
    const 관세청api서비스명_통관진행정보 =
      '/ext/rest/cargCsclPrgsInfoQry/retrieveCargCsclPrgsInfo?';

    // 🔹 .env 에서 불러오기
    const 승인키 = 승인키_통관진행정보;

    const BLNO = req.query.blno;
    const year = req.query.year;

    const url =
      `${관세청출처}${관세청api서비스명_통관진행정보}` +
      `crkyCn=${승인키}&mblNo=${BLNO}&blYy=${year}`;

    const response = await fetch(url);
    const text = await response.text();
    res.send(text);
});

// 🔹 포트도 .env 사용 가능
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`서버 실행중 → http://localhost:${PORT}`);
});
