import { useState } from "react";
import useCouponStore from "../../store/couponStore";
import toast from "react-hot-toast";


function CouponBox(){


const [code,setCode] = useState("");



const coupon = useCouponStore(
(state)=>state.coupon
);



const applyCoupon = useCouponStore(
(state)=>state.applyCoupon
);



const removeCoupon = useCouponStore(
(state)=>state.removeCoupon
);





const coupons = {


"NEXORA10":{
code:"NEXORA10",
discount:10
},


"NEXORA20":{
code:"NEXORA20",
discount:20
},


"WELCOME5":{
code:"WELCOME5",
discount:5
}


};





const handleApply=()=>{


const entered = code.trim().toUpperCase();



if(coupons[entered]){


applyCoupon(coupons[entered]);


toast.success(
`${entered} Applied 🎉`
);


setCode("");



}
else{


toast.error(
"Invalid Coupon Code"
);


}


};







return (


<div className="
bg-white
dark:bg-gray-900
rounded-3xl
p-6
border
border-gray-200
dark:border-gray-800
shadow-lg
mt-8
">


<h2 className="
text-xl
font-bold
text-black
dark:text-white
mb-5
">

🎟 Apply Coupon

</h2>






{
coupon ?


(


<div className="
flex
items-center
justify-between
bg-green-100
dark:bg-green-900/30
rounded-2xl
p-4
">


<div>


<p className="
font-bold
text-green-700
dark:text-green-400
">

{coupon.code} Applied

</p>


<p className="
text-sm
text-gray-600
dark:text-gray-400
">

{coupon.discount}% Discount

</p>


</div>




<button

onClick={removeCoupon}

className="
text-red-600
font-semibold
"

>

Remove

</button>



</div>



)


:

(


<div className="
flex
gap-3
">


<input


value={code}

onChange={(e)=>setCode(e.target.value)}

placeholder="Enter coupon code"


className="
flex-1
px-5
py-3
rounded-xl
border
border-gray-300
dark:border-gray-700
bg-white
dark:bg-gray-800
text-black
dark:text-white
outline-none
focus:ring-2
focus:ring-black
"

/>





<button

onClick={handleApply}

className="
bg-black
dark:bg-white
text-white
dark:text-black
px-6
rounded-xl
font-semibold
hover:scale-105
transition
"

>

Apply

</button>



</div>


)

}




<div className="
mt-5
text-sm
text-gray-500
dark:text-gray-400
">


<p>
Available Coupons:
</p>


<div className="
flex
flex-wrap
gap-3
mt-3
">


{

Object.keys(coupons).map((item)=>(


<span

key={item}

className="
px-4
py-2
rounded-full
bg-gray-100
dark:bg-gray-800
text-gray-700
dark:text-gray-300
font-medium
"

>

{item}

</span>


))


}


</div>


</div>





</div>


)


}


export default CouponBox;