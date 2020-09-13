import instance from './axios'

export const reqAddress = async function (geohash) {
  return instance(`/position/${geohash}`)
}

export const reqFoodCategories = () => instance("/index_category", {
  headers: {
    needToken: true
  }
})

export const reqShops = (latitude, longitude) => instance("/shops", {
  params: {
    latitude,
    longitude
  },
  headers: {
    needToken: true
  }
})

// 发送短信验证码
export const reqSmsCaptcha = function (phone) {
  return instance("/sendcode", {
    params: {
      phone
    },
    headers: {
      needToken: false
    }
  })
}

// 用户名密码登陆
export const reqPwLogin = ({name, pwd, captcha }) => instance({
  url: "/login_pwd",
  method: "POST",
  data: {
    name,
    pwd,
    captcha
  },
  headers: {
    needToken: false
  }
})
// 手机号验证码登陆
export const reqSmsLogin = ({ phone, smsCaptcha  }) => instance({
  url: '/login_sms',
  method: "POST",
  data: {
    phone,
    code: smsCaptcha
  },
  headers: {
    needToken: false
  }
})

// 自动登录请求
export const reqAutoLogin = () => instance({
  url: '/auto_login',
  headers: {
    needToken: true
  },
})

export const reqShopGoods = () => instance("/shopGoods")
export const reqShopInfo = () => instance("/ShopInfo")
export const reqShopRating = () => instance("/ShopRating")