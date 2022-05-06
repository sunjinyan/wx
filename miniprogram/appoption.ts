export interface IAppOption {
    globalData: {
      userInfo?: Promise<WechatMiniprogram.UserInfo>,
      // userInfo?: WechatMiniprogram.UserInfo,
    }
    //userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
    resolveUserInfo(userInfo: WechatMiniprogram.UserInfo): void
    rejectUserInf(err?: any):void
  }