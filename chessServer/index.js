const colyseus = require("colyseus");
const http = require("http");
const express = require("express");
const { ChessRoom } = require("./room");
const port = process.env.port || 3000;

const app = express();
app.use(express.json());

const gameServer = new colyseus.Server({
  server: http.createServer(app),
});

gameServer.listen(port);
gameServer.define("room", ChessRoom);
