declare namespace SYSAPI {
  type accountCancelSms = true;

  type accountCancelSmsResp = true;

  type accountResp = {
    id?: number;
    name?: string;
    cnName?: string;
    mobilePhoneRegion?: string;
    mobilePhone?: string;
    email?: string;
    identity?: number;
    customer?: CustomerRpcPojo;
    organizations?: OrganizationRpcPojo[];
  };

  type cancelAccount = {
    /** 验证码 */
    captcha?: string;
  };

  type cancelAccountResp = true;

  type CustomerRpcPojo = {
    id?: number;
    uid?: number;
    name?: string;
    mobilePhoneRegion?: string;
    mobilePhone?: string;
    cidCode?: string;
    bankCardNo?: string;
    certificatedTime?: number;
    imageCidFront?: string;
    imageCidBack?: string;
    tunnelAccountId?: string;
    tunnelCode?: string;
    authType?: string;
    tunnelSerial?: string;
  };

  type F2BRequestAccountCancelSms = {
    bizContent?: accountCancelSms;
    reqSerial?: string;
    uid?: number;
  };

  type F2BRequestCancelAccount = {
    bizContent?: cancelAccount;
    reqSerial?: string;
    uid?: number;
  };

  type F2BRequestLogin = {
    bizContent?: login;
    reqSerial?: string;
    uid?: number;
  };

  type F2BRequestLoginSms = {
    bizContent?: loginSms;
    reqSerial?: string;
    uid?: number;
  };

  type F2BRequestLogout = {
    bizContent?: logout;
    reqSerial?: string;
    uid?: number;
  };

  type F2BRequestOcrBusiLicense = {
    bizContent?: ocrBusiLicense;
    reqSerial?: string;
    uid?: number;
  };

  type F2BRequestOcrIdentityBack = {
    bizContent?: ocrIdentityBack;
    reqSerial?: string;
    uid?: number;
  };

  type F2BRequestOcrIdentityFront = {
    bizContent?: ocrIdentityFront;
    reqSerial?: string;
    uid?: number;
  };

  type F2BRequestOrgIdentitySponsor = {
    bizContent?: orgIdentitySponsor;
    reqSerial?: string;
    uid?: number;
  };

  type F2BRequestPersonIdentityFaceRecoginize = {
    bizContent?: personIdentityFaceRecoginize;
    reqSerial?: string;
    uid?: number;
  };

  type F2BRequestPersonIdentityFaceRecognizeSmsCheck = {
    bizContent?: personIdentityFaceRecognizeSmsCheck;
    reqSerial?: string;
    uid?: number;
  };

  type F2BRequestPersonIdentityFaceRecognizeSmsSend = {
    bizContent?: personIdentityFaceRecognizeSmsSend;
    reqSerial?: string;
    uid?: number;
  };

  type F2BRequestPostCustomerImageStsAuthReq = {
    bizContent?: postCustomerImageStsAuthReq;
    reqSerial?: string;
    uid?: number;
  };

  type F2BRequestPostCustomerOssUploadFinishReqPost = {
    bizContent?: PostCustomerOssUploadFinishReqPost;
    reqSerial?: string;
    uid?: number;
  };

  type F2BRequestRegist = {
    bizContent?: regist;
    reqSerial?: string;
    uid?: number;
  };

  type F2BRequestRegistSms = {
    bizContent?: registSms;
    reqSerial?: string;
    uid?: number;
  };

  type F2BResponseAccountCancelSmsResp = {
    bizContent?: accountCancelSmsResp;
    bizCode?: string;
    bizMsg?: string;
    sysCode?: string;
    sysMsg?: string;
    reqSerial?: string;
  };

  type F2BResponseAccountResp = {
    bizContent?: accountResp;
    bizCode?: string;
    bizMsg?: string;
    sysCode?: string;
    sysMsg?: string;
    reqSerial?: string;
  };

  type F2BResponseCancelAccountResp = {
    bizContent?: cancelAccountResp;
    bizCode?: string;
    bizMsg?: string;
    sysCode?: string;
    sysMsg?: string;
    reqSerial?: string;
  };

  type F2BResponseGetFaceRecognizeResultResp = {
    bizContent?: getFaceRecognizeResultResp;
    bizCode?: string;
    bizMsg?: string;
    sysCode?: string;
    sysMsg?: string;
    reqSerial?: string;
  };

  type F2BResponseLoginResp = {
    bizContent?: loginResp;
    bizCode?: string;
    bizMsg?: string;
    sysCode?: string;
    sysMsg?: string;
    reqSerial?: string;
  };

  type F2BResponseLoginSmsResp = {
    bizContent?: loginSmsResp;
    bizCode?: string;
    bizMsg?: string;
    sysCode?: string;
    sysMsg?: string;
    reqSerial?: string;
  };

