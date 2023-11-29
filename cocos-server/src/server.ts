import cors from 'kcors'
import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import logger from 'koa-logger'

import { config } from './config'
import rootRouter from './routes/root'


const app = new Koa()

app.use(cors())
app.use(bodyParser({ jsonLimit: '50mb' }))
app.use(logger())
app.use(rootRouter.routes())

const PORT = config.port

const server = app.listen(PORT, async () => {
    try {
    // eslint-disable-next-line no-console
        console.info(`App listening on port ${PORT}!`)
    } catch (e) {
    // eslint-disable-next-line no-console
        console.error(`Init failed! ${e.message}`)
    }
})

export default server
