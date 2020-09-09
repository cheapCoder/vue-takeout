/* 
对axio进行2次封装一个能发ajax请求的函数
1. 统一处理请求异常
2. 异步请求成功的数据不是response, 而是response.data
3. 对请求体参数进行urlencode处理, 而不使用默认的json方式(后台接口不支持)
4. 配置请求超时的时间
5. 通过请求头携带token数据
*/

import axios from 'axios'
import qs from 'qs';
import { Indicator } from 'mint-ui';


const instance = axios.create({
  timeout: 20000,
  baseURL: '/api'
});
instance.interceptors.request.use((config) => {
  Indicator.open('加载中...');

  if (config.data instanceof Object) {
    config.data = qs.stringify(config.data)
  }
  return config;
});

instance.interceptors.response.use(
  (response) => {
    Indicator.close();
    return response.data
  },
  (err) => {
    Indicator.close();
    alert(err.message);
    return new Promise(() => {})
  })

export default instance;
