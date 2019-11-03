import config from './config'  //接受另外一个js文件里抛出的对象
import * as Mock from './mock'  //接受另外一个js文件里抛出的所有对象并命名为 Mock


let util = {
  isDEV: config.isDev,//isDEV === true
  log() {
    this.isDEV && console.log(...arguments)
  },
  alert(title = '提示', content = config.defaultAlertMessage) {
    if('object' === typeof content)
    {
      content = this.isDEV && JSON.stringify(content) || config.defaultAlertMessage
    }//JSON.stringify()函数是用来序列化对象的，无论输入什么，输出的都是字符串类型
    wx.showModal({
      title: 'title',
      content: 'content'
    })
  },
  setStorageData(key, value = '', cb) {
    wx.setStorage({//将数据存储在本地缓存中指定的 key 中
      key: key,
      data: value,
      success () {//回调函数
        cb && cb()
      }
    })
  },
  getStorageData(key, cb) {//从本地缓存中异步获取指定 key 的内容
    wx.getStorage({
      key: key,
      success (res) {
        cb && cb()
      },
    })
  },
  request(opt) {
    let { url, data, header, method, dataType, mock = false} = opt  //解构函数
    let self = this
    return new Promise((resolve, reject) => {
      //Promise的构造函数接收一个参数，是函数，并且传入两个参数：resolve，reject，分别表示异步操作执行成功后的回调函数和异步操作执行失败后的回调函数。按照标准来讲，其实resolve是将Promise的状态置为fullfiled，reject是将Promise的状态置为rejected。
      if(mock) {
        let res = {
          statusCode: 200,
          data: Mock[url]
        }
        if(res && res.statusCode === 200 && res.data) {
          resolve(res.data)
        } else {
          self.alert('提示', res)
          reject(res)
        }
      } else {
        wx.request({
          url: url,
          data: data,
          header:header,
          method: method,
          dataType: dataType,
          success(res) {
            if (res && res.statusCode === 200 && res.data) {
              resolve(res)
            } else {
              self.alert('提示', res)
              reject(res)
            }
          },
          fail(err) {//接口调用失败的回调函数
            self.log(err)
            self.alert('提示', err)
            reject(err)
          }
        })
      }
    })
  }
}
export default util
