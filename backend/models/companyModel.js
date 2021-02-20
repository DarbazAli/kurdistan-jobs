import mongoose from 'mongoose'

const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },

    about: String,
    province: String,
    address: String,
    verified: Boolean,

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
  }
)

companySchema.index({ name: 1 }, { unique: true })

export default mongoose.model('Company', companySchema)
