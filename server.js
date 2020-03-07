const express = require("express");
const todosRouter = require("./routes/todosRouter");
const helmet = require("helmet");
const cors = require("cors");
const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use("/api/todos", todosRouter);

server.get("/", (req, res) => {
    res.send("<h2>Running Server - Success</h2>");
});

module.exports = server;