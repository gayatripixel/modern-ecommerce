import { Link } from "react-router-dom";
import { ShoppingCart, Trash2 } from "lucide-react";

import useCompareStore from "../store/compareStore";
import useCartStore from "../store/cartStore";

import toast from "react-hot-toast";

function Compare() {

const compare = useCompareStore(
(state)=>state.compare
);

const removeFromCompare = useCompareStore(
(state)=>state.removeFromCompare
);

const clearCompare = useCompareStore(
(state)=>state.clearCompare
);

const addToCart = useCartStore(
(state)=>state.addToCart
);

if(compare.length===0){

return(

<div className="min-h-screen flex flex-col items-center justify-center">

<h1 className="text-4xl font-black dark:text-white">

No Products Selected

</h1>

<Link

to="/products"

className="

mt-8
px-8
py-4

rounded-2xl

bg-indigo-600

text-white

font-bold

"

>

Browse Products

</Link>

</div>

)

}

return(

<section className="min-h-screen bg-slate-50 dark:bg-slate-950 py-24 px-6">

<div className="max-w-7xl mx-auto">

<div className="flex justify-between items-center mb-12">

<h1 className="text-5xl font-black dark:text-white">

Compare Products

</h1>

<button

onClick={clearCompare}

className="

px-5
py-3

rounded-xl

bg-red-500

text-white

font-semibold

"

>

Clear All

</button>

</div>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

{

compare.map((product)=>(

<div

key={product.id}

className="

bg-white

dark:bg-slate-900

rounded-3xl

border

p-6

shadow-xl

"

>

<img

src={product.image}

alt={product.title}

className="

h-52

w-full

object-contain

"

/>

<h2 className="mt-6 font-bold dark:text-white line-clamp-2">

{product.title}

</h2>

<p className="mt-4 text-indigo-600 font-black text-3xl">

₹{product.price}

</p>

<p className="mt-4 text-sm text-slate-500">

⭐ {product.rating?.rate}

</p>

<p className="mt-3 text-sm text-slate-500">

{product.category}

</p>

<button

onClick={()=>{

addToCart(product);

toast.success("Added To Cart");

}}

className="

mt-8

w-full

py-3

rounded-xl

bg-gradient-to-r

from-indigo-600

to-cyan-500

text-white

font-bold

flex

items-center

justify-center

gap-2

"

>

<ShoppingCart size={18}/>

Add To Cart

</button>

<button

onClick={()=>removeFromCompare(product.id)}

className="

mt-3

w-full

py-3

rounded-xl

border

text-red-500

flex

justify-center

items-center

gap-2

"

>

<Trash2 size={18}/>

Remove

</button>

</div>

))

}

</div>

</div>

</section>

)

}

export default Compare;