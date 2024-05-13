// @ts-ignore
/* eslint-disable */
import request from '../request';

/** 注销 POST /HotelAndTravel/account/accountCancel */
export async function accountCancel(
  body: SYSAPI.F2BRequestCancelAccount,
  options?: { [key: string]: any },
) {
  return request<SYSAPI.F2BResponseCancelAccountResp>('/HotelAndTravel/account/accountCancel', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取个人信息 GET /HotelAndTravel/account/getAccountMain */
export async function getAccountMain(options?: { [key: string]: any }) {
  return request<SYSAPI.F2BResponseAccountResp>('/HotelAndTravel/account/getAccountMain', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 发送注销短信 POST /HotelAndTravel/account/sendAccountCancelSms */
export async function sendAccountCancelSms(
  body: SYSAPI.F2BRequestAccountCancelSms,
  options?: { [key: string]: any },
) {
  return request<SYSAPI.F2BResponseAccountCancelSmsResp>(
    '/HotelAndTravel/account/sendAccountCancelSms',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 登录 POST /HotelAndTravel/auth/login */
export async function login(body: SYSAPI.F2BRequestLogin, options?: { [key: string]: any }) {
  return request<SYSAPI.F2BResponseLoginResp>('/HotelAndTravel/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 登出 POST /HotelAndTravel/auth/logout */
export async function logout(body: SYSAPI.F2BRequestLogout, options?: { [key: string]: any }) {
  return request<SYSAPI.F2BResponseLogoutResp>('/HotelAndTravel/auth/logout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 注册 POST /HotelAndTravel/auth/regist */
export async function regist(body: SYSAPI.F2BRequestRegist, options?: { [key: string]: any }) {
  return request<SYSAPI.F2BResponseRegistResp>('/HotelAndTravel/auth/regist', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 发送登录短信 POST /HotelAndTravel/auth/sendLoginSms */
export async function sendLoginSms(
  body: SYSAPI.F2BRequestLoginSms,
  options?: { [key: string]: any },
) {
  return request<SYSAPI.F2BResponseLoginSmsResp>('/HotelAndTravel/auth/sendLoginSms', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 发送注册短信 POST /HotelAndTravel/auth/sendRegistSms */
export async function sendRegistSms(
  body: SYSAPI.F2BRequestRegistSms,
  options?: { [key: string]: any },
) {
  return request<SYSAPI.F2BResponseRegistSmsResp>('/HotelAndTravel/auth/sendRegistSms', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询人脸识别校验结果 GET /HotelAndTravel/identity/faceRecognizeResult */
export async function getFaceRecognizeResult(options?: { [key: string]: any }) {
  return request<SYSAPI.F2BResponseGetFaceRecognizeResultResp>(
    '/HotelAndTravel/identity/faceRecognizeResult',
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}

/** 机构认证发起 POST /HotelAndTravel/identity/orgIdentitySponsor */
export async function orgIdentitySponsor(
  body: SYSAPI.F2BRequestOrgIdentitySponsor,
  options?: { [key: string]: any },
) {
  return request<SYSAPI.F2BResponseOrgIdentitySponsorResp>(
    '/HotelAndTravel/identity/orgIdentitySponsor',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 个人认证短信校验--人脸识别方式 POST /HotelAndTravel/identity/personIdentityFaceRecognizeSmsCheck */
export async function personIdentityFaceRecognizeSponsorSmsCheck(
  body: SYSAPI.F2BRequestPersonIdentityFaceRecognizeSmsCheck,
  options?: { [key: string]: any },
) {
  return request<SYSAPI.F2BResponsePersonIdentityFaceRecognizeSmsCheckResp>(
    '/HotelAndTravel/identity/personIdentityFaceRecognizeSmsCheck',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 个人认证发起--人脸识别方式 POST /HotelAndTravel/identity/personIdentityFaceRecognizeSponsor */
export async function personIdentityFaceRecognizeSponsor(
  body: SYSAPI.F2BRequestPersonIdentityFaceRecoginize,
  options?: { [key: string]: any },
) {
  return request<SYSAPI.F2BResponsePersonIdentityFaceRecognizeResp>(
    '/HotelAndTravel/identity/personIdentityFaceRecognizeSponsor',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 个人认证短信发送--人脸识别方式 POST /HotelAndTravel/identity/personIdentitySmsSend */
export async function personIdentityFaceRecognizeSmsSend(
  body: SYSAPI.F2BRequestPersonIdentityFaceRecognizeSmsSend,
  options?: { [key: string]: any },
) {
  return request<SYSAPI.F2BResponsePersonIdentityFaceRecognizeSmsSendResp>(
    '/HotelAndTravel/identity/personIdentitySmsSend',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** STS授权 POST /HotelAndTravel/ocr/getStsAuth */
export async function postGetStsAuth(
  body: SYSAPI.F2BRequestPostCustomerImageStsAuthReq,
  options?: { [key: string]: any },
) {
  return request<SYSAPI.F2BResponsePostCustomerImageStsAuthRespPost>(
    '/HotelAndTravel/ocr/getStsAuth',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 营业执照识别 POST /HotelAndTravel/ocr/ocrBusinessLicense */
export async function postOcrBusinessLicense(
  body: SYSAPI.F2BRequestOcrBusiLicense,
  options?: { [key: string]: any },
) {
  return request<SYSAPI.F2BResponseOcrBusiLicenseResp>('/HotelAndTravel/ocr/ocrBusinessLicense', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 身份证背面 POST /HotelAndTravel/ocr/ocrIdentityBack */
export async function postOcrIdentityBack(
  body: SYSAPI.F2BRequestOcrIdentityBack,
  options?: { [key: string]: any },
) {
  return request<SYSAPI.F2BResponseOcrIdentityBackResp>('/HotelAndTravel/ocr/ocrIdentityBack', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 身份证正面 POST /HotelAndTravel/ocr/ocrIdentityFront */
export async function postOcrIdentityFront(
  body: SYSAPI.F2BRequestOcrIdentityFront,
  options?: { [key: string]: any },
) {
  return request<SYSAPI.F2BResponseOcrIdentityFrontResp>('/HotelAndTravel/ocr/ocrIdentityFront', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 文件上传通知 POST /HotelAndTravel/ocr/ossUploadFinish */
export async function postOssUploadFinish(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: SYSAPI.postOssUploadFinishParams,
  options?: { [key: string]: any },
) {
  return request<SYSAPI.F2BResponsePostCustomerOssUploadFinishRespPost>(
    '/HotelAndTravel/ocr/ossUploadFinish',
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
