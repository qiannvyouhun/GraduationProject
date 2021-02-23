/**
 * 第四层：处理返回数据
 * 只关心数据，进行数据的计算等处理
 */

//获取垃圾类型
const getTypeList = () => {
  //返回假数据(格式是正确的)
  return [
    {
      id: 1,
      typeName: '可回收垃圾',
      details: '详情介绍1',
      rule: '投放规则1',
      example: '举例1'
    },
    {
      id: 2,
      typeName: '干垃圾',
      details: '详情介绍2',
      rule: '投放规则2',
      example: '举例2'
    }
  ]
}

//获取测试题目
const getQuestion = (id) => {
  return [
      {
        "id": 1,
        "garbageName": "纸张"
      },
      {
        "id": 2,
        "garbageName": "一次性杯子"
      },
  ]
}

//核对测试答案
const getAnswer = (garbageName, typeName) => {
  return {
    "garbageName": "纸张",
    "typeName": "可回收垃圾",
    "result":"true",
  }
}

// 查询垃圾类型
const postSearchData = (searchData = {}) => {
  //(searchData = {}) 是es6的语法做一个兼容，如果没有则返回空对象
  // searchData 是一个垃圾类型的对象，
  console.log('searchData',searchData)
  return {
    "garbageName": "纸张",
    "typeName": "可回收垃圾",
    "result":"true",
  }
}

module.exports = {
  getTypeList,
  getQuestion,
  getAnswer,
  postSearchData
}