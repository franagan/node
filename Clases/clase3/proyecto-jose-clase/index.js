// lo primero que hago es traerme todas las importaciones
const express = require("express");

//vamos a traernos mi libreria dotenv con la que voy a guardar mis variables sensibles
require("dotenv").config();
// para crear mi servidor necesitamos ejecutar la libreria express
const server = express();

//Le tengo que especificar un puerto, normalmente yo suelo pones el 5000, 8000, 8080
const PORT = process.env.PORT;

// el servidor tiene una varias funciones, se puede usar server.use, server.listen entre otras...

server.use("/movies/getTitle/:titleParams", (req, res) => {
  const { titleParams } = req.params;
  const movies = [
    {
      id: "1",
      title: "Titanic",
      cover: "https://lkasdjflasdf",
      duration: 3000,
    },
    {
      id: "2",
      title: "Avatar",
      cover: "https://lkasdjflasdf",
      duration: 30000,
    },
    {
      id: "3",
      title: "La historia interminable",
      cover: "https://lkasdjflasdf",
      duration: "infinita",
    },
  ];
  const movieTitle = movies.find(
    (movie) => movie.title.toLocaleLowerCase() == titleParams
  );
  //   console.log(movieTitle);
  res.json(movieTitle);
});
server.use("/movies/:id", (req, res) => {
  // console.log(req.params);
  // const id = req.params.id
  // con el objecto destructuring
  const { id } = req.params;
  // console.log(id);
  const movies = [
    {
      id: "1",
      title: "Titanic",
      cover: "https://lkasdjflasdf",
      duration: 3000,
    },
    {
      id: "2",
      title: "Avatar",
      cover: "https://lkasdjflasdf",
      duration: 30000,
    },
    {
      id: 3,
      title: "La historia interminable",
      cover: "https://lkasdjflasdf",
      duration: "infinita",
    },
  ];

  const movieId = movies.find((movie) => movie.id == id);

  // console.log(movieId);
  res.json(movieId);
});
server.use("/movies", (req, res) => {
  const movies = [
    {
      title: "Titanic",
      cover: "https://lkasdjflasdf",
      duration: 3000,
    },
    {
      title: "Avatar",
      cover: "https://lkasdjflasdf",
      duration: 30000,
    },
    {
      title: "La historia interminable",
      cover: "https://lkasdjflasdf",
      duration: "infinita",
    },
  ];
  // devuelvo mis datos de mi variable y los paso a json
  res.json(movies);
});
// esta es la que va abajo del todo, porque es la mas restrictiva
server.use("/", (req, res) => {
  res.send("Esto funciona");
});

server.listen(PORT, () => {
  console.log(
    "el servidor esta levantado en la ruta : http://localhost:" + PORT
  );
});
