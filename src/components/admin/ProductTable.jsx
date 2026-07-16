import {
  Edit,
  Trash2,
  Plus
} from "lucide-react";

import { useState } from "react";


function ProductTable({
  products,
  onEdit,
  onDelete,
  onAdd
}) {


const [search,setSearch] = useState("");

const [category,setCategory] = useState("All");

const [sort,setSort] = useState("");

const [page,setPage] = useState(1);



const itemsPerPage = 8;



const categories = [
"All",
...new Set(products.map(
(product)=>product.category
))
];





let filteredProducts = products.filter((product)=>{


const searchMatch =
product.title
.toLowerCase()
.includes(search.toLowerCase());


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

<div
className="
mt-10
bg-white
dark:bg-gray-900
rounded-3xl
shadow-xl
border
border-gray-200
dark:border-gray-800
overflow-hidden
"
>





{/* Header */}

<div
className="
p-6
flex
flex-col
md:flex-row
justify-between
gap-5
md:items-center
border-b
border-gray-200
dark:border-gray-800
"
>


<h2
className="
text-2xl
font-bold
text-black
dark:text-white
"
>

Product Management

</h2>




<button

onClick={onAdd}

className="
flex
items-center
justify-center
gap-2
bg-black
dark:bg-white
text-white
dark:text-black
px-6
py-3
rounded-full
font-semibold
hover:scale-105
transition
"

>

<Plus size={18}/>

Add Product

</button>


</div>









{/* Filters */}

<div
className="
p-6
grid
md:grid-cols-3
gap-5
"
>



<input

value={search}

onChange={(e)=>{

setSearch(e.target.value);
setPage(1);

}}

placeholder="Search Product..."

className="
border
rounded-full
px-5
py-3
bg-white
dark:bg-gray-800
dark:text-white
outline-none
"

/>






<select

value={category}

onChange={(e)=>{

setCategory(e.target.value);
setPage(1);

}}

className="
border
rounded-full
px-5
py-3
bg-white
dark:bg-gray-800
dark:text-white
"

>


{
categories.map((cat)=>(

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
border
rounded-full
px-5
py-3
bg-white
dark:bg-gray-800
dark:text-white
"

>

<option value="">
Sort By Price
</option>

<option value="low">
Low To High
</option>

<option value="high">
High To Low
</option>


</select>





</div>









<div className="overflow-x-auto">


<table
className="
w-full
"
>


<thead
className="
bg-gray-100
dark:bg-gray-800
text-gray-700
dark:text-gray-300
"
>


<tr>


<th className="p-5 text-left">
Image
</th>


<th className="p-5 text-left">
Product
</th>


<th className="p-5 text-left">
Category
</th>


<th className="p-5 text-left">
Price
</th>


<th className="p-5 text-left">
Actions
</th>


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
text-gray-500
dark:text-gray-400
"
>

No Products Found

</td>

</tr>


:


currentProducts.map((product)=>(


<tr

key={product.id}

className="
border-b
border-gray-200
dark:border-gray-800
hover:bg-gray-50
dark:hover:bg-gray-800
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
rounded-xl
bg-gray-100
p-2
"

/>


</td>





<td className="
p-5
font-semibold
text-black
dark:text-white
">

{product.title}

</td>






<td className="
p-5
text-gray-600
dark:text-gray-300
">

{product.category}

</td>





<td className="
p-5
font-bold
text-black
dark:text-white
">

₹{product.price}

</td>






<td className="p-5">


<div className="flex gap-3">


<button

onClick={()=>onEdit(product)}

className="
p-3
rounded-xl
bg-blue-100
dark:bg-blue-900
text-blue-600
dark:text-blue-300
"

>

<Edit size={18}/>

</button>






<button

onClick={()=>{

if(window.confirm("Delete this product?")){

onDelete(product.id);

}

}}

className="
p-3
rounded-xl
bg-red-100
dark:bg-red-900
text-red-600
dark:text-red-300
"

>

<Trash2 size={18}/>

</button>


</div>


</td>



</tr>


))


}



</tbody>


</table>


</div>








{/* Pagination */}


{
totalPages > 1 &&


<div
className="
flex
justify-center
gap-3
p-6
"
>


{

Array.from({
length:totalPages
}).map((_,index)=>(


<button

key={index}

onClick={()=>setPage(index+1)}

className={`
px-4
py-2
rounded-full
font-semibold
${
page===index+1
?
"bg-black text-white dark:bg-white dark:text-black"
:
"bg-gray-200 dark:bg-gray-800 dark:text-white"
}
`}

>

{index+1}

</button>


))


}


</div>


}



</div>


)

}


export default ProductTable;