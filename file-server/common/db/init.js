const mysql = require('mysql')
const config = require('./dbConfig')
const pool = mysql.createPool(config.dbconfig)
// 连接mysql数据库
pool.getConnection(
  function (err, connection) {
    if (err) {
      console.error('error connecting: ' + err.stack)
      console.log('数据库连接失败')
      return
    }
    console.log('数据库连接成功', `[pid==${connection.threadId}]`)
  }
)
class Mysql {
  /**
   * 获取所有图片
   * @param sql
   * @returns {Promise<unknown>}
   */
  queryAll (sql) {
    return new Promise((resolve, reject) => {
      pool.query(sql, function (error, results, fields) {
        if (error) {
          throw error
        };
        resolve(results)
      })
    })
  }

  /**
   * 根据图片id获取图片
   * @param sql
   * @param condition
   * @returns {Promise<unknown>}
   */
  queryByCondition (sql, condition) {
    console.log('[SQL]', sql)
    console.log('[condition]', condition)
    return new Promise((resolve, reject) => {
      pool.query(sql, [condition], function (error, results, fields) {
        if (error) {
          throw error
        }
        resolve(results)
      })
    })
  }

  /**
   * 新增
   * @param sql
   * @param values
   * @returns {Promise<unknown>}
   */
  save (sql, values) {
    console.log('[SQL]', sql)
    console.log('[condition]', values)
    return new Promise((resolve, reject) => {
      pool.query(sql, values, function (error, results, fields) {
        if (error) {
          throw error
        }
        resolve(results)
      })
    })
  }

  /**
   * 更新
   * @param sql
   * @param values
   * @returns {Promise<unknown>}
   */
  updateImage (sql, values) {
    console.log('[SQL]', sql)
    console.log('[values]', values)
    return new Promise((resolve, reject) => {
      pool.query(sql, values, function (error, results, fields) {
        if (error) {
          throw error
        }
        resolve(results)
      })
    })
  }

  /**
   * 删除
   * @param sql
   * @param condition
   * @returns {Promise<unknown>}
   */
  deleteImage (sql, condition) {
    console.log('[SQL]', sql)
    console.log('[condition]', condition)
    return new Promise((resolve, reject) => {
      pool.query(sql, [condition], function (error, results, fields) {
        if (error) {
          throw error
        }
        resolve(results)
      })
    })
  }
}
module.exports = new Mysql()
