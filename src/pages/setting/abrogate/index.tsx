import CaptchaInput from '@/components/CaptchaInput';
import { useInitialState } from '@/hooks';
import {
  accountCancel,
  sendAccountCancelSms,
} from '@/servers/hoteTravel/HATToLand';
import { removeAuthorization } from '@/storageManagement';
import { history, isSuccess } from '@/utils';
import cs from 'classnames';
import { Button, Form, Notify, Toast } from 'react-vant';
const Unbind = () => {
  const { initialState, refresh } = useInitialState();
  const [form] = Form.useForm();
  const onFinish = async (v: SYSAPI.cancelAccount) => {
    Toast.loading({ message: '正在注销...', duration: 0 });
    const res = await accountCancel({ bizContent: v });
    if (!isSuccess(res.bizCode)) {
      Notify.show(res.bizMsg || '注销失败');
      Toast.clear();
      return;
    }
    Toast.clear();
    removeAuthorization();
    await refresh();
    history.replace('/');
    Notify.show({ type: 'success', message: '已注销' });
  };

  const send = async () => {
    const res = await sendAccountCancelSms({});
    if (!isSuccess(res.bizCode)) {
      Notify.show(res.bizMsg || '验证码发送失败请稍后再试');
      return false;
    }
  };
  return (
    <div
      className={cs('flex items-center flex-col justify-center')}
      style={{ height: '600rem' }}
    >
      <div style={{ width: '75%', marginBottom: 20 }}>
        请输入{initialState.userinfo?.mobilePhone}接收到验证码
      </div>
      <Form
        form={form}
        style={{
          width: '650rem',
        }}
        onFinish={onFinish}
        footer={
          <Button
            style={{
              marginTop: '16rem',
              backgroundColor: '#333',
              borderColor: '#535353',
            }}
            round
            nativeType="submit"
            type="primary"
            block
          >
            提交
          </Button>
        }
      >
        <Form.Item
          rules={[{ required: true, message: '请填写验证码' }]}
          name="captcha"
          label="验证码"
          labelClass="flex items-center"
        >
          <CaptchaInput send={send} />
        </Form.Item>
      </Form>
    </div>
  );
};
export default Unbind;
