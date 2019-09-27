function res (resData, statusCode, code, msg) {
  return {
    data: resData,
    status: statusCode,
    code,
    msg
  }
}
exports.response = res
