/* 
对axio进行2次封装一个能发ajax请求的函数
1. 统一处理请求异常
2. 异步请求成功的数据不是response, 而是response.data
3. 对请求体参数进行urlencode处理, 而不使用默认的json方式(后台接口不支持)
4. 配置请求超时的时间
5. 通过请求头携带token数据
*/

import qs from 'qs';
import { Indicator, Toast, MessageBox } from 'mint-ui';

import router from '../router/index'
import axios from 'axios'



const instance = axios.create({
  timeout: 20000,
  baseURL: '/api'
});
instance.interceptors.request.use((config) => {
  Indicator.open('加载中...');

  // 处理params参数
  if (config.data instanceof Object) {
    config.data = qs.stringify(config.data)
  }
  if (config.headers.needToken) {
    const token = localStorage.getItem("userToken") || '';
    if (token) {
      config.headers['authorization'] = token
      // config.headers.Authorization = token;
    } else {
      throw new Error("请求登录:>");
    }
  }
  return config;
});

instance.interceptors.response.use(
  (response) => {
    Indicator.close();
    return response.data
  },
  (err) => {  // 统一处理错误
    Indicator.close();
    if (err.response) {  //若是服务器返回，则是资源请求问题
      // Toast(err.message);
      if (err.response.status === 401) {
        if (router.currentRoute.path !== '/login') {
          // router.currentRoute.path = '/login';
          router.replace('/login');
        }
      } else if (err.response.status === 404) {
        MessageBox("请求资源404");
      } else {
        Toast("请求有其它问题");
      }
    } else {        //若不是服务器返回，则是无token被interceptor.request拦截
      router.replace('/login')
      // Toast("没有token:" + err.message);
    }
    return new Promise(() => { })
  })

export default instance;
