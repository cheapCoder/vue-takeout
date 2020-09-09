import instance from './axios'

export const reqAddress = async function (geohash) {
  return instance(`/position/${geohash}`)
}

export const reqFoodCategories = () => instance("/index_category")

export const reqShops = (latitude, longitude) => instance("/shops", {
  params: {
    latitude,
    longitude
  }
})

// 发送短信验证码
export const reqSmsCaptcha = function (phone) {
  return instance("/sendcode", {
    params: {
      phone
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
  }
})
// 手机号验证码登陆
export const reqSmsLogin = ({ phone, smsCaptcha  }) => instance({
  url: '/login_sms',
  method: "POST",
  data: {
    phone,
    code: smsCaptcha
  }
})

// // 5.用户名密码登陆
// export const reqPwdLogin = ({name, pwd, captcha}) => instance.post('/login_pwd', {name, pwd, captcha})

// // 6. 手机号验证码登陆
// export const reqSmsLogin = ({phone, smsCaptcha}) => instance.post('/login_sms', {phone, code: smsCaptcha})
