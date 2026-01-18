const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
console.log('d');
//브라우저 : const res = await fetch(`/unipass?blno=${blno}&year=${year}`);
// UNIPASS 중계
app.get('/unipass', async (req, res) => {
        res.send('text');
    const 관세청출처 = 'https://unipass.customs.go.kr:38010';
    const 관세청api서비스명_통관진행정보 = 
    '/ext/rest/cargCsclPrgsInfoQry/retrieveCargCsclPrgsInfo?';
    const 관세청승인키 = 'c290s255d192h253h000l090g5';
    const BLNO = req.query.blno;
    const year = req.query.year;


    const url = `${관세청출처}${관세청api서비스명_통관진행정보}crkyCn=${관세청승인키}&mblNo=${BLNO}&blYy=${year}`;

    const response = await fetch(url);  // Node 내장 fetch
    const text = await response.text();
    res.send(text);
});

app.listen(3000, () => {
    console.log("서버 실행중 → http://localhost:3000");
});
