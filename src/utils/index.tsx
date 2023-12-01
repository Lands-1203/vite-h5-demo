import { NavigateRef } from '@/layout';
import { pathMapToPageConfig } from '@config/router.config';
import CryptoJS from 'crypto-js';
import { RouteObject } from 'react-router-dom';

export const getHost = (url: `/${string}`) => {
  return location.protocol.concat('//', location.host, url);
};
/** 将平铺的路由结构转换成树形结构 */
export function createRoutes(routes: RouteObject[]) {
  const routesMap = new Map();

  // 创建映射表
  routes.forEach((route) => {
    routesMap.set(route.path, {
      ...route,
      children: [],
    });
  });
  // 构建树形结构
  routes.forEach((route) => {
    const parentPath =
      pathMapToPageConfig[route.path || '/']?.parentPath ||
      removeLastSegment(route?.path);
    if (parentPath && pathMapToPageConfig[route.path || '/']?.isChilderPath) {
      const parentRoute = routesMap.get(parentPath);
      const nowRoute = routesMap.get(route.path);
      if (parentRoute) {
        parentRoute.children.push(nowRoute);
        // 标记属于废弃节点
        routesMap.set(route.path, {
          ...nowRoute,
          isChild: true,
        });
      }
    }
  });
  // 返回顶级路由
  return Array.from(routesMap.values()).filter((item) => !item.isChild);
}
/** 去除路由的最后一段以'/**'结尾的字符 */
export function removeLastSegment(str: string | undefined) {
  if (!str) return str;
  const segments = str.split('/');
  const lastSegment = segments[segments.length - 1];
  if (lastSegment.startsWith('/')) {
    segments.pop();
    segments.pop();
  } else {
    segments.pop();
  }

  return segments.join('/');
}

/** 非hooks环境使用 */
export const history = {
  push(url: string, state?: Record<string, any>) {
    NavigateRef.current?.(url, {
      replace: false,
      state,
    });
  },
  replace(url: string, state?: Record<string, any>) {
    NavigateRef.current?.(url, {
      replace: true,
      state,
    });
  },
  go(n: number) {
    NavigateRef.current?.(n);
  },
};
/** 返回首页 并关闭缓存 */
export function backHome() {
  history.go(-window.history.state.idx);
  setTimeout(() => {
    history.replace('/');
  }, 0);
}

export const isSuccess = (bizCode: string | undefined) => {
  return bizCode === 'success';
};

/**
 * @author 兰涛
 * @description 单项加密
 * @returns string
 */
export async function sha256Hash(
  plainText: string | undefined,
): Promise<string> {
  if (!plainText) return '';
  // 计算哈希值
  const hash = CryptoJS.SHA256(plainText);
  // 将哈希值转换为十六进制字符串
  const hashString = hash.toString(CryptoJS.enc.Hex);
  // 创建哈希对象
  return hashString;
}
