import express from 'express';
import {createPatient, viewyourData, updatePatientData, allPatient, search} from '../controllers/patient_controller.js';
import {validationErrors, patientCreateValidation} from '../middlewares/validation.js'
import { verifyAdmin } from '../middlewares/verifyToken.js';

const router = express.Router();


/*
description: create a patient
method :post
api_url: api/patient
*/
router.post('/',patientCreateValidation(),validationErrors,createPatient)

/*
description: get own patient data
method :get
api_url: api/patient/:referenceNo
*/

router.get('/:referenceNo',verifyAdmin,viewyourData);

/*
description: update patient data
method :patch
api_url: api/patient/:referenceNo
*/
router.put('/:referenceNo',updatePatientData);

/*
description: get Patient
method :get
api_url: api/patient
*/
router.get('/', allPatient );


router.get('/data/search', search );


export default router; 