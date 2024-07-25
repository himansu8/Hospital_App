import express from "express"
import { doctorSignup, updateDoctorData, deleteDoctor, addAvailability, allDoctorData, logoutTokenDoc } from "../controllers/doctor_controllers.js"
import { doctorLogin } from "../controllers/doctor_controllers.js"
import { viewDoctorData } from "../controllers/doctor_controllers.js"
import { isDean , isDoctor} from "../middlewares/auth.verifyMiddleWare.js"
import { validationErrors, doctorSignupValidation,doctorLoginValidation} from '../middlewares/validation.js'
import { verifyAdmin } from "../middlewares/verifyToken.js"


const routes = express.Router()

routes.post('/signup',verifyAdmin,doctorSignupValidation(),validationErrors, doctorSignup)
routes.post('/login',doctorLoginValidation(),validationErrors,doctorLogin)
routes.post('/availability',isDoctor, addAvailability);
routes.get('/:doctorId',verifyAdmin, viewDoctorData);
routes.get('/',verifyAdmin, allDoctorData);
routes.get('/data/doctors', allDoctorData);
routes.put('/:doctorId',verifyAdmin,updateDoctorData);
routes.delete('/:doctorId',verifyAdmin, deleteDoctor );
routes.get("/data/removetoken",logoutTokenDoc )
export default routes