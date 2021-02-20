import express from 'express'
import jobCtrl from '../controllers/jobControllers.js'
const router = express.Router()

router.route('/api/jobs').post(jobCtrl.createJob).get(jobCtrl.getJobs)

export default router
