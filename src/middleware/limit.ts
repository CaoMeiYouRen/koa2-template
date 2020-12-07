import RateLimit from 'koa2-ratelimit/dist/RateLimit'
import { LIMIT } from '@/config'
/**
 * 限流
 */
export const limiter = RateLimit.middleware({
    interval: { sec: LIMIT.LIMIT_INTERVAL },
    max: LIMIT.LIMIT_MAX,
    message: '请求次数超限; Too many requests, please try again later.',
})