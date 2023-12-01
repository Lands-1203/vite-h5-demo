import OssUpload from '@/components/OssUpload';
import keepAlive from '@/hoc/keepAlive';
import { returnUseInitialState } from '@/hooks/useInitialState';
import { orgIdentitySponsor } from '@/servers/hzChain/CustomerAccount';
import {
  postGetStsAuth,
  postOcrBusinessLicense,
} from '@/servers/hzChain/customerOcr';

import { getAuthorization } from '@/storageManagement';
import { getHost, isSuccess } from '@/utils';
import cs from 'classnames';
import { Button, Dialog, Form, Input, Notify, Toast } from 'react-vant';
type IProps = {
  Global: returnUseInitialState;
};
const OrgAuthSms = ({}: IProps) => {
  const [form] = Form.useForm();
  const getSts = async (suffix: string, type: string) => {
    const res = await postGetStsAuth({
      bizContent: {
        fileSuffixes: [suffix],
        fileSetType: type,
      },
    });
    if (!isSuccess(res.bizCode) || !res.bizContent?.files?.[0]) {
      Notify.show('上传失败');
      return false;
    }
    return res.bizContent;
  };
  const onFinish = async (v: SYSAPI.orgIdentitySponsor) => {
    Dialog.confirm({
      title: '人脸认证',
      message: '即将跳转支付宝进行人脸认证，确认操作吗？',
      confirmButtonText: '去认证',
      onConfirm: async () => {
        Toast.loading({ message: '请稍等...', duration: 0 });
        const faceRecognizeCallbackUrl = getHost(
          `/user/middle?pagePath=${encodeURIComponent(
            '/chooseOrg',
          )}&authorization=${getAuthorization()}`,
        );
        const res = await orgIdentitySponsor({
          bizContent: {
            ...v,
            faceRecognizeCallbackUrl,
          },
        });
        if (!isSuccess(res.bizCode) || !res.bizContent?.authUrl) {
          Notify.show(res.bizMsg || '人脸识别启动失败,请重试');
          Toast.clear();
        } else {
          setTimeout(() => {
            Toast.clear();
          }, 0);
          location.href = res.bizContent?.authUrl;
        }
      },
    });
  };

  return (
    <div className={cs('flex items-center flex-col justify-center')}>
      <Form
        form={form}
        style={{
          width: '650rem',
          marginTop: '10rem',
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
            提交信息
          </Button>
        }
      >
        <Form.Item
          rules={[{ required: true, message: '请上传营业执照' }]}
          name="imageUscc"
          label="营业执照"
        >
          <OssUpload
            getSts={async (suffix) => {
              return await getSts(suffix, '2');
            }}
            uploadText={'营业执照'}
            maxSize={3}
            onOcr={async (url, upload, success) => {
              try {
                if (!success || !url) {
                  throw new Error();
                }
                const res = await postOcrBusinessLicense({
                  bizContent: { url },
                });
                if (!isSuccess(res.bizCode)) {
                  // eslint-disable-next-line no-param-reassign
                  success = false;
                  throw new Error(res.bizMsg);
                }
                const legalManName = form.getFieldValue('legalManName');
                if (
                  legalManName &&
                  legalManName !== res.bizContent?.legalPerson
                ) {
                  Toast.fail({
                    message: '请上传与营业执照匹配的身份证',
                  });
                  throw new Error();
                }
                form.setFieldsValue({
                  usccCode: res.bizContent?.creditCode,
                  orgLegalName: res.bizContent?.companyName,
                  legalManName: res.bizContent?.legalPerson,
                  imageUscc: upload?.name,
                });
                return true;
              } catch (error) {
                if (!success) Notify.show('识别失败');
                form.setFieldsValue({
                  usccCode: '',
                  orgLegalName: '',
                  legalManName: '',
                  imageUscc: '',
                });
                return false;
              }
            }}
          />
        </Form.Item>

        <Form.Item
          rules={[{ required: true, message: '请上传营业执照' }]}
          name="orgLegalName"
          label="企业名称"
          disabled
        >
          <Input placeholder="请上传营业执照" />
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: '请上传营业执照' }]}
          name="usccCode"
          label="统一信用代码"
          disabled
        >
          <Input placeholder="请上传营业执照" />
        </Form.Item>

        <Form.Item
          rules={[{ required: true, message: '请上传身份证正面' }]}
          name="legalManName"
          label="法人姓名"
          disabled
        >
          <Input placeholder="请上传身份证正面" />
        </Form.Item>
      </Form>
    </div>
  );
};

export default keepAlive(OrgAuthSms);
