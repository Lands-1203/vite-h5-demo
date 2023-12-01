import NotFount from '@/404';
import Layout from '@/layout';
import { createRoutes } from '@/utils';
import { Navigate, RouteObject, createBrowserRouter } from 'react-router-dom';
// 获取所有页面配置
const pageConfigObj = import.meta.glob('/src/pages/**/page.{js,ts}', {
  eager: true,
  import: 'default',
}) as Record<string, API.PageConfig>;
// 获取所有页面组件
const pageComponentObj = import.meta.glob('/src/pages/**/*.{jsx,tsx}', {
  eager: true,
  import: 'default',
}) as Record<string, React.ComponentType>;

export const pathMapToPageConfig: Record<string, API.PageConfig> = {};
// 首页路由
const indexRete: RouteObject = {
  index: true,
};
// 首页配置
let indexPageConfig: API.PageConfig | undefined;
// 页面配置数组 便于循环取值
const pageConfigs = Object.entries(pageConfigObj);

// 计算页面路由
const router: RouteObject[] = pageConfigs.map(([pagePath, config]) => {
  let path = '/';
  const parentPath = config.parentPath || '';
  if (config.pagePath) {
    if (config.pagePath?.startsWith('/')) {
      path = config.pagePath;
    } else {
      path = `${parentPath}/${config.pagePath}`;
    }
  } else {
    path =
      pagePath
        .replace(/^\/src\/pages/, '')
        .replace(/\/page\.ts$|\/page\.js$/, '') || '/';
    if (parentPath) {
      path = `${parentPath}${path}`;
    }
  }

  pathMapToPageConfig[path] = config;
  const key1 = pagePath.replace(/\/page\.ts$|\/page\.js$/, '/index.tsx');
  const key2 = pagePath.replace(/\/page\.ts$|\/page\.js$/, '/index.jsx');
  const Component = pageComponentObj[key1] || pageComponentObj[key2];
  if (config.index) {
    // 重定向到首页
    indexRete.Component = () => <Navigate replace to="/index" />;
    indexPageConfig = config;
  }
  const routerItem: RouteObject = {
    path,
    Component,
  };
  return routerItem;
});
if (indexPageConfig) {
  pathMapToPageConfig['/'] = indexPageConfig;
}
const routeTree = createRoutes(router);

routeTree.unshift(indexRete);
console.log(routeTree);

const routers = createBrowserRouter([
  {
    path: '/',
    children: routeTree,
    Component: () => {
      return <Layout />;
    },
    // query 参数不同会重新触发该方法 加入refresh参数 避免初始话数据重复请求函数调用
    // loader: async (params) => {
    //   const url = params.request.url;
    //   const query = new URL(url).searchParams;
    //   const refresh = query.get('refresh');
    //   if (refresh === 'no') {
    //     // 告诉Layout保持 原来的数据
    //     return getUserInfo();
    //   }
    //   const authorization = query.get('authorization');
    //   authorization && setAuthorization(authorization);
    //   // 每次刷新或初次进入页面的时候之前刷新全局数据
    //   const res = await getInitialState();
    //   setUserInfo(res);
    //   return res;
    // },
  },
  {
    path: '*',
    element: <NotFount />,
  },
]);

export default routers;
