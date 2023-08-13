require("dotenv").config();
const express = require("express");
const cors = require("cors");
const chat = require("./routes/chat.routes");
const socketIo = require("socket.io");
const connection = require("./config/server");
const { ChatModel } = require("./models/chat.model");
const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use("/chat", chat);

app.get("/", (req, res) => {
  res.send("This is from Backend");
});

const server = app.listen(PORT, () => {
  connection()
  console.log(`server started on http://localhost:${PORT}`);
});


const io = socketIo(server,{
  pingTimeout:60000,
  cors:{
    origin:process.env.FRONTEND_URL
  }
});

io.on('connection', (socket) => {
  console.log('User connected to socket.io');
  
  // Listening for new messages
  socket.on('newMessage', async (data) => {
    try {
      console.log(data);
      const message = new ChatModel(data);
      await message.save();
      // Broadcast the new message to all connected clients
      io.emit('newMessage', message);
    } catch (error) {
      console.error('Error saving message:', error);
    }
  });
});