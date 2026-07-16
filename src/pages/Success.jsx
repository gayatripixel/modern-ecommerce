import { Link } from "react-router-dom";
import useOrderStore from "../store/orderStore";


function Success(){


const orders = useOrderStore(
(state)=>state.orders
);


const latestOrder = orders[orders.length - 1];



if(!latestOrder){

return (

<section className="
min-h-screen
flex
items-center
justify-center
bg-gray-50
dark:bg-gray-950
">


<div className="
text-center
">


<h1 className="
text-3xl
font-bold
text-black
dark:text-white
">

No Order Found

</h1>


<Link

to="/products"

className="
inline-block
mt-6
bg-black
text-white
px-8
py-3
rounded-full
"

>

Shop Now

</Link>


</div>


</section>

)

}



return (

<section
className="
min-h-screen
flex
items-center
justify-center
bg-gray-50
dark:bg-gray-950
px-6
py-20
"
>



<div

className="
max-w-xl
w-full
bg-white
dark:bg-gray-900
rounded-3xl
shadow-xl
p-10
border
border-gray-200
dark:border-gray-800
"

>



<div

className="
w-24
h-24
mx-auto
rounded-full
bg-green-500
flex
items-center
justify-center
text-white
text-5xl
mb-8
animate-bounce
"

>

✓

</div>





<h1

className="
text-4xl
font-extrabold
text-center
text-black
dark:text-white
"

>

Order Confirmed 🎉

</h1>




<p

className="
text-center
text-gray-500
dark:text-gray-400
mt-4
"

>

Thank you for shopping with Nexora.

</p>





<div

className="
mt-8
bg-gray-100
dark:bg-gray-800
rounded-2xl
p-6
space-y-4
"

>


<div className="flex justify-between">

<span className="text-gray-500">
Order ID
</span>


<span className="font-bold text-black dark:text-white">

#{latestOrder.id}

</span>


</div>



<div className="flex justify-between">

<span className="text-gray-500">
Date
</span>


<span className="font-semibold text-black dark:text-white">

{latestOrder.date}

</span>


</div>




<div className="flex justify-between">

<span className="text-gray-500">
Payment
</span>


<span className="font-semibold text-black dark:text-white">

{latestOrder.paymentMethod || "COD"}

</span>


</div>




<hr className="border-gray-300 dark:border-gray-700"/>




<div className="flex justify-between text-xl font-bold">

<span className="text-black dark:text-white">
Total
</span>


<span className="text-black dark:text-white">

₹{latestOrder.total.toFixed(2)}

</span>


</div>



</div>





<h2 className="
text-xl
font-bold
mt-8
mb-4
text-black
dark:text-white
">

Items

</h2>



<div className="space-y-3">


{
latestOrder.items.map((item)=>(


<div

key={item.id}

className="
flex
justify-between
bg-gray-50
dark:bg-gray-800
p-4
rounded-xl
"


>


<span className="
text-sm
text-black
dark:text-white
"

>

{item.title}

</span>



<span className="
font-semibold
text-black
dark:text-white
"

>

x{item.quantity}

</span>



</div>


))

}


</div>






<div className="
flex
flex-col
gap-4
mt-8
">


<Link

to="/products"

className="
bg-black
dark:bg-white
text-white
dark:text-black
text-center
py-3
rounded-xl
font-semibold
hover:scale-105
transition
"

>

Continue Shopping

</Link>



<Link

to="/orders"

className="
border
border-black
dark:border-white
text-center
py-3
rounded-xl
text-black
dark:text-white
hover:bg-black
hover:text-white
dark:hover:bg-white
dark:hover:text-black
transition
"

>

View My Orders

</Link>



</div>





</div>


</section>


)


}


export default Success;