  type F2BResponseLogoutResp = {
    bizContent?: logoutResp;
    bizCode?: string;
    bizMsg?: string;
    sysCode?: string;
    sysMsg?: string;
    reqSerial?: string;
  };

  type F2BResponseOcrBusiLicenseResp = {
    bizContent?: ocrBusiLicenseResp;
    bizCode?: string;
    bizMsg?: string;
    sysCode?: string;
    sysMsg?: string;
    reqSerial?: string;
  };

  type F2BResponseOcrIdentityBackResp = {
    bizContent?: ocrIdentityBackResp;
    bizCode?: string;
    bizMsg?: string;
    sysCode?: string;
    sysMsg?: string;
    reqSerial?: string;
  };

  type F2BResponseOcrIdentityFrontResp = {
    bizContent?: ocrIdentityFrontResp;
    bizCode?: string;
    bizMsg?: string;
    sysCode?: string;
    sysMsg?: string;
    reqSerial?: string;
  };

  type F2BResponseOrgIdentitySponsorResp = {
    bizContent?: orgIdentitySponsorResp;
    bizCode?: string;
    bizMsg?: string;
    sysCode?: string;
    sysMsg?: string;
    reqSerial?: string;
  };

  type F2BResponsePersonIdentityFaceRecognizeResp = {
    bizContent?: personIdentityFaceRecognizeResp;
    bizCode?: string;
    bizMsg?: string;
    sysCode?: string;
    sysMsg?: string;
    reqSerial?: string;
  };

  type F2BResponsePersonIdentityFaceRecognizeSmsCheckResp = {
    bizContent?: personIdentityFaceRecognizeSmsCheckResp;
    bizCode?: string;
    bizMsg?: string;
    sysCode?: string;
    sysMsg?: string;
    reqSerial?: string;
  };

  type F2BResponsePersonIdentityFaceRecognizeSmsSendResp = {
    bizContent?: personIdentityFaceRecognizeSmsSendResp;
    bizCode?: string;
    bizMsg?: string;
    sysCode?: string;
    sysMsg?: string;
    reqSerial?: string;
  };

  type F2BResponsePostCustomerImageStsAuthRespPost = {
    bizContent?: PostCustomerImageStsAuthRespPost;
    bizCode?: string;
    bizMsg?: string;
    sysCode?: string;
    sysMsg?: string;
    reqSerial?: string;
  };

  type F2BResponsePostCustomerOssUploadFinishRespPost = {
    bizContent?: PostCustomerOssUploadFinishRespPost;
    bizCode?: string;
    bizMsg?: string;
    sysCode?: string;
    sysMsg?: string;
    reqSerial?: string;
  };

  type F2BResponseRegistResp = {
    bizContent?: registResp;
    bizCode?: string;
    bizMsg?: string;
    sysCode?: string;
    sysMsg?: string;
    reqSerial?: string;
  };

  type F2BResponseRegistSmsResp = {
    bizContent?: registSmsResp;
    bizCode?: string;
    bizMsg?: string;
    sysCode?: string;
    sysMsg?: string;
    reqSerial?: string;
  };

  type getFaceRecognizeResultResp = {
    /** ONGOING-进行中  SUCCESS-成功 FAIL-失败 */
    status?: string;
  };

  type login = {
    /** 用户名 */
    name?: string;
    password?: string;
    mobilePhone?: string;
    captcha?: string;
    /** 登录平台：1-web 2-h5 */
    platform?: number;
  };

  type loginResp = {
    id?: number;
    name?: string;
    cnName?: string;
    mobilePhone?: string;
    email?: string;
    accessToken?: string;
    /** 登录身份：-1表示普通身份，没有完成任何个人认证及机构认证；为0则表示个人认证身份；否则存的是机构的id */
    identity?: number;
  };

  type loginSms = {
    /** 手机号 */
    mobilePhone?: string;
  };

  type loginSmsResp = true;

  type logout = true;

  type logoutResp = true;

  type ocrBusiLicense = {
    /** 图片url，图片首先前端传到oss */
    url?: string;
  };

  type ocrBusiLicenseResp = {
    /** 统一社会信用代码 */
    creditCode?: string;
    /** 营业名称 */
    companyName?: string;
    /** 法人/负责人 */
    legalPerson?: string;
  };

  type ocrIdentityBack = {
    /** 图片url，图片首先前端传到oss */
    url?: string;
  };

  type ocrIdentityBackResp = {
    /** 签发机关 */
    issueAuthority?: string;
    /** 有效期限 */
    validPeriod?: string;
  };

  type ocrIdentityFront = {
    /** 图片url，图片首先前端传到oss */
    url?: string;
  };

  type ocrIdentityFrontResp = {
    name?: string;
    idNumber?: string;
  };

