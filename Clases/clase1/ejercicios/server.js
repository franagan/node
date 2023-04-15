// const { log } = require('console');
const http = require('http');

const requestHandler = (req, res) => {
    res.setHeader('Content-Type', 'text/json');
    res.writeHead(200);
    res.end('el servidor funciona muy bien');
};

const PORT = 3000;
const server = http.createServer(requestHandler);

server.listen(PORT, () => {
    console.log(`server started in http://localhost:${PORT}`);
});
