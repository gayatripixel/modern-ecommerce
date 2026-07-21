import {
  Edit,
  Trash2,
  Plus,
  Search
} from "lucide-react";

import { useState } from "react";
import { motion } from "framer-motion";


function ProductTable({
  products,
  onEdit,
  onDelete,
  onAdd
}) {


const [search,setSearch]=useState("");

const [category,setCategory]=useState("All");

const [sort,setSort]=useState("");

const [page,setPage]=useState(1);



const itemsPerPage=8;



const categories=[
"All",
...new Set(
products.map(
(product)=>product.category
)
)
];





let filteredProducts = products.filter((product)=>{


const searchMatch =
product.title
.toLowerCase()
.includes(
search.toLowerCase()
);


const categoryMatch =
category==="All" ||
product.category===category;



return searchMatch && categoryMatch;


});





if(sort==="low"){

filteredProducts.sort(
(a,b)=>a.price-b.price
);

}



if(sort==="high"){

filteredProducts.sort(
(a,b)=>b.price-a.price
);

}





const totalPages =
Math.ceil(
filteredProducts.length/itemsPerPage
);



const currentProducts =
filteredProducts.slice(
(page-1)*itemsPerPage,
page*itemsPerPage
);





return (

<motion.div

initial={{
opacity:0,
y:40
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:.5
}}

className="
mt-12

rounded-[35px]

overflow-hidden

border

border-slate-200
dark:border-slate-800

bg-white/70
dark:bg-slate-900/70

backdrop-blur-xl

shadow-2xl

"

>



{/* HEADER */}


<div

className="
p-8

flex

flex-col

md:flex-row

justify-between

gap-5

items-center

border-b

border-slate-200

dark:border-slate-800

"

>


<div>


<h2

className="
text-3xl

font-black

text-slate-900

dark:text-white

"

>

Product Management

</h2>


<p

className="
text-slate-500

dark:text-slate-400

mt-2

"

>

Manage your store products

</p>


</div>





<button

onClick={onAdd}

className="
flex
items-center
gap-2

px-7
py-3

rounded-2xl

bg-gradient-to-r

from-indigo-600
via-purple-600
to-cyan-500

text-white

font-bold

shadow-lg

hover:scale-105

transition

"

>

<Plus size={18}/>

Add Product

</button>


</div>







{/* FILTERS */}


<div

className="
p-8

grid

md:grid-cols-3

gap-5

"

>



<div
className="
relative
"
>


<Search

className="
absolute
left-4
top-3.5
text-slate-400
"

/>


<input

value={search}

onChange={(e)=>{

setSearch(e.target.value);
setPage(1);

}}

placeholder="Search Product..."

className="
w-full

pl-12

px-5

py-3

rounded-2xl

border

bg-white

dark:bg-slate-800

dark:text-white

border-slate-300

dark:border-slate-700

outline-none

focus:ring-2

focus:ring-indigo-500

"

/>


</div>







<select

value={category}

onChange={(e)=>{

setCategory(e.target.value);
setPage(1);

}}

className="
px-5
py-3

rounded-2xl

border

bg-white

dark:bg-slate-800

dark:text-white

border-slate-300

dark:border-slate-700

"

>

{
categories.map(cat=>(

<option key={cat}>

{cat}

</option>

))
}


</select>







<select

value={sort}

onChange={(e)=>setSort(e.target.value)}

className="
px-5
py-3

rounded-2xl

border

bg-white

dark:bg-slate-800

dark:text-white

border-slate-300

dark:border-slate-700

"

>


<option value="">

Sort Price

</option>


<option value="low">

Low To High

</option>


<option value="high">

High To Low

</option>


</select>




</div>









{/* TABLE */}



<div className="overflow-x-auto">


<table className="w-full">


<thead

className="
bg-slate-100

dark:bg-slate-800

"

>


<tr>


{
[
"Image",
"Product",
"Category",
"Price",
"Actions"
].map(head=>(

<th

key={head}

className="
p-5
text-left

text-sm

font-bold

text-slate-600

dark:text-slate-300

"

>

{head}

</th>


))

}


</tr>


</thead>





<tbody>


{

currentProducts.length===0 ?


<tr>

<td

colSpan="5"

className="
text-center

py-20

text-slate-500

"

>

No Products Found

</td>

</tr>


:


currentProducts.map(
(product,index)=>(


<motion.tr


key={product.id}

initial={{
opacity:0,
y:20
}}

animate={{
opacity:1,
y:0
}}

transition={{
delay:index*.05
}}


className="
border-b

border-slate-200

dark:border-slate-800

hover:bg-slate-100/50

dark:hover:bg-slate-800/50

transition

"


>


<td className="p-5">


<img

src={product.image}

alt={product.title}

className="
w-16
h-16

object-contain

rounded-2xl

bg-slate-100

dark:bg-slate-800

p-2

"

/>


</td>





<td

className="
p-5

font-bold

text-slate-900

dark:text-white

max-w-xs

"

>

{product.title}

</td>






<td

className="
p-5

text-slate-600

dark:text-slate-300

"

>

{product.category}

</td>







<td

className="
p-5

font-black

text-indigo-600

dark:text-cyan-400

"

>

₹{product.price}

</td>






<td className="p-5">


<div className="
flex
gap-3
">


<button

onClick={()=>onEdit(product)}

className="
p-3

rounded-xl

bg-indigo-100

dark:bg-indigo-900/40

text-indigo-600

dark:text-indigo-300

hover:scale-110

transition

"

>

<Edit size={18}/>

</button>







<button

onClick={()=>{

if(
window.confirm(
"Delete this product?"
)
)

{

onDelete(product.id);

}

}}

className="
p-3

rounded-xl

bg-red-100

dark:bg-red-900/40

text-red-600

dark:text-red-300

hover:scale-110

transition

"

>

<Trash2 size={18}/>

</button>


</div>


</td>




</motion.tr>


)

)


}



</tbody>


</table>


</div>








{/* PAGINATION */}



{

totalPages>1 &&


<div

className="
flex

justify-center

gap-3

p-8

"

>


{

Array.from({
length:totalPages
})
.map((_,index)=>(


<button

key={index}

onClick={()=>setPage(index+1)}

className={`
w-10
h-10

rounded-full

font-bold

transition

${
page===index+1

?

"bg-gradient-to-r from-indigo-600 to-purple-600 text-white"

:

"bg-slate-200 dark:bg-slate-800 dark:text-white"

}

`}

>

{index+1}

</button>


))


}



</div>


}



</motion.div>


)

}


export default ProductTable;