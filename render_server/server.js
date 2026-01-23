
const express = require('express');
const cors = require('cors');

// 🔹 dotenv 로드 (맨 위에 위치)
require('dotenv').config();

const app = express();
app.use(cors());

//받을정보
app.get('/a', async (req, res) => {
  //url : http://localhost:3000/a?받을정보유형='+받을정보유형
  let 받을정보유형=req.query.받을정보유형;
  let 응답='';
  console.log('받을정보유형 : ' + 받을정보유형);
  if (받을정보유형=='문자열') {console.log('if 문자열');응답='그냥문자열';res.send(응답);}
  if (받을정보유형=='xml') {
    console.log('if xml');
    응답=`<?xml version="1.0" encoding="UTF-8"?><response><item>
        <hsCode>847130</hsCode><taxRate>8</taxRate></item></response>`;
    res.send(응답); 
  }
    
  if (받을정보유형=='html') {console.log('if html');응답=`<!doctype html><html><body><h1>h1</h1></body></html>`;res.send(응답);}
  if (받을정보유형=='json') {console.log('if json');응답=JSON.stringify({"name":"Kim","age":30});res.json(응답);}
  
});
// UNIPASS 중계
app.get('/unipass', async (req, res) => {
    const 관세청출처 = 'https://unipass.customs.go.kr:38010';
    const 관세청api서비스명_통관진행정보 =
      '/ext/rest/cargCsclPrgsInfoQry/retrieveCargCsclPrgsInfo?';

    // 🔹 .env 에서 불러오기
    const 승인키 = process.env.CUSTOM_KEY_CARGCSCLPRGS;
    // 브라우저에서 `https://dongil-server.onrender.com/unipass?mblNo=${mblNo}&hblNo=${hblNo}&blYy=${year}&cargMtNo=${cargMtNo}`);

    const mblNo = req.query.mblNo;
    const hblNo = req.query.hblNo;
    const cargMtNo = req.query.cargMtNo;
    const blYy= req.query.blYy;

    const url =
      `${관세청출처}${관세청api서비스명_통관진행정보}` +
      `crkyCn=${승인키}&mblNo=${mblNo}&hblNo=${hblNo}&cargMtNo=${cargMtNo}&blYy=${blYy}`;

    const response = await fetch(url);
    const text = await response.text();
    res.send(text);
});

// 🔹 포트도 .env 사용 가능
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`서버 실행중 → http://localhost:${PORT}`);
});
