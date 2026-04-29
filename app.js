const http = require('http');

const html = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Sasini Kalpani - Node.js App</title>
</head>
<body style="background-color:#1a1a2e;color:white;font-family:Arial;text-align:center;padding:40px;">
<h1 style="color:#00d4ff;">Hello from Node.js! 🚀</h1>
<p style="font-size:20px;">This app is running on Microsoft Azure!</p>
<hr style="border-color:#00d4ff;width:50%;">
<h2 style="color:#00d4ff;">Built by Sasini Kalpani</h2>
<p>Sri Lanka | Cloud & IT Enthusiast</p>
<p style="color:#aaa;">Powered by Node.js + Nginx + Azure VM +GitHub Action</p>
</body>
</html>
`;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(html);
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
