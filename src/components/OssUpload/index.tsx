import OSS from 'ali-oss';
import { Notify, Toast, Uploader } from 'react-vant';
import { UploaderProps } from 'react-vant/lib';

interface IProps {
  onOcr?: (
    url: string,
    upload: OSS.PutObjectResult | null,
    success: boolean,
  ) => Promise<boolean>;
  getSts: (
    suffixe: string,
  ) => Promise<SYSAPI.PostCustomerImageStsAuthRespPost | false>;
  UploaderProps?: UploaderProps;
  /**
   * 文件最大上传大小 单位M
   * @default 3
   */
  maxSize: number;
  uploadText?: string;
}

/** 单文件组件上传 oss 该组件没有value属性 无法继承表单值 有许多原因  */
export default (props: IProps) => {
  const { getSts, onOcr, maxSize = 3, uploadText, UploaderProps } = props;

  const upload = async (file: File) => {
    const fileNameArr = file.name.split('.');
    const suffixe = `.${fileNameArr[fileNameArr.length - 1]}`;
    try {
      const res = await getSts(suffixe);
      if (!res || !res.files?.[0]) {
        throw new Error();
      }
      const client = new OSS({
        region: `oss-${res.endPoint?.split('.')[1]}`,
        bucket: res.bucketName,
        accessKeyId: res.accessKeyId as string,
        accessKeySecret: res.accessKeySecret as string,
        stsToken: res?.securityToken as string,
      });
      const upload = await client.put(res.files?.[0], file, {});
      const signatureUrl = await client.signatureUrl(upload.name);
      const ocr = await onOcr?.(signatureUrl, upload, true);
      if (!ocr) throw new Error();
      return { url: signatureUrl, file };
    } catch (error) {
      Notify.show('上传失败');
      const url = `error.png`;
      onOcr?.('', null, false);
      return {
        url,
      };
    }
  };
  return (
    <Uploader
      multiple={false}
      upload={upload}
      uploadText={uploadText}
      maxCount={1}
      maxSize={maxSize * 1024 * 1024}
      onOversize={() => Toast.info(`文件大小不能超过${maxSize}M`)}
      onDelete={() => {
        onOcr?.('', null, true);
      }}
      {...UploaderProps}
    />
  );
};
