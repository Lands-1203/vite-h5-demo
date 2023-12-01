import CaptchaInput from '@/components/CaptchaInput';
import { useInitialState } from '@/hooks';
import { login, sendLoginSms } from '@/servers/hzChain/CustomerLogin';
import { setAuthorization } from '@/storageManagement';
import { history, isSuccess, sha256Hash } from '@/utils';
import { VPhone } from '@/validator';
import { Button, Form, Input, Notify, Tabs, Toast } from 'react-vant';
const Login = () => {
  const [form] = Form.useForm();
  const [formPhone] = Form.useForm();
  const { refresh } = useInitialState();

  const send = async () => {
    const mobilePhone = formPhone.getFieldValue('mobilePhone');
    if (!mobilePhone) {
      if (!mobilePhone) {
        Notify.show('请输入手机号');
      }
      return false;
    }
    const res = await sendLoginSms({
      bizContent: {
        mobilePhone,
      },
    });
    if (!isSuccess(res.bizCode)) {
      Notify.show(res.bizMsg || '验证码发送失败请稍后再试');
      return false;
    }
  };
  const onFinish = async (values: SYSAPI.login) => {
    Toast.loading({
      message: '登录中...',
      forbidClick: true,
      duration: 0,
    });

    const password = await sha256Hash(values.password);
    const bizContent: SYSAPI.login = {
      ...values,
      password,
    };

    bizContent.platform = 2;
    const res = await login({
      bizContent,
    });
    if (isSuccess(res.bizCode)) {
      setAuthorization(res.bizContent?.accessToken);
      await refresh();
      history.replace('/index');
      Toast.info('登录成功');
    }
    if (!isSuccess(res.bizCode)) {
      Notify.show(res.bizMsg || '登录失败');
    }
    Toast.clear();
  };
  const onFinishSMS = async (values: SYSAPI.login) => {
    Toast.loading({
      message: '登录中...',
      forbidClick: true,
    });
    const bizContent: SYSAPI.login = values;
    bizContent.platform = 2;
    const res = await login({
      bizContent,
    });
    if (isSuccess(res.bizCode)) {
      setAuthorization(res.bizContent?.accessToken);
      await refresh();
      history.replace('/index');
      Toast.info('登录成功');
    } else if (!isSuccess(res.bizCode)) {
      Notify.show(res.bizMsg || '登录失败');
    }
    Toast.clear();
  };
  return (
    <div className="flex justify-center items-center">
      <div
        style={{
          marginTop: '200rem',
          width: '650rem',
        }}
      >
        <Tabs defaultActive={'username'}>
          <Tabs.TabPane name={'username'} title="密码登录">
            <Form
              form={form}
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
                rules={[
                  {
                    required: true,
                    message: '请填写手机号',
                    validator: VPhone,
                  },
                ]}
                name="mobilePhone"
                label="手机号"
              >
                <Input placeholder="请输入手机号" />
              </Form.Item>
              <Form.Item
                rules={[{ required: true, message: '请填写密码' }]}
                name="password"
                label="密码"
              >
                <Input type="password" placeholder="请输入密码" />
              </Form.Item>
            </Form>
          </Tabs.TabPane>
          <Tabs.TabPane name={'mobilePhone'} title="验证码登录">
            <Form
              form={formPhone}
              onFinish={onFinishSMS}
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
                rules={[
                  {
                    required: true,
                    message: '请填写手机号',
                    validator: VPhone,
                  },
                ]}
                name="mobilePhone"
                label="手机号"
              >
                <Input placeholder="请输入手机号" />
              </Form.Item>
              <Form.Item
                rules={[{ required: true, message: '请填写验证码' }]}
                name="captcha"
                label="验证码"
              >
                <CaptchaInput send={send} />
              </Form.Item>
            </Form>
          </Tabs.TabPane>
        </Tabs>
        <div
          className="flex justify-between"
          style={{ marginTop: 10, fontSize: 10 }}
        >
          <div
            onClick={() => {
              history.push('/user/forgotPassword');
            }}
          >
            忘记密码
          </div>
          <div
            onClick={() => {
              history.push('/user/register');
            }}
          >
            注册用户
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
