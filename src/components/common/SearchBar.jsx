import { useState } from "react";

import { Search } from "lucide-react";

import { useQuery } from "@tanstack/react-query";

import { getProducts } from "../../services/productService";

import { motion, AnimatePresence } from "framer-motion";

import { useNavigate } from "react-router-dom";

import useActivityStore from "../../store/activityStore";

function SearchBar(){


const [search,setSearch]=useState("");

const navigate = useNavigate();



const {
data:products=[]
}=useQuery({

queryKey:["products"],

queryFn:getProducts

});





const filteredProducts = products.filter(product=>

product.title
.toLowerCase()
.includes(search.toLowerCase())

).slice(0,5);


const addSearch =
useActivityStore(
state=>state.addSearch
);



return(


<div

className="

relative

w-full

max-w-md

"

>


<div

className="

flex

items-center

gap-3

bg-slate-100

dark:bg-slate-800


rounded-full


px-5

py-3

"

>


<Search

size={20}

className="

text-slate-500

"

/>



<input


value={search}


onChange={(e)=>setSearch(e.target.value)}


placeholder="Search products..."


className="

bg-transparent

outline-none

w-full

dark:text-white

"




/>



</div>







<AnimatePresence>


{

search &&


<motion.div


initial={{

opacity:0,

y:10

}}


animate={{

opacity:1,

y:0

}}


exit={{

opacity:0,

y:10

}}



className="

absolute

top-16

left-0

right-0

bg-white

dark:bg-slate-900


rounded-3xl


shadow-2xl


border

border-slate-200

dark:border-slate-700


overflow-hidden


z-50


"

>



{

filteredProducts.length===0

?

(

<p

className="

p-6

text-center

text-slate-500

"

>

No products found 😔

</p>

)

:

filteredProducts.map(product=>(



<button


key={product.id}

onClick={()=>{

addSearch(search);

navigate(`/product/${product.id}`);

setSearch("");

window.scrollTo(0,0);


}}



className="

w-full

flex

items-center

gap-4

p-4


hover:bg-slate-100

dark:hover:bg-slate-800


transition

"

>


<img

src={product.image}

className="

w-14

h-14

object-contain

"

/>



<div

className="

text-left

"

>


<h3

className="

font-bold

dark:text-white

line-clamp-1

"

>

{product.title}

</h3>



<p

className="

text-indigo-600

font-bold

"

>

₹{product.price}

</p>


</div>


</button>


))


}




</motion.div>


}


</AnimatePresence>





</div>


)

}


export default SearchBar;