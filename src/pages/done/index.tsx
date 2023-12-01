import { backHome } from '@/utils';
import { Button, Empty } from 'react-vant';

export default () => {
  return (
    <Empty description="操作完成">
      <Button
        style={{ width: 160 }}
        onClick={() => {
          backHome();
        }}
        round
        type="primary"
      >
        返回首页
      </Button>
    </Empty>
  );
};
