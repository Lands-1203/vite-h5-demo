// @ts-ignore
/* eslint-disable */
import request from '../request';

/** 组织认证完成通知 POST /LandCA/ThirdParty/Esign/authOrgFinish */
export async function orgAuthFinish(
  body: SYSAPI.EsignOrgAuthFinishNotice,
  options?: { [key: string]: any },
) {
  return request<SYSAPI.EsignFaceRecognizeNotificationAnswer>(
    '/LandCA/ThirdParty/Esign/authOrgFinish',
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

/** 个人认证完成通知 POST /LandCA/ThirdParty/Esign/authPersonFinish */
export async function personAuthFinish(
  body: SYSAPI.EsignPersonAuthFinishNotice,
  options?: { [key: string]: any },
) {
  return request<SYSAPI.EsignFaceRecognizeNotificationAnswer>(
    '/LandCA/ThirdParty/Esign/authPersonFinish',
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

/** 人脸识别完成通知 POST /LandCA/ThirdParty/Esign/faceRecognizeFinish */
export async function resignFinish(
  body: SYSAPI.EsignFaceRecognizeFinishNotice,
  options?: { [key: string]: any },
) {
  return request<SYSAPI.EsignFaceRecognizeNotificationAnswer>(
    '/LandCA/ThirdParty/Esign/faceRecognizeFinish',
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
