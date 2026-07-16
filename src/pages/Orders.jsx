import { Link } from "react-router-dom";
import useOrderStore from "../store/orderStore";


function Orders(){

  const orders = useOrderStore(
    (state)=>state.orders
  );


  return (

<section
className="
min-h-screen
bg-gray-50
dark:bg-gray-950
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



<h1
className="
text-4xl
md:text-5xl
font-extrabold
text-black
dark:text-white
mb-12
"
>

My Orders 📦

</h1>





{
orders.length === 0 ?


(

<div
className="
bg-white
dark:bg-gray-900
rounded-3xl
p-12
text-center
shadow-xl
border
border-gray-200
dark:border-gray-800
"
>


<h2
className="
text-3xl
font-bold
text-black
dark:text-white
"
>

No Orders Yet 🛒

</h2>



<p
className="
mt-4
text-gray-500
dark:text-gray-400
"
>

Start shopping and your orders will appear here.

</p>



<Link

to="/products"

className="
inline-block
mt-8
bg-black
dark:bg-white
text-white
dark:text-black
px-8
py-3
rounded-full
font-semibold
hover:scale-105
transition
"

>

Continue Shopping

</Link>



</div>

)


:


<div
className="
space-y-10
"
>


{
orders.map((order)=>(


<div

key={order.id}

className="
bg-white
dark:bg-gray-900
rounded-3xl
shadow-xl
border
border-gray-200
dark:border-gray-800
p-6
md:p-8
hover:shadow-2xl
transition
"

>


{/* HEADER */}

<div
className="
grid
md:grid-cols-3
gap-6
pb-6
border-b
border-gray-200
dark:border-gray-700
"
>



<div>

<p
className="
text-sm
text-gray-500
dark:text-gray-400
"
>

Order ID

</p>


<h2
className="
font-bold
text-lg
text-black
dark:text-white
"
>

#{order.id}

</h2>

</div>




<div>

<p
className="
text-sm
text-gray-500
dark:text-gray-400
"
>

Order Date

</p>


<p
className="
font-semibold
text-black
dark:text-white
"
>

{order.date}

</p>


</div>




<div>


<p
className="
text-sm
text-gray-500
dark:text-gray-400
"
>

Status

</p>


<span
className="
inline-flex
mt-2
px-4
py-1
rounded-full
text-sm
font-semibold
bg-green-100
dark:bg-green-900
text-green-700
dark:text-green-300
"
>

{order.status || "Confirmed"}

</span>


</div>


</div>








{/* PRODUCTS */}


<div
className="
mt-6
space-y-4
"
>


{
order.items.map((item)=>(


<div

key={item.id}

className="
flex
items-center
gap-5
bg-gray-100
dark:bg-gray-800
rounded-2xl
p-4
hover:scale-[1.01]
transition
"

>



<img

src={item.image}

alt={item.title}

className="
w-20
h-20
object-contain
rounded-xl
bg-white
p-2
"

/>




<div
className="
flex-1
"
>


<h3
className="
font-bold
text-black
dark:text-white
line-clamp-2
"
>

{item.title}

</h3>



<p
className="
text-gray-500
dark:text-gray-400
mt-1
"
>

Quantity: {item.quantity}

</p>


</div>





<p
className="
font-bold
text-black
dark:text-white
"
>

₹{(item.price * item.quantity).toFixed(2)}

</p>



</div>


))


}


</div>







{/* FOOTER */}


<div
className="
mt-8
pt-6
border-t
border-gray-200
dark:border-gray-700
grid
md:grid-cols-2
gap-8
"
>




<div>

<h3
className="
font-bold
text-black
dark:text-white
mb-3
"
>

Delivery Details 🚚

</h3>


<p className="text-gray-600 dark:text-gray-400">
{order.customer?.name}
</p>


<p className="text-gray-600 dark:text-gray-400">
{order.customer?.address}
</p>


<p className="text-gray-600 dark:text-gray-400">
{order.customer?.city} - {order.customer?.pincode}
</p>


</div>






<div
className="
md:text-right
"
>


<p
className="
text-gray-600
dark:text-gray-400
"
>

Payment:
{" "}
{order.paymentMethod || "COD"}

</p>



<h2
className="
text-3xl
font-extrabold
text-black
dark:text-white
mt-4
"
>

₹{Number(order.total || 0).toFixed(2)}

</h2>




<Link

to={`/orders/${order.id}`}

className="
inline-block
mt-5
bg-black
dark:bg-white
text-white
dark:text-black
px-7
py-3
rounded-full
font-semibold
hover:scale-105
transition
"

>

View Details

</Link>



</div>



</div>



</div>



))

}


</div>


}



</div>


</section>


  )

}


export default Orders;