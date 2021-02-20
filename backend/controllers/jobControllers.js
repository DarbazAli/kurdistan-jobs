import Jobs from '../models/jobModel.js'

const createJob = async (req, res) => {
  const { title, category, description, skills, responsibility } = req.body
  const newJob = new Jobs({
    title,
    category,
    description,
    skills,
    responsibility,
  })
  try {
    const savedJob = await newJob.save()
    if (savedJob) {
      return res.status(200).json(savedJob)
    }
  } catch (err) {
    return res.status(400).json({ error: err })
  }
}

const getJobs = async (req, res) => {
  try {
    const jobs = await Jobs.find({})
    if (jobs) return res.status(200).json(jobs)
    else return res.status(404).send('No jobs found')
  } catch (err) {
    return res.status(404).json({ error: err })
  }
}

export default { createJob, getJobs }
