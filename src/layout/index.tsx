import { getInitialState, layout as layoutConfigFn } from '@/app';
import Header from '@/components/Header';
import {
  getOldHistoryLength,
  setHistoryType,
  setOldHistoryLength,
} from '@/storageManagement';
import { pathMapToPageConfig } from '@config/router.config';
import {
  createContext,
  createRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react';
import { AliveScope } from 'react-activation';
import {
  NavigateFunction,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { Tabbar } from 'react-vant';

export const NavigateRef = createRef<NavigateFunction>();

export const GlobalContext = createContext<API.LayoutParams>(
  {} as API.LayoutParams,
);
const Layout: React.FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  // 是否渲染页面
  const [isPageRender, setIsPageRender] = useState<boolean | void | undefined>(
    false,
  );

  // 导出全局跳转对象 给在utils对象中history 提供跳转能力 便于非组件对象中跳转
  useImperativeHandle(NavigateRef, () => {
    return navigate;
  });
  // 全局存储对象
  const [globalState, SetGlobalState] = useState<API.InitialStateProps>();

  // 全局刷新方法
  const refresh = async () => {
    const res = await getInitialState();
    SetGlobalState(res);
  };
  // 获取APP透出的布局数据
  const layoutConfig = useMemo<API.LayoutReturns>(() => {
    // 重新执行appts.layout() 方法返回最新布局对象
    return layoutConfigFn({
      initialState: globalState || {},
      setInitialState: SetGlobalState as React.Dispatch<
        React.SetStateAction<API.InitialStateProps>
      >,
      refresh,
    });
  }, [globalState]);
  useEffect(() => {
    getInitialState().then((res) => {
      // 获取路由跳转成功前的初始数据
      SetGlobalState(res);
    });
  }, []);
  // 在页面跳转时执行逻辑
  useEffect(() => {
    // 等待globalState产生初始数据
    if (!globalState) return;
    const b = layoutConfig?.onPageChange?.(pathname);
    setIsPageRender(b);
  }, [pathname, globalState]);


  // 记录页面的路由行为 该方法触发时机 页面的useEffect return 先触发 再触发记录。
  // 也就是说这个记录行为发生在页面跳转完成前，页面组件卸载后，
  // 如果想在页面组件卸载后提前知道下一步的页面跳转行为可在页面组件的effect return方法中开启定时器settimeout 0 加入宏任务重
  useEffect(() => {
    const nowHistoryLength = window.history.state.idx;
    const oldHistoryLength = getOldHistoryLength();
    if (nowHistoryLength > oldHistoryLength) {
      setHistoryType('PUSH');
    } else if (nowHistoryLength === oldHistoryLength) {
      setHistoryType('REPLACE');
    } else {
      setHistoryType('POP');
    }
    setOldHistoryLength(nowHistoryLength);
  }, [pathname]);

  // 渲染菜单
  const menuBar = useMemo(() => {
    const pathName =
      (pathname.endsWith('/')
        ? pathname.slice(0, pathname.length - 1)
        : pathname) || '/';
    const show = pathMapToPageConfig[pathName]?.layout;
    return <Bar show={show} layoutConfig={layoutConfig} />;
  }, [pathname, pathMapToPageConfig]);

  if (isPageRender === false) return null;
  return (
    <AliveScope>
      <GlobalContext.Provider
        value={{
          initialState: globalState || {},
          setInitialState: SetGlobalState as React.Dispatch<
            React.SetStateAction<API.InitialStateProps>
          >,
          refresh,
        }}
      >
        <div
          style={{
            minHeight: '100vh',
            background: layoutConfig.pageBacground,
          }}
        >
          <div id="huize_LayoutPopup" />
          <Header />

          <Outlet />
          {/* 菜单导航 */}
          {menuBar}
        </div>
      </GlobalContext.Provider>
    </AliveScope>
  );
};

interface BarProps {
  show?: boolean;
  layoutConfig: API.LayoutReturns;
}
/**
 * 全局菜单
 */
const Bar = ({ show, layoutConfig }: BarProps) => {
  const navigate = useNavigate();

  const tabBarConfig = useMemo<API.TabBarConfig>(() => {
    return layoutConfig?.tabBar || {};
  }, [layoutConfig]);

  if (!show || !tabBarConfig.list || tabBarConfig.list.length === 0)
    return null;

  return (
    <Tabbar
      safeAreaInsetBottom
      value={location.pathname}
      onChange={(v) => {
        navigate(v as string, {
          replace: true,
        });
      }}
      style={{
        background: tabBarConfig.background,
        padding: tabBarConfig.padding,
      }}
    >
      {tabBarConfig.list?.map((item) => {
        return (
          <Tabbar.Item
            key={item.pagePath}
            name={item.pagePath}
            icon={item.icon}
          >
            {item.text}
          </Tabbar.Item>
        );
      })}
    </Tabbar>
  );
};

export default Layout;
