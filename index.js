const http = require('http');

const porta = 3000;

const servidor = http.createServer((req, res) => {
  res.end('Hello World');
});

servidor.listen(porta, () => {
  console.log('Rodando em http://localhost:' + porta);
});
