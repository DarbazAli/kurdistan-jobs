const config = {
  port: process.env.PORT || 5000,
  env: process.env.NODE_ENV || 'development',
  jwtSecret: process.env.JWT_SECRET || 'my_awesome_jwt_secret',
  mongoUri: process.env.MONGO_URI || 'mongodb://localhost:27017/test',
}

export default config
