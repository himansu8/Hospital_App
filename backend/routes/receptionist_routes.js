import express from "express"
import { receptionistSignup, receptionistLogin,singleReceptionistData,allReceptionistData,deleteReceptionist,updateReceptionist, logoutTokenRecep} from "../controllers/Reception_controller.js"
import {middleWare, isDoctor, isDean} from "../middlewares/auth.verifyMiddleWare.js"
import { receptionistSignupValidation, receptionistLoginValidation, validationErrors } from "../middlewares/validation.js"
import { verifyAdmin, verifyAdminAndDoctor } from "../middlewares/verifyToken.js"

const routes = express.Router()

routes.post('/signup',verifyAdmin,receptionistSignupValidation(),validationErrors,receptionistSignup)
routes.post('/login',receptionistLoginValidation(),validationErrors,receptionistLogin)
routes.get('/:referenceNo',verifyAdminAndDoctor,singleReceptionistData)
routes.get('/',verifyAdminAndDoctor, allReceptionistData );
routes.delete('/:referenceNo',verifyAdminAndDoctor,deleteReceptionist)
routes.put('/:referenceNo',verifyAdminAndDoctor,updateReceptionist)
routes.get("/data/removetoken",logoutTokenRecep )

export default routes