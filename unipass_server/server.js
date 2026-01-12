const express = require('express');
const path = require('path');

const app = express();

// index.html 제공
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 출처제한 해제
//app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   next();
//});

// UNIPASS 중계
app.get('/unipass', async (req, res) => {
    const BLNO = req.query.blno;
    const year = req.query.year;

    const url = `https://unipass.customs.go.kr:38010/ext/rest/cargCsclPrgsInfoQry/retrieveCargCsclPrgsInfo?crkyCn=c290s255d192h253h000l090g5&mblNo=${BLNO}&blYy=${year}`;

    const response = await fetch(url);  // Node 내장 fetch
    const text = await response.text();
    res.send(text);
});

app.listen(3000, () => {
    console.log("서버 실행중 → http://localhost:3000");
});
