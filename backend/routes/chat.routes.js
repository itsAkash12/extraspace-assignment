const {Router} = require("express");
const {getChats} = require("../controllers/chat.controllers");

const chat = Router();

chat.get("/", getChats)
chat.post("/post", );

module.exports = chat;