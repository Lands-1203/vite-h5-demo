import { useInitialState } from '@/hooks';
import { history } from '@/utils';
import { Like } from '@react-vant/icons';
import {
  Button,
  Card,
  Dialog,
  Image,
  Space,
  Tag,
  Typography,
} from 'react-vant';
const Index: React.FC = () => {
  const { initialState } = useInitialState();
  // console.log(initialState, setInitialState);
  return (
    <>
      <Space
        direction="vertical"
        className="w-full"
        style={{
          padding: '20rem',
          boxSizing: 'border-box',
        }}
      >
        <Typography.Title level={1}>
          酒旅翻新贷 <Tag type="primary">new</Tag>
        </Typography.Title>
        <Typography.Text>根据用户需求提供翻新贷款</Typography.Text>
        <Card round>
          <Card.Cover>
            <Image src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/baa20698931623.5ee79b6a8ec2b.jpg" />
          </Card.Cover>
          <Card.Header>贷款业务介绍</Card.Header>
          <Card.Body>查看详情</Card.Body>
          <Card.Footer>
            <Space>
              <Button round size="small">
                更多
              </Button>
              <Button
                icon={<Like />}
                round
                color="linear-gradient(to right, #ff6034, #ee0a24)"
                size="small"
                onClick={() => {
                  if (!initialState.userinfo?.customer) {
                    Dialog.confirm({
                      title: '提示',
                      message: '请先完成个人认证后再添加企业',
                      confirmButtonText: '去认证',
                      onConfirm: () => {
                        history.push('/setting/auth/personalAuth');
                      },
                    });
                    return;
                  }
                  history.push('/chooseOrg');
                }}
              >
                去贷款
              </Button>
            </Space>
          </Card.Footer>
        </Card>
      </Space>
      <div
        style={{
          height: '100rem',
        }}
      />
    </>
  );
};
export default Index;
