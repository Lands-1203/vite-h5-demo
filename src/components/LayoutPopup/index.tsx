import { useInitialState } from '@/hooks';
import { logout } from '@/servers/hzChain/CustomerLogin';
import { removeAuthorization } from '@/storageManagement';
import { history } from '@/utils';
import { DeleteO, ManagerO, Revoke } from '@react-vant/icons';
import cs from 'classnames';
import { forwardRef, useImperativeHandle, useState } from 'react';
import { Cell, Image, Popup } from 'react-vant';
import styles from './style.module.less';
export type LayoutPopupRefType = {
  open: () => void;
  close: () => void;
};

const LayoutPopup = forwardRef<LayoutPopupRefType>((_props, ref) => {
  const [openPopup, setOpenPopup] = useState<boolean>();
  const { initialState } = useInitialState();
  useImperativeHandle(ref, () => {
    return {
      open: () => {
        setOpenPopup(true);
      },
      close: () => {
        setOpenPopup(false);
      },
    };
  });

  const tapClick = (url: string) => {
    history.push(url);
    setOpenPopup(false);
  };
  async function loginOut(): Promise<void> {
    setOpenPopup(false);
    await logout({});
    removeAuthorization();
    history.replace('/user/login');
  }

  return (
    <Popup
      visible={openPopup}
      className={styles['header-popup']}
      position="left"
      onClose={() => {
        setOpenPopup(false);
      }}
      destroyOnClose
    >
      <div className={cs('flex', 'h-full', styles['header-popup-content'])}>
        <div
          className={cs(
            styles['header-popup-content-left'],
            'flex',
            'flex-col',
            'items-center',
          )}
        >
          <Image
            radius="20rem"
            fit={'cover'}
            width={38}
            height={38}
            src={'https://img.yzcdn.cn/vant/cat.jpeg'}
          />
          <div className={styles['user-name']}>
            {initialState.userinfo?.customer?.name || '未认证'}
          </div>
        </div>
        <div className="flex-1">
          <div>
            <Cell.Group>
              <Cell
                title="注销账户"
                icon={<DeleteO />}
                clickable
                onClick={() => tapClick('/setting/abrogate')}
              />
              {!initialState.userinfo?.customer && (
                <Cell
                  title="个人认证"
                  icon={<ManagerO />}
                  clickable
                  onClick={() => tapClick('/setting/personalAuth')}
                />
              )}
              <Cell
                title="退出登录"
                icon={<Revoke />}
                onClick={() => loginOut()}
                clickable
              />
            </Cell.Group>
          </div>
        </div>
      </div>
    </Popup>
  );
});
export default LayoutPopup;
