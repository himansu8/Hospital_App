import  express from "express";
import { deanSignup, deanLogin, logoutToken } from "../controllers/dean_controller.js";
import { deanLoginValidation,validationErrors } from "../middlewares/validation.js";

const routes = express.Router();

routes.post('/signup', deanSignup)
routes.post('/login',deanLoginValidation(),validationErrors,deanLogin)
routes.get("/removetoken", logoutToken)
export default routes