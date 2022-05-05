import { getSetting, getUserInfo } from "./utils/util"

//本文件可见，index页面不可见，可以加export暴露到外边
let resolveUserInfo: (value: WechatMiniprogram.UserInfo | PromiseLike<WechatMiniprogram.UserInfo>) => void
let rejectUserInfo: (reason?: any) => void

// app.ts
App<IAppOption>({//IAppOption是泛型
  globalData: {
    userInfo: new Promise((resolve,reject)=>{
      resolveUserInfo = resolve
      rejectUserInfo = reject
    }),
    // userInfo: new Promise((resolve,reject)=>{
    //     getSetting().then(res=>{
    //       //console.log(res)
    //       if (res.authSetting['scope.userInfo']) {
    //         return getUserInfo()
    //       }
    //       //return Promise.resolve(undefined)
    //       return undefined
    //     }).then(res => {
    //       //console.log(res)
    //       if(!res){
    //         return
    //       }

    //       //如果获取成功，就需要在接下来通知外部进行获取
    //       resolve(res.userInfo)
    //       // this.globalData.userInfo = res?.userInfo//?号，表达的意思是，如果res部位空，就返回res.userInfo，如果res为空，防止挂掉，加个？号就有了保障,或者在这之前进行判断提前处理
    //       // if(this.userInfoReadyCallback){
    //       //   this.userInfoReadyCallback(res)
    //       // }
    //     }).catch(reject)
    //     // catch(err => {
    //     //   console.log(err)
    //     //   reject(err)
    //     // })
    // }),
  },
  async onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log(res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    })


    //如果不是回调函数
    // const setting = wx.getSetting().then(res =>{
    //   return res
    // })
    try{
        const setting = await getSetting()
        if(setting.authSetting['scope.userInfo']){
          const usreInfoRes = await getUserInfo()
          resolveUserInfo(usreInfoRes.userInfo)
        }
    }catch(err){
      rejectUserInfo(err)
    }
    // getSetting().then(res=>{
    //   //console.log(res)
    //   if (res.authSetting['scope.userInfo']) {
    //     return getUserInfo()
    //   }
    //   //return Promise.resolve(undefined)
    //   return undefined
    // }).then(res => {
    //   //console.log(res)
    //   if(!res){
    //     return
    //   }
    //   resolveUserInfo(res.userInfo)
    //   // this.globalData.userInfo = res?.userInfo//?号，表达的意思是，如果res部位空，就返回res.userInfo，如果res为空，防止挂掉，加个？号就有了保障,或者在这之前进行判断提前处理
    //   // if(this.userInfoReadyCallback){
    //   //   this.userInfoReadyCallback(res)
    //   // }
    // }).catch(res => {
    //   rejectUserInfo(res)
    //   console.log(res)
    // })
    //获取用户信息
    // wx.getSetting({
    //   success:res => {
    //     if(res.authSetting['scope.userInfo']){
    //       //已经授权，可以直接调用getUserInfo获取头像昵称，不会重复获取
    //       wx.getUserInfo({
    //         success:res=>{
    //           //可以将res发送给后台解码出unionId
    //           this.globalData.userInfo = res.userInfo
    //           if(this.userInfoReadyCallback){
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   },
    // })
  },
  resolveUserInfo(userInfo: WechatMiniprogram.UserInfo){
    resolveUserInfo(userInfo)
  },
  rejectUserInf(err?: any){
    rejectUserInfo(err)
  },
})