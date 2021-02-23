/**
 * 第三层：逻辑层
 * router只管路由，返回数据等（不关心数据是否正确）
 */

const { 
  getTypeList,
  getQuestion,
  getAnswer,
  postSearchData
} = require('../controller/sort')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleSortRouter = (req, res) => {
  const method  = req.method  //get post
  console.log('接口',method,res.path)

  //获取垃圾类型列表
  if(method === 'GET' && res.path === '/sort/getType'){
    const listData = getTypeList()
    return new SuccessModel(listData)
  } 

  //获取测试题目
  if(method === 'GET' && res.path === '/sort/getTestQuestion'){
    const id = req.query.id
    const data = getQuestion(id)
    return new SuccessModel(data)
  } 

  //核对测试答案
  if(method === 'GET' && res.path === '/sort/getTestAnswer'){
      const garbageName = req.query.garbageName
      const typeName = req.query.typeName
      const data = getAnswer(garbageName, typeName)
      return new SuccessModel(data)
  } 

  //查询垃圾类别
  if(method === 'POST' && res.path === '/sort/search'){
    const data = postSearchData(req.body)
    return new SuccessModel(data)
    // return {
    //   msg: '这是查询垃圾类别的接口'
    // }
  } 
}

module.exports = handleSortRouter
