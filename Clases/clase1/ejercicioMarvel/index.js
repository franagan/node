const fs = require('fs');
const http = require('http');

const requestHandler = (req, res) => {
    if (req.url === '/write-avengers') {
        writeAvengers(res);
    } else if (req.url === '/read-avengers') {
        readAvengers(res);
    } else if (req.url === '/remove-avengers') {
        removeAvengers(res);
    } else {
        res.setHeader('Content-Type', 'text/json');
        res.writeHead(200);
        res.end(`Welcome to the Avengers' organization tool!`);
    }
};

const writeAvengers = (res) => {
    fs.readFile('characters.json', (err, data) => {
        let parsedData = JSON.parse(data);
        parsedData = parsedData.filter((el) => el.category === 'Avenger');
        fs.writeFile('avengers.json', JSON.stringify(parsedData), (err) => {
            if (err) {
                res.writeHead(500);
            } else {
                res.setHeader('Content-Type', 'text/json');
                res.writeHead(200);
                res.end('El archivo se guardó con exito');
            }
        });
    });
};

const writeMovies = (res) => {
    fs.readFile('character.json', (err, data) => {
        let parsedData3 = JSON.parse(data);
        parsedData3 = parseData.filter((el) => el.movies === 'The Avengers' || );
        fs.writeFile(
            'write-movies.json',
            JSON.stringify(parsedData3),
            (err) => {
                if (err) {
                    res.writeHead(500);
                } else {
                    res.setHeader('Content-Type', 'text/json');
                    res.writeHead(200);
                    res.end('El archivo se guardó con exito');
                }
            }
        );
    });
};

const writeTheAvengers = (res) => {
    fs.readFile('character.json', (err, data) => {
        let parsedData2 = JSON.parse(data);
        parsedData2 = parseData.filter((el) => el.movies === 'The Avengers');
        fs.writeFile(
            'the-avengers.json',
            JSON.stringify(parsedData2),
            (err) => {
                if (err) {
                    res.writeHead(500);
                } else {
                    res.setHeader('Content-Type', 'text/json');
                    res.writeHead(200);
                    res.end('El archivo se guardó con exito');
                }
            }
        );
    });
};

const removeAvengers = (res) => {
    fs.unlink('avengers.json', (err) => {
        if (err) {
            res.writeHead(500);
            res.end('Error eliminando archivo');
        } else {
            res.setHeader('Content-Type', 'text/json');
            res.writeHead(200);
            res.end('El archivo se eliminó con exito');
        }
    });
};

const readAvengers = (res) => {
    fs.readFile('avengers.json', (err, data) => {
        res.setHeader('Content-Type', 'text/json');
        if (err) {
            res.writeHead(404);
            res.end('El archivo avengers todavía no existe');
        } else {
            res.writeHead(200);
            res.end(data);
        }
    });
};

const readTheAvengers = (res) => {
    fs.readFile('the-avengers.json', (err, data) => {
        res.setHeader('Content-Type', 'text/json');
        if (err) {
            res.writeHead(404);
            res.end('El archivo the avengers todavía no existe');
        } else {
            res.writeHead(200);
            res.end(data);
        }
    });
};

const PORT = 3000;
const server = http.createServer(requestHandler);

server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
    console.log(`Url: http://localhost:${PORT}`);
});
