const express = require('express');
const { createProxyMiddleware } =  require('http-proxy-middleware');
const path = require('path');

const PORT = 3000;
const API_HOST = 'http://localhost:8080';

const server = express();

server.use(express.static(path.resolve(__dirname, 'build')));

server.use('/api', createProxyMiddleware({
  target: API_HOST,
  changeOrigin: true
}));

server.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

server.listen(PORT, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  else {
    console.info(`server ready @ http://localhost:${PORT}`);
  }
});

