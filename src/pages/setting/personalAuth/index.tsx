import OssUpload from '@/components/OssUpload';
import keepAliveHOC from '@/hoc/keepAlive';
import { returnUseInitialState } from '@/hooks/useInitialState';
import {
  personIdentityFaceRecognizeSponsor,
  postGetStsAuth,
  postOcrIdentityBack,
  postOcrIdentityFront,
} from '@/servers/hoteTravel/HATToLand';
import { getAuthorization, setTempState } from '@/storageManagement';
import { getHost, history, isSuccess } from '@/utils';
import { VPhone } from '@/validator';
import cs from 'classnames';
import dayjs from 'dayjs';

import { Button, Dialog, Form, Input, Notify, Toast } from 'react-vant';

interface IProps {
  Global: returnUseInitialState;
}
const PersonalAuth = ({ Global }: IProps) => {
  const [form] = Form.useForm();
  const { initialState } = Global;
  const getSts = async (suffix: string) => {
    const res = await postGetStsAuth({
      bizContent: {
        fileSuffixes: [suffix],
        fileSetType: '1',
      },
    });
    if (!isSuccess(res.bizCode) || !res.bizContent?.files?.[0]) {
      Notify.show('上传失败');
      return false;
    }
    return res.bizContent;
  };
  const onFinish = async (v: SYSAPI.personIdentityFaceRecoginize) => {
    setTempState(v);
    if (initialState.userinfo?.mobilePhone !== v.mobilePhone) {
      history.push('/setting/personalAuth/sms', {
        state: v,
      });
    } else {
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
          const res = await personIdentityFaceRecognizeSponsor({
            bizContent: Object.assign({ callbackUrl }, v),
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
    }
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
            rules={[{ required: true, message: '请上传身份证' }]}
            name="imageCidFront"
            label="身份证"
          >
            <OssUpload
              getSts={getSts}
              uploadText={'身份证正面'}
              maxSize={3}
              onOcr={async (url, upload, success) => {
                try {
                  if (!success || !url) {
                    throw new Error();
                  }
                  const res = await postOcrIdentityFront({
                    bizContent: { url },
                  });
                  if (!isSuccess(res.bizCode)) {
                    // eslint-disable-next-line no-param-reassign
                    success = false;
                    throw new Error(res.bizMsg);
                  }
                  form.setFieldsValue({
                    imageCidFront: upload?.name,
                    name: res.bizContent?.name,
                    cidCode: res.bizContent?.idNumber,
                  });
                  return true;
                } catch (error) {
                  form.setFieldsValue({
                    imageCidFront: '',
                    name: '',
                    cidCode: '',
                  });
                  return false;
                }
              }}
            />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: '请上传身份证照片' }]}
            name="imageCidBack"
            label="身份证反面"
          >
            <OssUpload
              getSts={async (suffix) => {
                return await getSts(suffix);
              }}
              uploadText={'身份证反面'}
              maxSize={3}
              onOcr={async (url, upload, success) => {
                try {
                  if (!success || !url) {
                    throw new Error();
                  }
                  const res = await postOcrIdentityBack({
                    bizContent: { url },
                  });
                  if (!isSuccess(res.bizCode)) {
                    // eslint-disable-next-line no-param-reassign
                    success = false;
                    throw new Error(res.bizMsg);
                  }
                  const validPeriod = res.bizContent?.validPeriod
                    ?.split('-')
                    .map((item) => {
                      const date = dayjs(item);
                      return date.isValid() ? date.format('DD/MM/YYYY') : item;
                    });
                  if (
                    !validPeriod?.[1] ||
                    (!dayjs(validPeriod[1]).isValid() &&
                      dayjs().isAfter(validPeriod[1]))
                  ) {
                    Toast.fail({
                      message: '身份证不在有效期',
                    });
                    throw new Error();
                  }
                  form.setFieldsValue({
                    imageCidBack: upload?.name,
                  });
                  return true;
                } catch (error) {
                  form.setFieldsValue({
                    imageCidBack: '',
                  });
                  return false;
                }
              }}
            />
          </Form.Item>

          <Form.Item
            rules={[{ required: true, message: '请填写姓名' }]}
            name="name"
            label="姓名"
            disabled
          >
            <Input placeholder="请输入姓名" />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: '请填写身份证号' }]}
            name="cidCode"
            label="身份证号"
            disabled
          >
            <Input placeholder="请输入身份证号" />
          </Form.Item>
          <Form.Item
            rules={[
              { required: true, message: '请填写手机号', validator: VPhone },
            ]}
            name="mobilePhone"
            label="手机号"
          >
            <Input placeholder="请输入手机号" />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export const KeepPersonalKey = 'KeepPersonalKey';
export default keepAliveHOC(PersonalAuth, KeepPersonalKey);
