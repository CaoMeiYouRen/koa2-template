import path = require('path')
import fs = require('fs-extra')
import Koa = require('koa')
import Router = require('@koa/router')
import bodyParser = require('koa-bodyparser')
import cors = require('@koa/cors')
import serve from 'koa-static'
import cacheControl from 'koa-cache-control'
import {
    appLogger, catchError,
    limiter, timeout
} from './middleware'
import routes from './routes'
import { ROOT_URL, STATIC_MAX_AGE } from './config'

const app = new Koa()
const router = new Router()

app.proxy = true

app.use(appLogger)

app.use(catchError)

app.use(timeout)
app.use(cors())
app.use(bodyParser())
app.use(limiter)

const pubicPath = path.join(__dirname, '../public')
if (fs.pathExistsSync(pubicPath)) {
    // public 并非必须，如果有则挂载
    app.use(serve(pubicPath, {
        maxAge: STATIC_MAX_AGE * 1000
    }))
}

// 加载路由
router.use(ROOT_URL, routes.routes(), routes.allowedMethods())
app.use(router.routes()).use(router.allowedMethods())
// console.log(router.stack)
export { app }