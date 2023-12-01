import LayoutPopup, { LayoutPopupRefType } from '@/components/LayoutPopup';
import { useInitialState } from '@/hooks';
import { pathMapToPageConfig } from '@config/router.config';
import { ArrowLeft, WapHomeO } from '@react-vant/icons';
import cs from 'classnames';
import { useMemo, useRef } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { Image, NavBar } from 'react-vant';
import styles from './style.module.less';
const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  let [searchParams] = useSearchParams();
  const layoutPopupRef = useRef<LayoutPopupRefType>(null);
  const pathName =
    (pathname.endsWith('/')
      ? pathname.slice(0, pathname.length - 1)
      : pathname) || '/';
  const { initialState } = useInitialState();
  const leftText = useMemo(() => {
    if (
      pathMapToPageConfig[pathName].head !== false &&
      (pathMapToPageConfig[pathName].head as API.HeadProps)?.avatar
    ) {
      return (
        <div
          className={cs(styles['header-content-avatar'], 'flex items-center')}
        >
          <Image
            round
            fit={'cover'}
            width={38}
            height={38}
            src={'https://img.yzcdn.cn/vant/cat.jpeg'}
          />
          <div className={styles['header-content-avatar-describe']}>
            <div>{initialState.userinfo?.customer?.name || '临时用户'}</div>
            <div>
              {initialState.userinfo?.customer?.name ? '已认证' : '未认证'}
            </div>
          </div>
        </div>
      );
    }
  }, [pathMapToPageConfig[pathName].head]);
  if (pathMapToPageConfig[pathName].head === false) {
    return null;
  }
  const home = Boolean(searchParams.get('home'));
  const leftArrow = home ? <WapHomeO /> : <ArrowLeft />;
  return (
    <div className={styles['header-content']}>
      <NavBar
        title={pathMapToPageConfig[pathName]?.title}
        safeAreaInsetTop
        placeholder
        leftArrow={leftArrow}
        fixed
        onClickLeft={() => {
          if ((pathMapToPageConfig[pathName].head as API.HeadProps)?.avatar) {
            layoutPopupRef.current?.open();
            return;
          }
          if (home) {
            navigate('/');
          } else {
            navigate(-1);
          }
        }}
        leftText={leftText}
      />

      <LayoutPopup ref={layoutPopupRef} />
    </div>
  );
};

export default Header;
