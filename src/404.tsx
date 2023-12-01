import { Button, Empty } from 'react-vant';
import { getHost } from './utils';

const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <Empty image="error" description="页面不存在">
        <Button
          style={{ width: 160 }}
          round
          type="primary"
          onClick={() => {
            const index = getHost('/index');
            window.location.href = index;
          }}
        >
          返回首页
        </Button>
      </Empty>
    </div>
  );
};
export default NotFound;
