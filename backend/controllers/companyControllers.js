import Company from '../models/companyModel.js'

const registerCompany = async (req, res) => {
  const { email, password, name, about } = req.body
  const company = new Company({
    email,
    password,
    name,
    about,
  })
  try {
    const isExist = await Company.findOne({ email: email })
    if (isExist)
      return res.status(400).json({ error: 'This email already exist' })
    else {
      await company.save()
      return res.status(200).json({ message: 'Company registerd successfuly' })
    }
  } catch (err) {
    return res.status(400).json({ error: err })
  }
}

const listAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find()
    return res.status(200).json(companies)
  } catch (err) {
    return res.status(404).json({ error: err })
  }
}

export default { registerCompany, listAllCompanies }
