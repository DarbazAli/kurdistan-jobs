import express from 'express'
import companyCtrl from '../controllers/companyControllers.js'
const router = express.Router()

router
  .route('/api/companies')
  .post(companyCtrl.registerCompany)
  .get(companyCtrl.listAllCompanies)

export default router
