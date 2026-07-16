import { create } from "zustand";
import { persist } from "zustand/middleware";


const useCouponStore = create(

persist(

(set)=>({

  coupon: null,


  applyCoupon:(coupon)=>{

    set({
      coupon
    })

  },


  removeCoupon:()=>{

    set({
      coupon:null
    })

  }


}),


{
 name:"coupon-storage"
}


)

);


export default useCouponStore;