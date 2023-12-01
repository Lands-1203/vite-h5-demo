// @ts-ignore
/* eslint-disable */
import request from '../request';

/** 登录 POST /LandCA/auth/login */
export async function login(body: SYSAPI.F2BRequestLogin, options?: { [key: string]: any }) {
  return request<SYSAPI.F2BResponseLoginResp>('/LandCA/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 登出 POST /LandCA/auth/logout */
export async function logout(body: SYSAPI.F2BRequestLogout, options?: { [key: string]: any }) {
  return request<SYSAPI.F2BResponseLogoutResp>('/LandCA/auth/logout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 注册 POST /LandCA/auth/regist */
export async function regist(body: SYSAPI.F2BRequestRegist, options?: { [key: string]: any }) {
  return request<SYSAPI.F2BResponseRegistResp>('/LandCA/auth/regist', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 发送登录短信 POST /LandCA/auth/sendLoginSms */
export async function sendLoginSms(
  body: SYSAPI.F2BRequestLoginSms,
  options?: { [key: string]: any },
) {
  return request<SYSAPI.F2BResponseLoginSmsResp>('/LandCA/auth/sendLoginSms', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 发送注册短信 POST /LandCA/auth/sendRegistSms */
export async function sendRegistSms(
  body: SYSAPI.F2BRequestRegistSms,
  options?: { [key: string]: any },
) {
  return request<SYSAPI.F2BResponseRegistSmsResp>('/LandCA/auth/sendRegistSms', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
