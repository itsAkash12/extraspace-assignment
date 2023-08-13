const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    username:{type:String, require:true},
    message:{type:String, require:true},
    timestamp: { type: Date, default: Date.now }
})

const ChatModel = mongoose.model("Messages", chatSchema)

module.exports = {ChatModel};