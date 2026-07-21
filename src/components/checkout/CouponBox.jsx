import { useState } from "react";
import { motion } from "framer-motion";
import { TicketPercent, CheckCircle } from "lucide-react";
import toast from "react-hot-toast";


function CouponBox(){


const [coupon,setCoupon]=useState("");

const [applied,setApplied]=useState(false);




const applyCoupon=()=>{


if(!coupon.trim()){

toast.error("Enter coupon code");

return;

}



if(coupon.toUpperCase()==="NEXORA20"){


setApplied(true);

toast.success("Coupon Applied 🎉 20% OFF");


}

else{


setApplied(false);

toast.error("Invalid Coupon Code");


}


};







return(


<motion.section


initial={{

opacity:0,

y:30

}}


whileInView={{

opacity:1,

y:0

}}



viewport={{

once:true

}}



className="
mt-10

"

>



<div

className="

relative

overflow-hidden


rounded-[32px]


p-8


bg-gradient-to-br


from-indigo-600


via-purple-600


to-cyan-500



shadow-2xl



"

>





{/* Glow */}


<div

className="

absolute

w-72

h-72

bg-white/20

rounded-full

blur-3xl

-top-20

-right-20

"

>

</div>








<div

className="

relative

z-10

"

>



<div

className="
flex
items-center
gap-4
"

>


<div

className="

w-14

h-14


rounded-2xl


bg-white/20


backdrop-blur-xl


flex

items-center

justify-center


"

>


<TicketPercent

className="
text-white

"

size={30}

/>


</div>






<div>


<h2

className="

text-3xl

font-black

text-white

"

>

Have a Coupon?

</h2>



<p

className="

text-white/80

mt-1

"

>

Get exciting discounts on your order

</p>



</div>


</div>








<div

className="

mt-8

flex

flex-col

md:flex-row

gap-4

"

>


<input


value={coupon}


onChange={(e)=>setCoupon(e.target.value)}



placeholder="Enter Coupon Code"



className="


flex-1


px-6


py-4


rounded-2xl



bg-white/90



text-black



outline-none



placeholder:text-gray-500



"




/>







<button


onClick={applyCoupon}



className="


px-8


py-4


rounded-2xl



bg-black


text-white



font-bold



hover:scale-105



transition



"

>


Apply


</button>





</div>








{

applied &&



<div

className="

mt-6


flex

items-center

gap-3


bg-white/20


backdrop-blur-xl


rounded-2xl


px-5

py-4


text-white


font-semibold


"

>


<CheckCircle

size={22}

/>


NEXORA20 Applied - You saved 20% 🎉


</div>



}





<div

className="

mt-6


inline-block


bg-white/20


px-5


py-2


rounded-full


text-white


text-sm


font-bold


"

>


Try Code: NEXORA20


</div>






</div>




</div>




</motion.section>


)

}


export default CouponBox;