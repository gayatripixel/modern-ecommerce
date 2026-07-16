import { useParams, Link } from "react-router-dom";
import useOrderStore from "../store/orderStore";


function OrderDetails(){


const {id} = useParams();


const orders = useOrderStore(
(state)=>state.orders
);



const order = orders.find(
(order)=>order.id === Number(id)
);





if(!order){

return (

<section className="
min-h-screen
bg-gray-50
dark:bg-gray-950
flex
items-center
justify-center
px-6
">


<div className="
bg-white
dark:bg-gray-900
p-10
rounded-3xl
shadow-xl
text-center
">


<h1 className="
text-3xl
font-bold
text-black
dark:text-white
mb-5
">

Order Not Found

</h1>


<Link

to="/orders"

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

Back To Orders

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
max-w-6xl
mx-auto
">


<h1 className="
text-4xl
font-extrabold
text-black
dark:text-white
mb-10
">

Order Details 📦

</h1>





<div className="
bg-white
dark:bg-gray-900
rounded-3xl
shadow-xl
border
border-gray-200
dark:border-gray-800
p-8
">





{/* Header */}


<div className="
flex
flex-col
md:flex-row
justify-between
gap-5
mb-8
">


<div>

<p className="
text-gray-500
dark:text-gray-400
">

Order ID

</p>


<h2 className="
text-xl
font-bold
text-black
dark:text-white
">

#{order.id}

</h2>


</div>




<div>

<p className="
text-gray-500
dark:text-gray-400
">

Date

</p>


<p className="
font-semibold
text-black
dark:text-white
">

{order.date}

</p>


</div>





<div>

<p className="
text-gray-500
dark:text-gray-400
">

Status

</p>


<span className="
inline-block
mt-2
px-5
py-2
rounded-full
bg-green-100
text-green-700
font-semibold
">

{order.status || "Confirmed"}

</span>


</div>



</div>








{/* Products */}


<h2 className="
text-2xl
font-bold
text-black
dark:text-white
mb-5
">

Products

</h2>



<div className="
space-y-5
">


{

order.items.map(item=>(


<div

key={item.id}

className="
flex
items-center
gap-5
bg-gray-100
dark:bg-gray-800
rounded-2xl
p-5
"

>


<img

src={item.image}

alt={item.title}

className="
w-24
h-24
object-contain
rounded-xl
bg-white
p-2
"

/>



<div className="flex-1">


<h3 className="
font-bold
text-black
dark:text-white
">

{item.title}

</h3>


<p className="
text-gray-500
dark:text-gray-400
">

Quantity: {item.quantity}

</p>


</div>



<p className="
font-bold
text-black
dark:text-white
">

₹{item.price * item.quantity}

</p>



</div>


))

}


</div>








{/* Delivery */}


<div className="
grid
md:grid-cols-2
gap-8
mt-10
">



<div>

<h2 className="
text-xl
font-bold
text-black
dark:text-white
mb-3
">

Delivery Address

</h2>


<p className="
text-gray-600
dark:text-gray-400
">

{order.customer?.name}

</p>


<p className="
text-gray-600
dark:text-gray-400
">

{order.customer?.address}

</p>


<p className="
text-gray-600
dark:text-gray-400
">

{order.customer?.city}
-
{order.customer?.pincode}

</p>


</div>





<div>

<h2 className="
text-xl
font-bold
text-black
dark:text-white
mb-3
">

Payment

</h2>


<p className="
text-gray-600
dark:text-gray-400
">

Method:
{order.paymentMethod}

</p>


<h3 className="
text-3xl
font-extrabold
text-black
dark:text-white
mt-5
">

₹{order.total.toFixed(2)}

</h3>


</div>


</div>






</div>





<Link

to="/orders"

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
"

>

← Back To Orders

</Link>





</div>


</section>

)


}


export default OrderDetails;