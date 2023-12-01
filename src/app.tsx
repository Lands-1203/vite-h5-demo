import { getAccountMain } from '@/servers/hzChain/CustomerAccount';
import { history, isSuccess } from '@/utils';
import { Notify } from 'react-vant';
import { getAuthorization, removeAuthorization } from './storageManagement';
export async function getInitialState(): Promise<API.InitialStateProps> {
  if (!getAuthorization()) {
    return {};
  }
  const res = await getAccountMain({});
  if (!isSuccess(res.bizCode)) {
    Notify.show({
      message: '获取个人信息失败',
    });
    removeAuthorization();
    history.replace('/user/login');
    return {};
  }
  let currentRole: SYSAPI.OrganizationRpcPojo = {};
  // 获取当前身份
  if (Number(res.bizContent?.identity) > 0) {
    currentRole = res.bizContent?.organizations?.find(
      (item) => item.id === res.bizContent?.identity,
    ) as SYSAPI.OrganizationRpcPojo;
  }
  return {
    userinfo: {
      currentRole,
      accessToken: getAuthorization(),
      ...res.bizContent,
    },
  };
}
/** 全局layout布局 */
export const layout: API.RunTimeLayoutConfig = ({
  initialState,
}): API.LayoutReturns => {
  return {
    onPageChange(pathname) {
      if (
        !pathname.startsWith('/user') &&
        (!getAuthorization() || !initialState.userinfo?.accessToken)
      ) {
        history.replace('/user/login');
        return false;
      }
    },
    pageBacground: '#f8f8f8',
    tabBar: {
      // padding: '5px 0',
      background: '#fff',
      list: [],
    },
  };
};
