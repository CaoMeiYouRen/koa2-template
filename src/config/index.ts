import dotenv = require('dotenv')
import path = require('path')
import fs = require('fs-extra')
const modes = [
    '.env.local',
    '.env',
]
let envParsed = {}
for (let i = 0; i < modes.length; i++) {
    const mode = modes[i]
    const result = dotenv.config({ path: mode })
    if (result.parsed) {
        envParsed = Object.assign(result.parsed, envParsed)
    }
}
if (process.env.NODE_ENV === 'development') {
    console.log(envParsed)
}
const env = process.env
export const PORT = Number(process.env.PORT || 5000)

/**
 * 是否为debug
 */
export const IS_DEBUG = env.NODE_ENV === 'development'

// 超时时间
export const TIMEOUT_MAX_AGE = Number(env.TIMEOUT_MAX_AGE || 15000)

// 路由根路径
export const ROOT_URL = env.ROOT_URL || ''

/**
 * 限流配置
 */
export const LIMIT = {
    LIMIT_INTERVAL: Number(env.LIMIT_INTERVAL || 60),
    LIMIT_MAX: Number(env.LIMIT_MAX || 30),
}

/**
 * 浏览器 user-agent
 */
export const UA = env.UA || 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36'

/**
 * 时区
 */
export const TZ = env.TZ || 'Asia/Shanghai'

/**
 * 是否阻止爬虫
 */
export const DISALLOW_ROBOT = Boolean(env.DISALLOW_ROBOT)

/**
 * 静态资源缓存
 */
export const STATIC_MAX_AGE = Number(env.STATIC_MAX_AGE || 0)