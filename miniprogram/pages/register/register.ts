import { routing } from "../../utils/routing"

// pages/register/register.ts
Page({
    redirectURL:'',
    /**
     * 页面的初始数据
     */
    data: {
        genderIndex:0,
        //licImgURL: "/resources/sedan.png" as  string | undefined,
        licImgURL: '',
        genders:['未知','男','女','其他'],
        birthday:'1990-01-01',
        licNo:'112321',
        name:'',
        state:'UNSUBMITTED' as 'UNSUBMITTED' | 'PENDING' | 'VERIFIED'
    },
    onGenderChange(opt:any){
        this.setData({
            genderIndex: opt.detail.value
        })
    },
    onBirthday(e:any){
        this.setData({
            birthday:e.detail.value
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(opt:Record<'redirect',string>) {
        const o: routing.RegisterOpts = opt
        if (o.redirect){
            this.redirectURL = decodeURIComponent(o.redirect)
        }
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
    onUploadLic(){
        wx.chooseImage({
            success:res => {
                if(res.tempFilePaths[0].length > 0){    
                    this.setData({
                        licImgURL:res.tempFilePaths[0]
                    })
                }
                setTimeout(()=>{
                    this.setData({
                        licNo:'12312312312',
                        name:'法外狂徒张三',
                        genderIndex:1,
                        birthday:'1990-05-23'
                    })
                })
            }
        })
    },
    onSubmit(){
        this.setData({
            state:'PENDING'
        })
        setTimeout(() => {
            this.onLicVerified()
        }, 3000);
    },
    onResubmit(){
        this.setData({
            state:'UNSUBMITTED',
            licImgURL:''
        })
    },
    onLicVerified(){
        this.setData({
            state:'VERIFIED'
        })

        if(this.redirectURL){
            wx.redirectTo({
                url:this.redirectURL
            })
        }
    }
})