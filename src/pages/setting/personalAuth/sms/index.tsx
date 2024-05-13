import CaptchaInput from '@/components/CaptchaInput';
import {
  personIdentityFaceRecognizeSmsSend,
  personIdentityFaceRecognizeSponsor,
  personIdentityFaceRecognizeSponsorSmsCheck,
} from '@/servers/hoteTravel/HATToLand';
import { getAuthorization, getTempState } from '@/storageManagement';
import { getHost, isSuccess } from '@/utils';
import cs from 'classnames';

import { Button, Dialog, Form, Notify, Toast } from 'react-vant';

const PersonalSms = () => {
  const [form] = Form.useForm();

  const send = async () => {
    const mobilePhone =
      getTempState<SYSAPI.personIdentityFaceRecoginize>().mobilePhone;
    if (!mobilePhone) {
      if (!mobilePhone) {
        Notify.show('请输入手机号');
      }
      return false;
    }
    Toast.loading({ message: '请稍等...', duration: 0 });
    const res = await personIdentityFaceRecognizeSmsSend({
      bizContent: { mobilePhone },
    });
    if (!isSuccess(res.bizCode)) {
      Notify.show(res.bizMsg || '验证码发送失败');
      Toast.clear();
      return false;
    }
    Toast.success('验证码已发送');
  };
  const onFinish = async (v: SYSAPI.personIdentityFaceRecognizeSmsCheck) => {
    Dialog.confirm({
      title: '人脸认证',
      message: '即将跳转支付宝进行人脸认证，确认操作吗？',
      confirmButtonText: '去认证',
      onConfirm: async () => {
        Toast.loading({ message: '请稍等...', duration: 0 });

        const callbackUrl = getHost(
          `/user/middle?pagePath=${encodeURIComponent(
            '/index',
          )}&authorization=${getAuthorization()}`,
        );
        const resSms = await personIdentityFaceRecognizeSponsorSmsCheck({
          bizContent: v,
        });
        if (!isSuccess(resSms.bizCode)) {
          Notify.show(resSms.bizMsg || '验证码错误');
          return;
        }
        const res = await personIdentityFaceRecognizeSponsor({
          bizContent: Object.assign(
            { callbackUrl },
            getTempState<SYSAPI.personIdentityFaceRecoginize>(),
          ),
        });
        if (!isSuccess(res.bizCode) || !res.bizContent?.originalUrl) {
          Notify.show(res.bizMsg || '人脸识别启动失败,请重试');
          Toast.clear();
        } else {
          setTimeout(() => {
            Toast.clear();
          }, 0);
          location.href = res.bizContent?.originalUrl;
        }
      },
    });
  };

  return (
    <div>
      <div className={cs('flex items-center flex-col justify-center')}>
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
              下一步
            </Button>
          }
        >
          <Form.Item
            rules={[{ required: true, message: '请填写验证码' }]}
            name="captcha"
            label="验证码"
          >
            <CaptchaInput send={send} />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default PersonalSms;
