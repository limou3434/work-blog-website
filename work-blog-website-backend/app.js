import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

// 获取当前工作目录和文件名称的绝对路径
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 创建一个 express 应用
var app = express();

// 挂载各类中间件
app.use(logger('dev')); // 记录 HTTP 请求日志，格式为 “请求方法 路径 状态码 响应耗时 - 响应体大小”
app.use(express.json()); // 解析 JSON 格式的请求体到 “req.body.字段” 中
app.use(express.urlencoded({ extended: false })); // 解析 URL 编码的请求体到 “req.body.字段” 中
app.use(cookieParser()); // 解析客户端请求头中的 Cookie 数据

app.use('/', indexRouter);
app.use('/users', usersRouter);

export default app;