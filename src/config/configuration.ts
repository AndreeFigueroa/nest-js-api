export default () => ({
  nodeEnv: process.env.NODE_ENV,
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    storage: process.env.DATABASE_STORAGE,
    dialect: process.env.DATABASE_DIALECT,
    autoLoadModels: process.env.DATABASE_AUTO_LOAD_MODELS,
    synchronize: process.env.DATABASE_SYNCHRONIZE,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN,
  },
});
