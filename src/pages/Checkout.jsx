import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import useCartStore from "../store/cartStore";
import useOrderStore from "../store/orderStore";

import toast from "react-hot-toast";

import CouponBox from "../components/checkout/CouponBox";
import useCouponStore from "../store/couponStore";


function Checkout() {


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



const [form,setForm] = useState({

name:"",
email:"",
phone:"",
address:"",
city:"",
pincode:""

});



const [paymentMethod,setPaymentMethod] = useState("COD");


const [loading,setLoading] = useState(false);






const handleChange=(e)=>{


setForm({

...form,

[e.target.name]:e.target.value

});


};





const subtotal = cart.reduce(
(total,item)=>
total + item.price * item.quantity,
0
);



const discount = coupon
?
(subtotal * coupon.discount)/100
:
0;



const shipping = subtotal > 300 ? 0 : 40;



const tax = (subtotal-discount)*0.18;



const total =
subtotal - discount + shipping + tax;







const handlePayment = async(e)=>{


e.preventDefault();



if(
!form.name ||
!form.email ||
!form.phone ||
!form.address
){

toast.error("Please fill required details");

return;

}



setLoading(true);



try{


await new Promise(
(resolve)=>
setTimeout(resolve,1500)
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

catch(error){

console.log(error);

toast.error("Something went wrong");

}

finally{

setLoading(false);

}



};







if(cart.length===0){


return (

<section className="
min-h-screen
flex
items-center
justify-center
bg-gray-50
dark:bg-gray-950
px-6
">


<div className="
bg-white
dark:bg-gray-900
rounded-3xl
shadow-xl
p-10
text-center
">


<h1 className="
text-3xl
font-bold
text-black
dark:text-white
mb-6
">

Cart is Empty 🛒

</h1>


<Link

to="/products"

className="
bg-black
dark:bg-white
text-white
dark:text-black
px-8
py-3
rounded-full
font-semibold
"

>

Continue Shopping

</Link>


</div>


</section>


)

}







return (

<section className="
min-h-screen
bg-gray-50
dark:bg-gray-950
px-6
py-20
">


<div className="
max-w-7xl
mx-auto
">


<h1 className="
text-4xl
font-extrabold
text-black
dark:text-white
mb-10
">

Checkout

</h1>




<div className="
grid
lg:grid-cols-2
gap-10
">





{/* FORM */}



<form

onSubmit={handlePayment}

className="
bg-white
dark:bg-gray-900
rounded-3xl
shadow-xl
p-8
border
border-gray-200
dark:border-gray-800
"

>


<h2 className="
text-2xl
font-bold
mb-8
text-black
dark:text-white
">

Shipping Details

</h2>





{

[

["name","Full Name"],

["email","Email"],

["phone","Phone"],

["address","Address"],

["city","City"],

["pincode","Pincode"]

].map(([name,label])=>(


<div
key={name}
className="mb-5"
>


<label className="
block
mb-2
font-semibold
text-gray-700
dark:text-gray-300
">

{label}

</label>



<input

name={name}

value={form[name]}

onChange={handleChange}

placeholder={label}

className="
w-full
px-5
py-3
rounded-xl
border
bg-white
dark:bg-gray-800
text-black
dark:text-white
border-gray-300
dark:border-gray-700
outline-none
focus:ring-2
focus:ring-black
"

/>



</div>


))


}







<h2 className="
text-2xl
font-bold
mt-8
mb-5
text-black
dark:text-white
">

Payment

</h2>





{

[

["COD","💵 Cash On Delivery"],

["UPI","📱 UPI Payment"],

["CARD","💳 Card Payment"]

].map(([value,text])=>(


<label

key={value}

className={`
flex
gap-4
items-center
p-4
rounded-xl
border
cursor-pointer
mb-3

${
paymentMethod===value
?
"border-black dark:border-white"
:
"border-gray-300 dark:border-gray-700"
}

`}

>


<input

type="radio"

value={value}

checked={paymentMethod===value}

onChange={(e)=>
setPaymentMethod(e.target.value)
}

/>


<span className="
text-gray-700
dark:text-gray-300
">

{text}

</span>


</label>


))

}





<button

disabled={loading}

className="
w-full
mt-8
py-4
rounded-xl
bg-black
dark:bg-white
text-white
dark:text-black
font-bold
hover:scale-105
transition
disabled:opacity-50
"

>

{
loading
?
"Processing..."
:
`Place Order ₹${total.toFixed(2)}`
}


</button>



</form>









{/* SUMMARY */}



<div className="
space-y-6
">



<CouponBox />



<div className="
bg-white
dark:bg-gray-900
rounded-3xl
shadow-xl
p-8
border
border-gray-200
dark:border-gray-800
h-fit
">


<h2 className="
text-2xl
font-bold
mb-8
text-black
dark:text-white
">

Order Summary

</h2>





{

cart.map(item=>(


<div
key={item.id}
className="
flex
gap-4
mb-5
items-center
"
>


<img

src={item.image}

className="
w-20
h-20
object-contain
rounded-xl
bg-gray-100
p-2
"

/>


<div className="flex-1">


<h3 className="
font-semibold
text-black
dark:text-white
line-clamp-2
">

{item.title}

</h3>


<p className="
text-gray-500
dark:text-gray-400
">

Qty: {item.quantity}

</p>


</div>


<p className="
font-bold
text-black
dark:text-white
">

₹{item.price*item.quantity}

</p>



</div>


))


}






<hr className="
my-6
border-gray-300
dark:border-gray-700
"/>




<div className="space-y-3">


<div className="flex justify-between text-gray-600 dark:text-gray-300">

<span>Subtotal</span>

<span>₹{subtotal.toFixed(2)}</span>

</div>




<div className="flex justify-between text-gray-600 dark:text-gray-300">

<span>Discount</span>

<span>
- ₹{discount.toFixed(2)}
</span>

</div>




<div className="flex justify-between text-gray-600 dark:text-gray-300">

<span>Shipping</span>

<span>
{shipping===0?"FREE":`₹${shipping}`}
</span>

</div>



<div className="flex justify-between text-gray-600 dark:text-gray-300">

<span>Tax</span>

<span>
₹{tax.toFixed(2)}
</span>

</div>




<hr className="
my-5
border-gray-300
dark:border-gray-700
"/>



<div className="
flex
justify-between
text-2xl
font-bold
text-black
dark:text-white
">


<span>Total</span>


<span>
₹{total.toFixed(2)}
</span>


</div>



</div>



</div>



</div>






</div>


</div>


</section>


)

}



export default Checkout;