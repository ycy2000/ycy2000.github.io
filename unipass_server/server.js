const express = require('express');
const path = require('path');

const app = express();

// index.html 제공, http://localhost:3000 주소창으로 접근시 node_custom.html 켜짐
//app.get('/', (req, res) => { 
//    res.sendFile(path.join(__dirname, 'node_custom.html'));
//});

// 출처제한 해제, 다른폴더에서 브라우저 파일 제공시 다른출처이다
app.use((req, res, next) => {
   res.setHeader("Access-Control-Allow-Origin", "*");
   next();
});

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
