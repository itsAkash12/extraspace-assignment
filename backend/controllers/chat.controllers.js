const {ChatModel} = require("../models/chat.model");


const getChats = async(req,res)=> {
    try {
        const allMessages = await ChatModel.find();
        res.send(allMessages);
    } catch (error) {
        res.send({
            status:"error",
            message:error.message
        })
    }
}

const postMessage = async(req,res)=> {
    const reqObj = req.body;
    try {
        
    } catch (error) {
        
    }
}

module.exports = {
    getChats
}