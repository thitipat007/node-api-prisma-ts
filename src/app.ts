import http from 'http'
import dotenv from 'dotenv'
import express from 'express'

dotenv.config()

// import DBConfig from './config/db.conf'
import { initRoutes } from './config/routes.conf'
import ApplicationConfig from './config/app.conf'

const app = express()

const server = http.createServer(app)

// DBConfig.init()
ApplicationConfig.init(app)

initRoutes(app)

const startServer = () => {
    server.listen(process.env.PORT, () => {
        console.log(`Express server listening on ${process.env.IP}:${process.env.PORT}`)
    })
}

setImmediate(startServer)

export default app