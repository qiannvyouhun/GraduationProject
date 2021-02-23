/**
 * 第二层：系统基本设置
 * 设置返回类型、获取path、解析query、处理路由
 */

const querystring = require('querystring')
const handleSortRouter = require('./src/router/sort')


//用于处理 post data
const getPostData = (req) => {
  const promise = new Promise(( resolve, reject ) => {
    if(req.method !== 'POST'){ //如果不是post请求直接返回空，结束
      resolve({})
      return
    }
    if(req.headers['content-type'] !== 'application/json'){ //如果不是 json 格式返回空，结束
      resolve({})
      return
    }
    let postData = ''
    req.on('data', chunk => {
        postData += chunk.toString()
    })
    req.on('end', () => {
        if (!postData) { //没有数据返回空
            resolve({})
            return
        }
        resolve(
            JSON.parse(postData)
        )
    })
  })
  return promise
}

const serverHandle = (req, res) => {
  //设置返回格式 JSON
  res.setHeader('Content-type', 'application/json')

  //获取 path
  const url = req.url
  res.path = url.split('?')[0]

  //解析 query : 解析传入的数据为对象格式
  req.query = querystring.parse(url.split('?')[0])

  //处理 post data 
  getPostData(req).then(postData => {
    req.body = postData
    //处理 sort 路由
    const sortData = handleSortRouter  (req, res) 
    if( sortData ){
      res.end(
        JSON.stringify(sortData)
      )
      return 
    }
    
    //未命中 ，返回 404
    res.writeHead(404, {"Content-type": "text/plain"})
    res.write("404 Not Found\n")
    res.end()
    })
}

module.exports = serverHandle

//env: process.env.NODE.ENV

