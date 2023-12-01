import CaptchaInput from '@/components/CaptchaInput';
import { useInitialState } from '@/hooks';
import { regist } from '@/servers/hzChain/CustomerLogin';
import { setAuthorization } from '@/storageManagement';
import { history, isSuccess, sha256Hash } from '@/utils';
import { VPhone, VPwd } from '@/validator';
import { useState } from 'react';
import { Button, Checkbox, Form, Input, Notify, Toast } from 'react-vant';
const Register: React.FC = () => {
  const [form] = Form.useForm();
  const { refresh } = useInitialState();

  const [userAgreement, setUserAgreement] = useState(false);
  const send = async () => {
    const mobilePhone = form.getFieldValue('mobilePhone');
    if (!mobilePhone) {
      if (!mobilePhone) {
        Notify.show('请输入手机号');
      }
      return false;
    }
    const res = await sendRegistSms({
      bizContent: {
        mobilePhone,
      },
    });
    if (!isSuccess(res.bizCode)) {
      Notify.show(res.bizMsg || '验证码发送失败请稍后再试');
      return false;
    }
  };
  const onFinish = async (values: SYSAPI.regist) => {
    if (!userAgreement) {
      Toast.info('同意用户协议后才能注册');
      return;
    }
    if (values.password !== (values as any).newPassword) {
      Notify.show('新密码与旧密码不同');
      return;
    }
    // 清除铭文你密码
    delete (values as any).newPassword;
    Toast.loading({
      message: '注册中...',
      forbidClick: true,
      duration: 0,
    });

    const password = await sha256Hash(values.password);
    const res = await regist({
      bizContent: {
        ...values,
        password,
        platform: 2,
      },
    });
    if (!isSuccess(res.bizCode)) {
      Notify.show(res.bizMsg || '注册失败');
    } else {
      setAuthorization(res.bizContent?.accessToken);
      await refresh();
      history.replace('/index');
      Toast.info('登录成功');
    }
    Toast.clear();
  };
  return (
    <div
      className=" flex justify-center items-center mr-auto"
      style={{
        marginTop: '200rem',
      }}
    >
      <Form
        style={{
          width: '650rem',
        }}
        form={form}
        onFinish={onFinish}
        footer={
          <div className="flex items-center flex-col">
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
              注册
            </Button>
            <Checkbox
              style={{
                marginTop: '20rem',
                fontSize: '28rem',
              }}
              onChange={(v) => {
                setUserAgreement(v);
              }}
              checked={userAgreement}
            >
              同意
              <a
                onClick={(e) => e.stopPropagation()}
                style={{
                  color: '#1677ff',
                }}
              >
                《用户协议》
              </a>
            </Checkbox>
          </div>
        }
      >
        <Form.Item
          name="mobilePhone"
          label="手机号"
          rules={[
            {
              message: '请填写手机号',
              required: true,
              validator: VPhone,
            },
          ]}
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
        <Form.Item
          name="password"
          label="设置密码"
          rules={[
            { required: true, message: '请填写密码' },
            { validator: VPwd },
          ]}
        >
          <Input placeholder="请输入密码" type="password" />
        </Form.Item>
        <Form.Item
          name="newPassword"
          label="确认密码"
          rules={[
            { required: true, message: '请填写密码' },
            {
              validator: async () => {
                if (
                  form.getFieldValue('newPassword') ===
                  form.getFieldValue('password')
                ) {
                  return;
                }
                throw new Error('新密码和旧密码不同');
              },
            },
          ]}
        >
          <Input placeholder="请输入密码" type="password" />
        </Form.Item>
      </Form>
    </div>
  );
};
export default Register;
