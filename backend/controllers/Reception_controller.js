import ReceiptionsModel from "../models/Receiptions_model.js";
import doctorModel from "../models/doctor_model.js";
import Deanmodel from "../models/dean_model.js";
import bcrypt from "bcrypt";
import sendMail from "../email.js";
import mongoose from "mongoose";
import config from "../config/config.js";
import jwt from "jsonwebtoken"

export const receptionistSignup = async (req, res) => {
    try {
        let { name, userName, password, gender, email, mobile, address, addedBy } = req.body;

        let doctorFound = await doctorModel.findById(req.user.user_id) 
        let deanFound = await Deanmodel.findById(req.user.user_id)

        if (doctorFound || deanFound){
            let userNameFound = await ReceiptionsModel.findOne({ userName: userName })
            if (userNameFound) {
                return res.status(404).json({ error: "username was already registered" })
            }
            let emailFound = await ReceiptionsModel.findOne({ email: email })
            if (emailFound) {
                return res.status(404).json({ error: "Email was already registered" })
            }
            let mobileFound = await ReceiptionsModel.findOne({ mobile: mobile })
            if (mobileFound) {
                return res.status(404).json({ error: "mobile number was already registered" })
            }
            // hassing the password
        password = await bcrypt.hash(password, 12)

        const receptionistData = {
            name,
            userName,
            password,
            gender,
            email,
            mobile,
            address,
            addedBy
        }

        await ReceiptionsModel.create(receptionistData)

        res.status(200).json({ msg: `${receptionistData.userName}  signup successfully` })
        let usermailBody = {
            to: email,
            subject: "Thanking for joining with us",
            //text: `Please Verify Your Email ${config.BASE_URL}/api/user/verify/email/${userverifyToken.email}`,
            html: `<p>Hi, <b>${receptionistData.name}</b></p>
                        Please find your your login details 
                        <h3>url = <b>http://localhost:3001/api/receptionist/login</b></h3>
                        <h3>User name = <b>${receptionistData.email}</b></h3>
                        <h3>Password = <b>${req.body.password}</b></h3>.
                        <p> Thank you for choosing us. </p>`
        }
        sendMail(usermailBody)
        }
        else {            
            return res.status(404).send("Your are not authorized for creating the receptionist")
    }
        
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ error: 'something went wrong in recep' });
    }
}

export const receptionistLogin = async (req, res) => {
    try {
        var { email, password } = req.body;
        let emailFound = await ReceiptionsModel.findOne({ email: email });
        if (!emailFound) {
            return res.status(401).json({ error: 'Incorrect email id' })
        }
        let matchPassword = await bcrypt.compare(password, emailFound.password);
        if (!matchPassword) {
            return res.status(401).json({ error: 'Incorrect password' })
        }
        const token = jwt.sign(
            { user_id: emailFound._id, role: "receptionist" },
            config.PRIVATE_KEY
        );
        //console.log(deanFound)
        var { password, ...otherDetails } = emailFound._doc;

       res.status(200).json({ msg: `${emailFound.name} was login successfully`, token, details: { ...otherDetails } })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "something error in login" })
    }
}


export const singleReceptionistData = async (req, res) => {
    try {
        const { referenceNo } = req.params;
        if (!mongoose.isValidObjectId(referenceNo)) {
            return res.status(400).json({ error: 'please pass valid Receptionist reference number' })
        }


        let receptionistData = await ReceiptionsModel.findById(referenceNo);


        if (!ReceiptionsModel) {
            return res.status(404).json({ error: 'Receptionist does not found' })
        }
        res.status(200).send(receptionistData)

    }
    catch (error) {
        console.log(error)
        res.status(500).json({ error: 'No such Receptionist is availabvle in this hospital' })
    }
}

export async function allReceptionistData(req, res) {
    try {
        let receptionistData = await ReceiptionsModel.find()
        if (!receptionistData) {
            return res.status(404).json({ error: "No Receptionist available" })
        }
        res.status(200).send(receptionistData)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: "Something went wrong" })
    }
}


export const deleteReceptionist = async (req, res) => {
    try {
        const { referenceNo } = req.params;
        if (!mongoose.isValidObjectId(referenceNo)) {
            return res.status(400).send({ error: 'Please pass valid Reception referenece no' })
        }
        let receptionist = await ReceiptionsModel.findOneAndDelete({ _id: referenceNo });
        if (!receptionist) {
            return res.status(404).json({ error: 'no such Receptionist is available in this hospital' })
        }
        res.status(200).json({ msg: 'receptionist deleted sucessfully' })
    }
    catch (error) {
        console.log(error)
        res.status(401).send({ error: "you can't delete the reception" })
    }
}


export const updateReceptionist = async (req, res) => {
    try {
        const { referenceNo } = req.params;

        if (!mongoose.isValidObjectId(referenceNo)) {
            return res.status(400).json({ error: 'please pass valid Reference No' })
        }


        let updateReceptionistData = await ReceiptionsModel.findByIdAndUpdate(
            referenceNo,
            {
                $set: {
                    name: req.body.name, password: req.body.password, gender: req.body.gender,
                    email: req.body.email, mobile: req.body.mobile, address: req.body.address
                }
            },
            { new: true }
        );
        if (!updateReceptionistData) {
            return res.status(404).json({ error: 'Reception not found' })
        }

        res.status(200).json({ msg: "Reception Data updated successfylly" })
    }
    catch (error) {
        console.log(error)
        res.status(500).send({ error: "Some thing went wrong while update the Receptioninst" })
    }
}

export const logoutTokenRecep = async (req, res, next) => {
    try{
      res.clearCookie('access_token'); 
      res.status(201).send('Token removed successfully')
    }
    catch(error){
      next(error)
    }
    }