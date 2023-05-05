import app from './app'

const env = process.env.NODE_ENV = process.env.NODE_ENV || 'development'

if (env === 'development' || env === 'test') {

}

export default app
