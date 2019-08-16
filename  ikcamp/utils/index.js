import config from './config'  //接受另外一个js文件里抛出的对象
import * as Mock from './mock'  //接受另外一个js文件里抛出的所有对象并命名为 Mock


let util = {
  isDEV: config.isDev,
  log() {
    this.isDEV && console.log(...arguments)
  },
  alert(title = '提示', content = config.defaultAlertMessage) {
    if('object' === typeof content)
    {
      content = this.isDEV && JSON.stringify(content) || config.defaultAlertMessage
    }
    wx.showModal({
      title: 'title',
      content: 'content'
    })
  },
  setStorageData(key, value = '', cb) {
    wx.setStorage({
      key: key,
      data: value,
      success () {
        cb && cb()
      }
    })
  },
  getStorageData(key, cb) {
    wx.getStorage({
      key: key,
      success (res) {
        cb && cb()
      },
    })
  },
  request(opt) {
    let { url, data, header, method, dataType, mock = false} = opt
    let self = this
    return new Promise((resolve, reject) => {
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
          fail(err) {
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
