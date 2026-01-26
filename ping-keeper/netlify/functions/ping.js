const https = require('https');

exports.handler = async () => {
  const url = 'https://myapp.onrender.com'; // ← 본인 Render 주소

  return new Promise((resolve, reject) => {
    const req = https.get(url, (res) => {
      if (res.statusCode === 200) {
        resolve({ statusCode: 200, body: 'Render server is awake' });
      } else {
        reject(new Error(`Status Code: ${res.statusCode}`));
      }
    });

    req.on('error', reject);
    req.end();
  });
};