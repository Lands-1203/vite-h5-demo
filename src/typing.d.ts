// 全局类型定义

namespace API {
  type HeadProps = {
    /**
     * 是否将返回按钮显示为头像
     * @default false
     */
    avatar?: boolean;
  };
  interface PageConfig {
    /** 页面名称 */
    title: string;
    /** 是否显示 layout */
    layout?: boolean;
    /** 是否是跟地址页面 */
    index?: true;
    /** 不填写默认根据文件结构生成路由 */
    pagePath?: string;
    /** 不填写默认根据路由地址生成属性结构 例如/a/b 是/a 的子页面  */
    parentPath?: `/${string}`;
    head?: HeadProps | false;
    /** 是否属于父子页面 */
    isChilderPath?: boolean;
  }
  interface InitialStateProps {
    userinfo?: SYSAPI.accountResp & {
      accessToken?: string;
      currentRole?: SYSAPI.OrganizationRpcPojo;
    };
  }
  type TabBarList = {
    pagePath: string;
    text: string;
    icon: React.ReactNode;
  }[];
  interface TabBarConfig {
    /** 菜单栏配置 */
    list?: TabBarList;
    /** 菜单栏的背景色 */
    background?: string;
    padding?: string;
  }
  interface LayoutParams {
    setInitialState: React.Dispatch<React.SetStateAction<InitialStateProps>>;
    initialState: InitialStateProps;
    refresh: () => Promise<void>;
  }
  type LayoutReturns = {
    /** 发生跳转时的钩子 返回false 代表不渲染pathName页面 否则不渲染 */
    onPageChange?: (pathName: string) => boolean | void | undefined;
    /** 页面layout的背景色 */
    pageBacground?: string;
    /** 页面菜单栏配置 */
    tabBar?: TabBarConfig;
  };
  type RunTimeLayoutConfig = (layoutParams: LayoutParams) => LayoutReturns;
  type Record = Record<string, any>;
}
