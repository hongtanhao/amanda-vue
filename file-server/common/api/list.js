let data = {
  list: [
    '早上八点开晨会，分配今天的代码任务',
    '早上九点和经理开需求会',
    '晚上5点组织人员进行代码review'
  ]
}
const getlist = async ctx => {
  ctx.response.type = 'json'
  ctx.response.body = data.list
}
exports.getlist = getlist
