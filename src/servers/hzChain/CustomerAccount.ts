// @ts-ignore
/* eslint-disable */
import request from '../request';

/** 注销 POST /LandCA/account/accountCancel */
export async function accountCancel(
  body: SYSAPI.F2BRequestCancelAccount,
  options?: { [key: string]: any },
) {
  return request<SYSAPI.F2BResponseCancelAccountResp>('/LandCA/account/accountCancel', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 切换绑定关系 POST /LandCA/account/changeIdentity */
export async function postChangeIdentity(
  body: SYSAPI.F2BRequestChangeIdentity,
  options?: { [key: string]: any },
) {
  return request<SYSAPI.F2BResponseChangeIdentityResp>('/LandCA/account/changeIdentity', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改密码 POST /LandCA/account/changePassword */
export async function changePassword(
  body: SYSAPI.F2BRequestChangePass,
  options?: { [key: string]: any },
) {
  return request<SYSAPI.F2BResponseChangePassResp>('/LandCA/account/changePassword', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改手机号 POST /LandCA/account/changePhone */
export async function changePhone(
  body: SYSAPI.F2BRequestChangePhone,
  options?: { [key: string]: any },
) {
  return request<SYSAPI.F2BResponseChangePhoneResp>('/LandCA/account/changePhone', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改手机号的短信校验 POST /LandCA/account/changePhoneCheck */
export async function changePhoneCheck(
  body: SYSAPI.F2BRequestChangePhoneCheck,
  options?: { [key: string]: any },
) {
  return request<SYSAPI.F2BResponseChangePhoneCheckResp>('/LandCA/account/changePhoneCheck', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 检查企业法人授权 POST /LandCA/account/customerOrgLegalManAuthCheck */
export async function postCustomerOrgLegalManAuthCheck(
  body: SYSAPI.F2BRequestCustomerOrgLegalManAuthCheck,
  options?: { [key: string]: any },
) {
  return request<SYSAPI.F2BResponseCustomerOrgLegalManAuthCheckResp>(
    '/LandCA/account/customerOrgLegalManAuthCheck',
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

/** 获取企业法人授权签署链接 POST /LandCA/account/customerOrgLegalManAuthLink */
export async function postCustomerOrgLegalManAuthLink(
  body: SYSAPI.F2BRequestCustomerOrgLegalManAuthLinkReq,
  options?: { [key: string]: any },
) {
  return request<SYSAPI.F2BResponseCustomerOrgLegalManAuthLinkResp>(
    '/LandCA/account/customerOrgLegalManAuthLink',
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

/** 查询人脸识别校验结果 GET /LandCA/account/faceRecognize */
export async function getFaceRecognizeResult1(options?: { [key: string]: any }) {
  return request<SYSAPI.F2BResponseGetFaceRecognizeResultResp>('/LandCA/account/faceRecognize', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 发起人脸识别校验 POST /LandCA/account/faceRecognizeSponsor */
export async function faceRecognizeSponsor(
  body: SYSAPI.F2BRequestFaceRecognize,
  options?: { [key: string]: any },
) {
  return request<SYSAPI.F2BResponseFaceRecognizeResp>('/LandCA/account/faceRecognizeSponsor', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取个人信息 GET /LandCA/account/getAccountMain */
export async function getAccountMain(options?: { [key: string]: any }) {
  return request<SYSAPI.F2BResponseAccountResp>('/LandCA/account/getAccountMain', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 发送注销短信 POST /LandCA/account/sendAccountCancelSms */
export async function sendAccountCancelSms(
  body: SYSAPI.F2BRequestAccountCancelSms,
  options?: { [key: string]: any },
) {
  return request<SYSAPI.F2BResponseAccountCancelSmsResp>('/LandCA/account/sendAccountCancelSms', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 发送修改密码短信 POST /LandCA/account/sendChangePasswordSms */
export async function sendChangePasswordSms(
  body: SYSAPI.F2BRequestChangePassSms,
  options?: { [key: string]: any },
) {
  return request<SYSAPI.F2BResponseChangePassSmsResp>('/LandCA/account/sendChangePasswordSms', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改手机号发送短信，包括原手机号、新手机号、法人手机号 POST /LandCA/account/sendChangePhoneSms */
export async function sendChangePhoneSms(
  body: SYSAPI.F2BRequestChangePhoneSms,
  options?: { [key: string]: any },
) {
  return request<SYSAPI.F2BResponseChangePhoneSmsResp>('/LandCA/account/sendChangePhoneSms', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询人脸识别校验结果 GET /LandCA/identity/faceRecognizeResult */
export async function getFaceRecognizeResult(options?: { [key: string]: any }) {
  return request<SYSAPI.F2BResponseGetFaceRecognizeResultResp>(
    '/LandCA/identity/faceRecognizeResult',
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}

/** 机构认证重新发送短信 POST /LandCA/identity/orgAuthSms */
export async function orgAuthSms(
  body: SYSAPI.F2BRequestOrgAuthSms,
  options?: { [key: string]: any },
) {
  return request<SYSAPI.F2BResponseOrgAuthSmsResp>('/LandCA/identity/orgAuthSms', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 机构认证验证码校验及后续认证 POST /LandCA/identity/orgAuthSmsCheck */
export async function orgAuthSmsCheck(
  body: SYSAPI.F2BRequestOrgAuthSmsCheck,
  options?: { [key: string]: any },
) {
  return request<SYSAPI.F2BResponseOrgAuthSmsCheckResp>('/LandCA/identity/orgAuthSmsCheck', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 机构认证发起(法人发起时通过后直接入库；代理人发起时需要配合机构认证校验码接口进行校验) POST /LandCA/identity/orgIdentitySponsor */
export async function orgIdentitySponsor(
  body: SYSAPI.F2BRequestOrgIdentitySponsor,
  options?: { [key: string]: any },
) {
  return request<SYSAPI.F2BResponseOrgIdentitySponsorResp>('/LandCA/identity/orgIdentitySponsor', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 机构解绑短信 POST /LandCA/identity/orgUnbindSms */
export async function orgUnbindSms(
  body: SYSAPI.F2BRequestOrgUnbindSms,
  options?: { [key: string]: any },
) {
  return request<SYSAPI.F2BResponseOrgUnbindSmsResp>('/LandCA/identity/orgUnbindSms', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 机构解绑 POST /LandCA/identity/orgUnbindSmsCheck */
export async function orgUnbindSmsCheck(
  body: SYSAPI.F2BRequestOrgUnbindSmsCheck,
  options?: { [key: string]: any },
) {
  return request<SYSAPI.F2BResponseOrgUnbindSmsCheckResp>('/LandCA/identity/orgUnbindSmsCheck', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 个人认证短信校验--人脸识别方式 POST /LandCA/identity/personIdentityFaceRecognizeSmsCheck */
export async function personIdentityFaceRecognizeSponsorSmsCheck(
  body: SYSAPI.F2BRequestPersonIdentityFaceRecognizeSmsCheck,
  options?: { [key: string]: any },
) {
  return request<SYSAPI.F2BResponsePersonIdentityFaceRecognizeSmsCheckResp>(
    '/LandCA/identity/personIdentityFaceRecognizeSmsCheck',
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

/** 个人认证短信发送--人脸识别方式 POST /LandCA/identity/personIdentityFaceRecognizeSmsSend */
export async function personIdentityFaceRecognizeSmsSend(
  body: SYSAPI.F2BRequestPersonIdentityFaceRecognizeSmsSend,
  options?: { [key: string]: any },
) {
  return request<SYSAPI.F2BResponsePersonIdentityFaceRecognizeSmsSendResp>(
    '/LandCA/identity/personIdentityFaceRecognizeSmsSend',
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

/** 个人认证发起--人脸识别方式 POST /LandCA/identity/personIdentityFaceRecognizeSponsor */
export async function personIdentityFaceRecognizeSponsor(
  body: SYSAPI.F2BRequestPersonIdentityFaceRecoginize,
  options?: { [key: string]: any },
) {
  return request<SYSAPI.F2BResponsePersonIdentityFaceRecognizeResp>(
    '/LandCA/identity/personIdentityFaceRecognizeSponsor',
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

/** 个人认证验证码校验--短信验证方式 POST /LandCA/identity/personIdentitySmsCheck */
export async function personIdentitySmsCheck(
  body: SYSAPI.F2BRequestPersonIdentitySmsCheck,
  options?: { [key: string]: any },
) {
  return request<SYSAPI.F2BResponsePersonIdentitySmsCheckResp>(
    '/LandCA/identity/personIdentitySmsCheck',
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

/** 个人认证发起--短信验证方式 POST /LandCA/identity/personIdentitySponsor */
export async function personIdentitySponsor(
  body: SYSAPI.F2BRequestPersonIdentity,
  options?: { [key: string]: any },
) {
  return request<SYSAPI.F2BResponsePersonIdentityResp>('/LandCA/identity/personIdentitySponsor', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