  type OrganizationRpcPojo = {
    id?: number;
    name?: string;
    regCode?: string;
    usccCode?: string;
    legalManName?: string;
    legalManCidCode?: string;
    legalManMobilePhone?: string;
    certificated?: boolean;
    certificatedTime?: number;
    tunnelAccountId?: string;
    imageUscc?: string;
    imageLegalManCidFront?: string;
    imageLegalManCidBack?: string;
    tunnelCode?: string;
    authType?: string;
    legalManAuthorized?: boolean;
    tunnelSerial?: string;
    legalManCidLicenceIssue?: string;
    legalManCidValidTimeStart?: string;
    legalManCidValidTimeEnd?: string;
  };

  type orgIdentitySponsor = {
    /** 法人手机号 */
    mobilePhone?: string;
    /** 法人姓名 */
    legalManName?: string;
    /** 身份证号 */
    cidCode?: string;
    /** 身份证背面文件ID */
    imageCidBack?: string;
    /** 身份证正面文件ID */
    imageCidFront?: string;
    /** 企业名称 */
    orgLegalName?: string;
    /** 统一信用代码 */
    usccCode?: string;
    /** 营业执照图片文件ID */
    imageUscc?: string;
    /** 身份证发证机关 */
    cidLicenceIssue?: string;
    /** 身份证有效期开始 */
    cidValidTimeStart?: string;
    /** 身份证有效期结束 */
    cidValidTimeEnd?: string;
    /** 适配业务方需求：false-法人发起时直接入库  true-法人发起时返回人脸识别url，人脸识别后入库  不传则默认false */
    needFaceRecognize?: boolean;
    /** needFaceRecognize为true时的人脸识别跳转地址 */
    faceRecognizeCallbackUrl?: string;
  };

  type orgIdentitySponsorResp = {
    /** 是否需要后续验证码校验 */
    needCaptchaCheck?: boolean;
    /** 法人本人进行认证时，如果不需要人脸识别进行意愿认证，则会直接认证通过并返回该字段 */
    oid?: number;
    /** 刷脸认证链接 */
    authUrl?: string;
    /** 链接失效时间（Unix时间戳格式，单位：毫秒） */
    expire?: number;
  };

  type personIdentityFaceRecoginize = {
    /** 手机号 */
    mobilePhone?: string;
    /** 验证码 */
    captcha?: string;
    /** 姓名 */
    name?: string;
    /** 身份证号 */
    cidCode?: string;
    /** 身份证背面文件ID */
    imageCidBack?: string;
    /** 身份证正面文件ID */
    imageCidFront?: string;
    /** 识别成功跳转地址 */
    callbackUrl?: string;
  };

  type personIdentityFaceRecognizeResp = {
    /** 刷脸认证短链接 */
    authUrl?: string;
    /** 刷脸认证长链接 */
    originalUrl?: string;
    /** 链接失效时间（Unix时间戳格式，单位：毫秒） */
    expire?: number;
  };

  type personIdentityFaceRecognizeSmsCheck = {
    /** 验证码 */
    captcha?: string;
  };

  type personIdentityFaceRecognizeSmsCheckResp = true;

  type personIdentityFaceRecognizeSmsSend = {
    mobilePhone?: string;
  };

  type personIdentityFaceRecognizeSmsSendResp = true;

  type postCustomerImageStsAuthReq = {
    /** 文件处理类型，1为个人，2为组织 */
    fileSetType?: string;
    /** 文件后缀名数组 */
    fileSuffixes?: string[];
  };

  type PostCustomerImageStsAuthRespPost = {
    endPoint?: string;
    files?: string[];
    bucketName?: string;
    securityToken?: string;
    expiration?: string;
    accessKeySecret?: string;
    accessKeyId?: string;
  };

  type PostCustomerOssUploadFinishReqPost = {
    fileObject?: string[];
    bucketName?: string;
  };

  type PostCustomerOssUploadFinishRespPost = {
    url?: string[];
  };

  type postOssUploadFinishParams = {
    request: F2BRequestPostCustomerOssUploadFinishReqPost;
    authorization: string;
  };

  type regist = {
    /** 手机号 */
    mobilePhone?: string;
    /** 用户名 */
    name?: string;
    /** 验证码 */
    captcha?: string;
    /** 密码 */
    password?: string;
    /** 登录平台：1-web 2-h5 */
    platform?: number;
  };

  type registResp = {
    id?: number;
    name?: string;
    cnName?: string;
    mobilePhone?: string;
    email?: string;
    accessToken?: string;
    /** 登录身份：-1表示普通身份，没有完成任何个人认证及机构认证；为0则表示个人认证身份；否则存的是机构的id */
    identity?: number;
  };

  type registSms = {
    /** 手机号 */
    mobilePhone?: string;
  };

  type registSmsResp = true;
}
