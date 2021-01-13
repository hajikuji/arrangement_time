Vue.prototype.$bus = new Vue()

Vue.mixin({
  methods: {
    $get(url, params) {
      return axios.get(url, { params })
    },
    // axios的post方法 引入Qs序列化参数
    $post(url, param) {
      return axios.post(url, Qs.stringify(param))
    },
    // 获得query对象的值
    $getQueryValue(key) {
      let str = location.search.substring(1)
      let queryArr = str.split("&")
      let queryObjArr = queryArr.map(item => {
        return {
          key: item.split("=")[0]
          , value: item.split("=")[1]
        }
      })
      let result = queryObjArr.filter((item, index) => item.key == key, key)
      // 未获取到query值的异常处理
      if (!result[0]) return false

      return result[0].value
    },
    // sessionStorange相关操作 
    $setSessionItem(key, value) {
      return sessionStorage.setItem(key, JSON.stringify(value))
    },
    $getSessionItem(key) {
      return JSON.parse(sessionStorage.getItem(key))
    },
    $removeSessionItem(key) {
      return sessionStorage.removeItem(key)
    },
    // 时间间隔转分钟
    $durationToMinutes(inDurationArr = []) {
      if (!(inDurationArr instanceof Array) || inDurationArr.length !== 2) {
        console.log('未获得有效的参数')
        return false
      } else {
        let durationTime = inDurationArr.reduce((pre, cur) => this.$getDateTime(cur) - this.$getDateTime(pre))
        return durationTime / 1000 / 60
      }
    },
    $getDateTime(_date){
      return new Date(_date).getTime()
    }
  }
})