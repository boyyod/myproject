import axios from "axios"
import qs from "querystring"

const instance=axios.create({
    timeout: 3000,
   
})

// axios.defaults.baseURL = 'https://api.example.com';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

instance.interceptors.request.use(config=> {
    // 在发送请求之前做些什么(例如上面的转换post请求传参的数据格式)---if(config.method==='post'){config.data=qs.stringify(config.data)}
if (config.method==='post') {
    config.data=qs.stringify(config.data)
}
    return config;
  }, error=> {
    // 对请求错误做些什么
    return Promise.reject(error);
  });


  instance.interceptors.response.use(
    response=> { 
        response=>response.status===2000?Promise.resolve(response):Promise.reject(error)//返回的数据成功和失败
  }, 
  error=> {
    // 对响应做些什么
    const {response} =error;
    if (response) {
        // 处理错误状态码（401,402,4024）
        return Promise.reject(response)
    }else{console.log(网络请求中断);}
  });//网络请求失败