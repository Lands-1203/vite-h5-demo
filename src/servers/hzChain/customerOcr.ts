// @ts-ignore
/* eslint-disable */
import request from '../request';

/** STS授权 POST /LandCA/ocr/getStsAuth */
export async function postGetStsAuth(
  body: SYSAPI.F2BRequestPostCustomerImageStsAuthReq,
  options?: { [key: string]: any },
) {
  return request<SYSAPI.F2BResponsePostCustomerImageStsAuthRespPost>('/LandCA/ocr/getStsAuth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 营业执照识别 POST /LandCA/ocr/ocrBusinessLicense */
export async function postOcrBusinessLicense(
  body: SYSAPI.F2BRequestOcrBusiLicense,
  options?: { [key: string]: any },
) {
  return request<SYSAPI.F2BResponseOcrBusiLicenseResp>('/LandCA/ocr/ocrBusinessLicense', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 身份证背面 POST /LandCA/ocr/ocrIdentityBack */
export async function postOcrIdentityBack(
  body: SYSAPI.F2BRequestOcrIdentityBack,
  options?: { [key: string]: any },
) {
  return request<SYSAPI.F2BResponseOcrIdentityBackResp>('/LandCA/ocr/ocrIdentityBack', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 身份证正面 POST /LandCA/ocr/ocrIdentityFront */
export async function postOcrIdentityFront(
  body: SYSAPI.F2BRequestOcrIdentityFront,
  options?: { [key: string]: any },
) {
  return request<SYSAPI.F2BResponseOcrIdentityFrontResp>('/LandCA/ocr/ocrIdentityFront', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 文件上传通知 POST /LandCA/ocr/ossUploadFinish */
export async function postOssUploadFinish(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: SYSAPI.postOssUploadFinishParams,
  options?: { [key: string]: any },
) {
  return request<SYSAPI.F2BResponsePostCustomerOssUploadFinishRespPost>(
    '/LandCA/ocr/ossUploadFinish',
    {
      method: 'POST',
      params: {
        ...params,
        request: undefined,
        ...params['request'],
      },
      ...(options || {}),
    },
  );
}
