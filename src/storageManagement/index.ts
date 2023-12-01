/** 所有的缓存设置在此文件设置好 透出一个函数共外部调用 便于查看系统的所有缓存设置和管理 */

/** 用于系统的黑白模式 */
const authorization = 'System__token';
const password = 'System__password';
const userName = 'System__userName';
const rememberPassword = 'System__rememberPassword';
const colorPrimary = 'System__colorPrimary';
const OldHistoryLength = 'System__OldHistoryLength';
const HistoryType = 'System__HistoryType';
const UserInfo = 'System__UserInfo';
const TempState = 'System__TempState';

/**
 * 用于存储页面传参的state
 */
export function getTempState<T>() {
  let obj = {};
  try {
    obj = JSON.parse(sessionStorage.getItem(TempState) || '{}');
  } catch (error) {
    obj = {};
  }
  return obj as T;
}
export function setTempState(v: Record<string, any>) {
  sessionStorage.setItem(TempState, JSON.stringify(v));
}
export function removeTempState() {
  sessionStorage.removeItem(TempState);
}

export function getUserInfo() {
  let obj = {};
  try {
    obj = JSON.parse(sessionStorage.getItem(UserInfo) || '{}');
  } catch (error) {
    obj = {};
  }
  return obj;
}
export function setUserInfo(v: API.InitialStateProps) {
  sessionStorage.setItem(UserInfo, JSON.stringify(v));
}
export function removeUserInfo() {
  sessionStorage.removeItem(UserInfo);
}

/**
 * 获取跳转下一个页面的行为：POP REPLACE PUSH
 * 记录页面的路由行为 该方法触发时机 页面的useEffect return 先触发 再触发记录。
 * 也就是说这个记录行为发生在页面跳转完成前，页面组件卸载后，
 * 如果想在页面组件卸载时，提前知道下一步的页面跳转行为可在页面组件的effect return方法中开启定时器settimeout 0 加入宏任务
 * @returns 'POP' | 'REPLACE' | 'PUSH'
 */
export function getHistoryType() {
  return sessionStorage.getItem(HistoryType) as 'POP' | 'REPLACE' | 'PUSH';
}

export function setHistoryType(v: 'POP' | 'REPLACE' | 'PUSH') {
  sessionStorage.setItem(HistoryType, String(v));
}
export function removeHistoryType() {
  sessionStorage.removeItem(HistoryType);
}

/** 获取上次的路由长度 */
export function getOldHistoryLength() {
  return Number(sessionStorage.getItem(OldHistoryLength)) || 0;
}

export function setOldHistoryLength(v: number) {
  sessionStorage.setItem(OldHistoryLength, String(v));
}
export function removeOldHistoryLength() {
  sessionStorage.removeItem(OldHistoryLength);
}

export function getAuthorization() {
  return sessionStorage.getItem(authorization) || '';
}

export function setAuthorization(v: string | undefined = '') {
  sessionStorage.setItem(authorization, v);
}
export function removeAuthorization() {
  sessionStorage.removeItem(authorization);
}

/** 保存密码到本地 */
export function setPassword(v: string | undefined = '') {
  localStorage.setItem(password, v);
}
/** 获取本地密码 */
export function getPassword() {
  return localStorage.getItem(password);
}
/** 移除本地密码 */
export function removePassword() {
  localStorage.removeItem(password);
}
/** 保存本地用户名 */
export function setUserName(v: string | undefined = '') {
  localStorage.setItem(userName, v);
}
/** 获取本地用户名 */
export function getUserName() {
  return localStorage.getItem(userName);
}
/** 移除本地用户名 */
export function removeUserName() {
  localStorage.removeItem(userName);
}
/** 保存自动登录状态 */
export function setRemeberPassword(v: '0' | '1' = '0') {
  localStorage.setItem(rememberPassword, v);
}
/** 获取自动登录状态 */
export function getRemeberPassword(): boolean {
  return localStorage.getItem(rememberPassword) === '1';
}
/** 移除自动登录状态 */
export function removeRemeberPassword() {
  localStorage.removeItem(rememberPassword);
}

/** 保存系统主题色 */
export function setColorPrimary(v: string = '#1890ff') {
  localStorage.setItem(colorPrimary, v);
}
/** 获取系统主题色 */
export function getColorPrimary(): string {
  return localStorage.getItem(colorPrimary) || '#1890ff';
}
/** 移除系统主题色 */
export function removeColorPrimary() {
  localStorage.removeItem(colorPrimary);
}
