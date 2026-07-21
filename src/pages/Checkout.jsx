import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Truck,
  CreditCard,
  Wallet,
  Banknote
} from "lucide-react";

import useCartStore from "../store/cartStore";
import useOrderStore from "../store/orderStore";

import toast from "react-hot-toast";

import CouponBox from "../components/checkout/CouponBox";
import useCouponStore from "../store/couponStore";



function Checkout(){



const cart = useCartStore(
(state)=>state.cart
);



const clearCart = useCartStore(
(state)=>state.clearCart
);



const addOrder = useOrderStore(
(state)=>state.addOrder
);



const coupon = useCouponStore(
(state)=>state.coupon
);



const navigate = useNavigate();



const [loading,setLoading]=useState(false);



const [paymentMethod,setPaymentMethod]=useState("COD");



const [form,setForm]=useState({

name:"",
email:"",
phone:"",
address:"",
city:"",
pincode:""

});





const handleChange=(e)=>{


setForm({

...form,

[e.target.name]:e.target.value

});


};





const subtotal = cart.reduce(
(total,item)=>
total + item.price*item.quantity,
0
);



const discount = coupon
?
(subtotal*coupon.discount)/100
:
0;



const shipping = subtotal>300 ? 0 : 40;



const tax=(subtotal-discount)*0.18;



const total =
subtotal-discount+shipping+tax;







const handlePayment=async(e)=>{


e.preventDefault();



if(
!form.name ||
!form.email ||
!form.phone ||
!form.address
){

toast.error(
"Please fill required details"
);

return;

}



setLoading(true);



try{


await new Promise(
(resolve)=>setTimeout(resolve,1500)
);



const order={

id:Date.now(),

items:cart,

subtotal,

discount,

shipping,

tax,

total,

customer:form,

paymentMethod,

status:"Order Placed",

date:new Date().toLocaleDateString(),

status:"Confirmed"

};



addOrder(order);

clearCart();


toast.success(
"Order placed successfully 🎉"
);



navigate("/success");



}

catch(err){

toast.error(
"Something went wrong"
);

}

finally{

setLoading(false);

}


};








if(cart.length===0){


return(

<section

className="
min-h-screen

flex
items-center
justify-center

bg-slate-50
dark:bg-slate-950

px-6

"


>


<div

className="
bg-white
dark:bg-slate-900

rounded-[40px]

p-12

text-center

shadow-xl

border

border-slate-200

dark:border-slate-800

"

>


<h1

className="
text-4xl
font-black

dark:text-white

"

>

Cart Empty 🛒

</h1>


<Link

to="/products"

className="
inline-block

mt-8

px-8
py-3

rounded-2xl

bg-gradient-to-r

from-indigo-600
via-violet-600
to-cyan-500

text-white

font-bold

"

>

Continue Shopping

</Link>


</div>


</section>

)


}







return(

<section

className="

min-h-screen

bg-slate-50
dark:bg-slate-950

px-6
py-20

"

>


<div

className="
max-w-7xl
mx-auto

"

>



<motion.h1

initial={{
opacity:0,
y:30
}}

animate={{
opacity:1,
y:0
}}

className="
text-5xl

font-black

text-slate-900

dark:text-white

mb-12

"

>

Secure Checkout

</motion.h1>





<div

className="

grid

lg:grid-cols-2

gap-10

"

>






{/* LEFT FORM */}



<motion.form


onSubmit={handlePayment}


initial={{
opacity:0,
x:-40
}}

animate={{
opacity:1,
x:0
}}


className="

bg-white

dark:bg-slate-900


rounded-[40px]

p-8


shadow-xl


border

border-slate-200

dark:border-slate-800


"


>



<div

className="
flex
items-center
gap-3
mb-8

"

>


<div

className="
w-12
h-12

rounded-2xl

bg-indigo-100

dark:bg-indigo-900

flex
items-center
justify-center

"

>

<Truck

className="
text-indigo-600

"

/>

</div>


<h2

className="
text-2xl

font-black

dark:text-white

"

>

Shipping Details

</h2>


</div>






{
[
["name","Full Name"],
["email","Email Address"],
["phone","Phone Number"],
["address","Address"],
["city","City"],
["pincode","Pincode"]

].map(([name,label])=>(


<div

key={name}

className="mb-5"

>


<input

name={name}

value={form[name]}

onChange={handleChange}

placeholder={label}

className="

w-full

px-5

py-4

rounded-2xl


bg-slate-50

dark:bg-slate-800


border

border-slate-200

dark:border-slate-700


outline-none


dark:text-white


focus:ring-2

focus:ring-indigo-500


"

/>



</div>


))

}

{/* PAYMENT SECTION */}


<h2

className="
text-2xl
font-black

dark:text-white

mt-10
mb-5

"

>

Payment Method

</h2>




<div

className="
space-y-4

"

>


{

[

["COD","Cash On Delivery",Banknote],

["UPI","UPI Payment",Wallet],

["CARD","Card Payment",CreditCard]

].map(([value,text,Icon])=>(



<label

key={value}


className={`
flex
items-center
gap-4

p-5

rounded-3xl

cursor-pointer

border


transition


${
paymentMethod===value

?

"border-indigo-500 bg-indigo-50 dark:bg-indigo-900/30"

:

"border-slate-200 dark:border-slate-700"

}


`}


>


<input

type="radio"

value={value}

checked={
paymentMethod===value
}

onChange={(e)=>
setPaymentMethod(e.target.value)
}

className="hidden"

/>




<div

className="
w-12
h-12

rounded-2xl

bg-gradient-to-br

from-indigo-500

to-cyan-500

flex

items-center

justify-center

text-white

"

>

<Icon size={22}/>

</div>




<div>

<h3

className="
font-bold

dark:text-white

"

>

{ text }

</h3>


<p

className="
text-sm

text-slate-500

dark:text-slate-400

"

>

Secure & encrypted payment

</p>


</div>



</label>


))

}



</div>





<div

className="

mt-6

flex

items-center

gap-3

p-4

rounded-2xl

bg-emerald-50

dark:bg-emerald-900/20

border

border-emerald-200

dark:border-emerald-800

"

>


<ShieldCheck

className="
text-emerald-500

"

/>


<p

className="
text-emerald-700

dark:text-emerald-300

font-semibold

"

>

100% Secure Checkout

</p>


</div>





<button


disabled={loading}


className="

w-full

mt-8

py-4


rounded-2xl


font-black


text-white


bg-gradient-to-r


from-indigo-600

via-violet-600

to-cyan-500



hover:scale-[1.02]


transition


disabled:opacity-50


"


>


{

loading

?

"Processing Order..."

:

`Place Order ₹${total.toFixed(2)}`


}


</button>



</motion.form>










{/* RIGHT SIDE */}





<motion.div


initial={{
opacity:0,
x:40
}}

animate={{
opacity:1,
x:0
}}


className="
space-y-6

"


>



<CouponBox />





<div

className="

bg-white

dark:bg-slate-900


rounded-[40px]

p-8


shadow-xl


border

border-slate-200

dark:border-slate-800

"


>



<h2

className="
text-3xl

font-black

dark:text-white

mb-8

"

>

Order Summary

</h2>







{

cart.map((item)=>(



<div

key={item.id}

className="
flex
items-center

gap-4

mb-6

"

>


<img


src={item.image}


className="

w-20

h-20

object-contain


rounded-2xl


bg-slate-100


p-3


"

/>



<div

className="flex-1"

>


<h3

className="
font-bold

dark:text-white

line-clamp-2

"

>

{item.title}

</h3>


<p

className="
text-sm

text-slate-500

"

>

Qty : {item.quantity}

</p>


</div>



<p

className="
font-black

dark:text-white

"

>

₹{item.price*item.quantity}

</p>


</div>


))

}





<hr

className="
my-6

border-slate-200

dark:border-slate-700

"

/>






<div

className="
space-y-4

"

>


<div className="
flex
justify-between
text-slate-600
dark:text-slate-300
">

<span>
Subtotal
</span>

<span>
₹{subtotal.toFixed(2)}
</span>

</div>





<div className="
flex
justify-between
text-slate-600
dark:text-slate-300
">


<span>
Discount
</span>


<span>
- ₹{discount.toFixed(2)}
</span>


</div>





<div className="
flex
justify-between
text-slate-600
dark:text-slate-300
">


<span>
Shipping
</span>


<span>

{
shipping===0
?
"FREE"
:
`₹${shipping}`
}

</span>


</div>





<div className="
flex
justify-between
text-slate-600
dark:text-slate-300
">


<span>
Tax
</span>


<span>
₹{tax.toFixed(2)}
</span>


</div>






<hr

className="
my-5

border-slate-200

dark:border-slate-700

"

/>






<div

className="
flex

justify-between


text-3xl

font-black

dark:text-white

"

>


<span>
Total
</span>


<span>

₹{total.toFixed(2)}

</span>


</div>




</div>





</div>





</motion.div>







</div>





</div>





</section>


)


}



export default Checkout;