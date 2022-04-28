import { routing } from "../../utils/routing"

// pages/lock/lock.ts
const shareLocationKey = "share_location"
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo:{},
        avatarURL:'',
        shareLocationKey:false,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    async onLoad(opt:Record<'car_id',string>) {
        const o: routing.LockOpts = opt
        
        console.log(o.car_id)
        
        const userInfo = await getApp<IAppOption>().globalData.userInfo
        wx.getStorageSync(shareLocationKey)
        this.setData({
            avatarURL:userInfo.avatarUrl,
            shareLocation:wx.getStorageSync(shareLocationKey)  || false
        })
    },
    onUnlockTap(){
        wx.getLocation({
            type:'gcj02',
            success:loc=>{
                console.log('starting a trip',{
                    location:{
                        latitude: loc.latitude,
                        longitude:loc.longitude
                    },
                    avatarURL:this.data.shareLocationKey? this.data.avatarURL:'',
                    carID:''
                })
                const tripID = 'trip456'
                wx.showLoading({
                    title:"开锁中",
                    mask:true,
                })
                
                setTimeout(() => {
                    wx.redirectTo({
                        //url: `/pages/driving/driving?trip_id=${tripID}`,
                        url: routing.driving({
                            trip_id:tripID
                        }),
                        complete:()=>{
                            wx.hideLoading()
                        }
                    })
                },2000)
            },
            fail:()=>{
                wx.showToast({
                    icon:'none',
                    title:'请前往设置页授权位置信息'
                })
            }
        })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    },
    onGetUserInfo(e:any){
        console.log(e)
        const userInfo: WechatMiniprogram.UserInfo = e.detail.value.userInfo
        if(e.detail.value.userInfo){
            getApp<IAppOption>().resolveUserInfo(userInfo)
        }
    },
    onShareLocation(e:any){
        const shareLocation:boolean = e.detail.value
        wx.setStorageSync(shareLocationKey,shareLocation)
    }
})