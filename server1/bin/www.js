/**
 * 第一层：server 逻辑，与业务逻辑无关
 * 定义端口、server、listen
 */

const http = require('http')

const PORT = 5000
const serverHandle = require('../app')

const server = http.createServer(serverHandle)
server.listen(PORT)
