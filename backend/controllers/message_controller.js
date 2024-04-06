import message_model from "../models/message_model.js";

export async function sendMessage(req, res) {
    try {
        const { firstName, lastName, email, phone, message } = req.body;
        if (!firstName || !lastName || !email || !phone || !message) {
            return res.status(400).json({ error: "Please Fill Full Form!" })
        }
        await message_model.create({ firstName, lastName, email, phone, message })
        res.status(200).json({ msg: "Message Sent!" })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: "Something went wrong from sending the message" })
    }
}


export async function getAllMessage(req, res) {
    try {
        const messages = await message_model.find();
        res.status(200).send(messages)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: "Something went wrong for finding the message" })
    }
}