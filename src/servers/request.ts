import { getAuthorization, removeAuthorization } from '@/storageManagement';
import { history } from '@/utils';
import axios, { AxiosRequestConfig, AxiosRequestHeaders } from 'axios';
import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';

// 全局时间格式化
function formatQuery(query: any): any {
  if (query instanceof Object) {
    for (const key in query) {
      if (Object.prototype.hasOwnProperty.call(query, key)) {
        const item = query[key];
        if (dayjs.isDayjs(item)) {
          query[key] = dayjs(query[key]).format('YYYY-MM-DD HH:mm:ss');
          continue;
        }
        if (item instanceof Object) {
          formatQuery(item);
          continue;
        }
      }
    }
  }

  return query;
}

// 创建 axios 实例
const instance = axios.create();
// 添加请求拦截器
instance.interceptors.request.use((config) => {
  // 在请求发送前做一些处理，例如添加请求头等
  const reqSerial = `${uuidv4()}-${new Date().getTime()}`;
  config.data = formatQuery({ reqSerial, ...config.data });

  if (['put', 'post'].includes(String(config.method).toLowerCase())) {
    const { bizContent, reqSerial, ...body } = config.data;
    config.data = { reqSerial, bizContent: { ...bizContent, ...body } };
  }

  config.params = formatQuery(config.params);
  config.headers = {
    Authorization: getAuthorization(),
    reqSerial,
    ...config.headers,
  } as Record<string, any> as AxiosRequestHeaders;
  return config;
});

// 与后端约定的响应数据格式
type ResponseStructure = {
  bizCode?: string;
  bizMsg?: string;
  sysCode?: string;
  sysMsg?: string;
  reqSerial?: string;
  bizContent: API.Record;
};
// 添加响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 拦截响应数据，进行个性化处理
    const { bizCode = '', sysCode } = response.data as ResponseStructure;

    if (sysCode === '000000' && bizCode.slice(2) === '0000') {
      // 成功
      response.data.bizCode = 'success';
    } else if (['2', '3'].includes(bizCode?.[2])) {
      // 受理
      response.data.bizCode = 'accepted';
    } else {
      if (
        ['IA0002', 'IA0003', 'IA0007', 'IA0013', 'IA0015', 'GW0002'].includes(
          bizCode,
        )
      ) {
        //   notification.error({
        //     message: '登录失效',
        //     description: bizMsg,
        //   });
        removeAuthorization();
        const url = '/user/login';
        history.replace(url);
      }
    }
    return response;
  },
  (error) => {
    // 处理响应错误
    if (error.response) {
      // Axios 的错误
      // 请求成功发出且服务器也响应了状态码，但状态代码超出了 2xx 的范围
      // notification.error({
      //   message: '服务器错误',
      //   description: `响应状态:${error.response.status}`,
      // });
    } else if (error.request) {
      // 请求已经成功发起，但没有收到响应
      // \`error.request\` 在浏览器中是 XMLHttpRequest 的实例，
      // 而在node.js中是 http.ClientRequest 的实例
      // notification.error({
      //   message: '网络错误',
      //   description: '请求超时，请稍后重试',
      // });
    } else {
      console.dir(error);
      // 发送请求时出了点问题
      // notification.error({
      //   message: '请求错误',
      //   description: '请求错误，请重试',
      // });
    }
    return Promise.reject(error);
  },
);

const request = <T>(url: string, options: AxiosRequestConfig) => {
  return new Promise<T>((resolve, reject) => {
    instance
      .request<T>({
        url,
        timeout: 30000,
        ...options,
      })
      .then((req) => {
        resolve(req.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
export default request;
