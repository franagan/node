const { log } = require('console');
const fs = require('fs');
const http = require('http');
const PORT = 3000;

const requestHandler = (req, res) => {
    // console.log(req.url);
    fs.read.file('nombres.json', (err, data) =>
        // res.json({ mesage: 'todo ok' });
        {
            res.setHeader('Content-type', 'text/json');

            res.writeHead(err ? 500 : 200);
            console.log(data);
            res.end(data);
        }
    );
};
const server = http.createServer(requestHandler);

server.listen(PORT, () => {
    console.log(`la url sera http://localhost:${PORT}`);
});
