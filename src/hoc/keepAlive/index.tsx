import { useInitialState } from '@/hooks';
import { returnUseInitialState } from '@/hooks/useInitialState';
import { getHistoryType } from '@/storageManagement';
import { useEffect } from 'react';
import KeepAlive, { useAliveController } from 'react-activation';

/**
 *
 * @param Component 页面组件
 * @param key 页面组件标识 用于清除页面缓存
 * @returns
 */
const keepAliveHOC = (
  Component: React.FC<{ Global: returnUseInitialState }>,
  key: string = 'form',
) => {
  return () => {
    const { refresh } = useAliveController();

    const Global = useInitialState();
    useEffect(() => {
      return () => {
        setTimeout(() => {
          if (getHistoryType() === 'POP') {
            refresh(key);
          }
        }, 0);
      };
    }, []);
    return (
      <KeepAlive name={key}>
        <Component Global={Global} />
      </KeepAlive>
    );
  };
};
export default keepAliveHOC;
