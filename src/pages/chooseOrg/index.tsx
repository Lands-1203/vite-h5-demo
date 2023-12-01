import { useInitialState } from '@/hooks';
import { history } from '@/utils';
import cs from 'classnames';
import { useEffect, useMemo } from 'react';
import { Button, Cell, Empty } from 'react-vant';
import styles from './styles.module.less';
export default () => {
  const { initialState, refresh } = useInitialState();
  useEffect(() => {
    refresh();
  }, []);
  const organizationList = useMemo(() => {
    if (!initialState.userinfo?.organizations?.length)
      return <Empty description="请创建企业" />;
    return initialState.userinfo.organizations.map((item) => (
      <Cell
        key={item.id}
        title={item.name}
        isLink
        onClick={() => {
          history.push('/chooseOrg/addHotel');
        }}
      />
    ));
  }, [initialState.userinfo?.organizations]);
  return (
    <div>
      {organizationList}
      <div className={styles['add-enterprise-block']} />
      <div className={cs('fixed bottom-0', styles['add-enterprise'])}>
        <Button
          type="primary"
          block
          round
          onClick={() => {
            history.push('/chooseOrg/orgAuth');
          }}
        >
          添加新企业
        </Button>
      </div>
    </div>
  );
};
