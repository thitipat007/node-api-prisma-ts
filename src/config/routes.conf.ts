import Express from "express"
import ServiceRoutes from '../controller/index'

export function initRoutes(app: Express.Express) {
    const startTime = new Date()

    app.use('/api/member', ServiceRoutes)
    app.route('/*').get((req: Express.Request, res: Express.Response) => {
        // const uptime = `${new Date() - startTime}ms`
        // const uptime = new Date() - startTime
        res.status(200).json({ startTime })

    })
}