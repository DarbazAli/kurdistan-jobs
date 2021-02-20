import mongoose from 'mongoose'

const jobSchema = mongoose.Schema({
  company: {
    type: mongoose.Schema.Types.ObjectId,
    // required: true,
    ref: 'Company',
  },

  title: {
    type: String,
    required: true,
    trim: true,
  },

  category: {
    type: String,
    required: true,
  },

  salary: String,

  description: {
    type: String,
    required: true,
  },
  responsibility: {
    type: String,
    required: true,
  },
  skills: {
    type: String,
    required: true,
  },

  additionalNodes: String,

  createdAt: {
    type: Date,
    default: Date.now(),
  },

  expire_at: {
    type: Date,
    default: Date.now,
    expires: 10,
  },
})

// jobSchema.createIndex({ expire_at: 1 }, { expireAfterSeconds: 10 })

export default mongoose.model('Jobs', jobSchema)
