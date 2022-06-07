// index.ts

import { IAppOption } from "../../appoption"
import { rental } from "../../service/proto_gen/rental/rental_pb"
import { TripService } from "../../service/trip"
import { routing } from "../../utils/routing"

// 获取应用实例
const app = getApp<IAppOption>()

Page({
  ifPageShowing:false,
  data:{
    avatarURL:"",
    setting:{
      skew:0,
      rotate:0,
      showLocation:true,
      showScale:true,
      subKey:'',
      layerStyle:-1,
      enableZoom:true,
      enableScroll:true,
      enableRotate:false,
      showCompass:false,
      enable3D:false,
      enableOverlooking:false,
      enanleStatellite:false,
      enableTraffic:false,
    },
    location:{
      latitude:23.099995,
      longitude:113.324520,
    },
    scale:10,
    markers:[{
      iconPath:"/resources/car.png",
      id:0,
      latitude:23.099995,
      longitude:113.324520,
      width:50,
      height:50
    },{
      iconPath:"/resources/car.png",
      id:1,
      latitude:23.099995,
      longitude:114.324520,
      width:50,
      height:50
    }],
  },
  onMyLocationTap(){
    wx.getLocation({
      type:"gcj02",
      success:res=>{
        this.setData({
          location:{
            latitude:res.latitude,
            longitude:res.longitude
          },
        })
      },
      fail:()=>{
        wx.showToast({
          title:'请前往设置页授权',
          icon:'none'
        })
      }
    })
  },
  async onLoad(){
    // wx.request({
    //   url:"http://localhost:8080/trip/123",
    //   method:"GET",
    //   success:console.log,
    //   fail:console.error
    // })
    const userInfo = await app.globalData.userInfo
    this.setData({
      avatarURL:userInfo?.avatarUrl
    })
  },
  onShow(){
    this.ifPageShowing = true
  },
  onHide(){
    this.ifPageShowing = false
  },
  moveCars(){
    const map = wx.createMapContext("map")
    const dest = {
      latitude:23.099995,
      longitude:113.324520
    }

    const moveCars = () => {
      dest.latitude += 0.1
      dest.longitude += 0.1
      map.translateMarker({
        destination: {
          latitude:dest.latitude,
          longitude:dest.longitude,
        },
        markerId:0,
        autoRotate:false,
        rotate:0,
        duration:5000,
        animationEnd: ()=>{
          if(this.ifPageShowing) {
            moveCars()
          }
        },
      })
    }
    moveCars()
  },
  async onScanTap(){
    const trips = await TripService.GetTrips(rental.v1.TripStatus.IN_PROGRESS)
    if((trips.trips?.length || 0) > 0){
      await this.selectComponent('#tripModal').showModal()
      wx.navigateTo({
        url:routing.driving({
          trip_id: trips.trips![0].id!,
        }),
      })
      return
    } 

    wx.scanCode({
      success:async res=>{
        await this.selectComponent('#licModal').showModal()
        console.log(res)
        const carID = 'car123'
        //const redirectURL = `/pages/lock/lock?car_id=${carID}`
        const redirectURL = routing.lock({
          car_id:carID
        })
        wx.navigateTo({
          //url:`/pages/register/register?redirect=${encodeURIComponent(redirectURL)}`,
          url:routing.redirect({
            redirectURL:redirectURL
          })
        })
      },
      fail:() => {
        const carID = 'car123'
        //const redirectURL = `/pages/lock/lock?car_id=${carID}`
        const redirectURL = routing.lock({
          car_id:carID
        })
        wx.navigateTo({
          // url:`/pages/register/register?redirect=${encodeURIComponent(redirectURL)}`,
          url:routing.redirect({
            redirectURL:redirectURL
          }),
        })
      }
    })
  },
  onMyTripsTap() {
    wx.navigateTo({
      url: routing.mytrips(),
    })
  },
})
