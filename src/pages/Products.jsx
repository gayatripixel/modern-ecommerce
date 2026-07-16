import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

import { getProducts } from "../services/productService";

import ProductCard from "../components/product/ProductCard";
import ProductSkeleton from "../components/common/ProductSkeleton";


function Products() {


const [search,setSearch] = useState("");

const [category,setCategory] = useState("All");

const [sort,setSort] = useState("");



const categories = [
"All",
"electronics",
"jewelery",
"men's clothing",
"women's clothing"
];



const {
data: products=[],
isLoading,
error

}=useQuery({

queryKey:["products"],

queryFn:getProducts

});





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


filteredProducts=[...filteredProducts].sort(
(a,b)=>a.price-b.price
);


}



if(sort==="high"){


filteredProducts=[...filteredProducts].sort(
(a,b)=>b.price-a.price
);


}



if(sort==="rating"){


filteredProducts=[...filteredProducts].sort(
(a,b)=>
(b.rating?.rate || 0) -
(a.rating?.rate || 0)
);


}







const clearFilters=()=>{

setSearch("");

setCategory("All");

setSort("");

};








if(isLoading){


return(

<section className="
max-w-7xl
mx-auto
px-6
py-20
">


<div className="
grid
grid-cols-1
sm:grid-cols-2
md:grid-cols-4
gap-8
">


{
Array.from({length:8})
.map((_,index)=>(

<ProductSkeleton
key={index}
/>

))
}


</div>


</section>

)

}






if(error){


return(

<h1 className="
text-center
text-red-500
py-20
">

Failed to load products

</h1>

)

}







return(


<section className="
max-w-7xl
mx-auto
px-6
py-20
bg-gray-50
dark:bg-gray-950
min-h-screen
">


<h1 className="
text-4xl
font-bold
mb-10
text-black
dark:text-white
">

All Products

</h1>







{/* FILTER BOX */}


<div className="
bg-white
dark:bg-gray-900
p-6
rounded-3xl
shadow-lg
border
border-gray-200
dark:border-gray-800
">





<div className="
flex
flex-col
md:flex-row
gap-5
">





{/* SEARCH */}


<input


type="text"

placeholder="Search products..."

value={search}

onChange={(e)=>setSearch(e.target.value)}


className="
flex-1
border
rounded-full
px-6
py-3
outline-none
bg-white
dark:bg-gray-800
dark:text-white
border-gray-300
dark:border-gray-700
"





/>






{/* CATEGORY */}


<select


value={category}

onChange={(e)=>setCategory(e.target.value)}


className="
border
rounded-full
px-6
py-3
bg-white
dark:bg-gray-800
dark:text-white
border-gray-300
dark:border-gray-700
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







{/* SORT */}


<select


value={sort}

onChange={(e)=>setSort(e.target.value)}


className="
border
rounded-full
px-6
py-3
bg-white
dark:bg-gray-800
dark:text-white
border-gray-300
dark:border-gray-700
"


>


<option value="">

Sort By

</option>


<option value="low">

Price Low To High

</option>


<option value="high">

Price High To Low

</option>


<option value="rating">

Highest Rated

</option>


</select>








<button

onClick={clearFilters}


className="
bg-black
dark:bg-white
text-white
dark:text-black
px-6
py-3
rounded-full
font-semibold
"

>

Clear

</button>






</div>





</div>







{/* SEARCH SUGGESTION */}



{
search && (

<div className="
bg-white
dark:bg-gray-900
rounded-2xl
shadow-xl
mt-4
overflow-hidden
">


{
filteredProducts
.slice(0,5)
.map((product)=>(


<Link

key={product.id}

to={`/product/${product.id}`}


className="
block
px-5
py-4
hover:bg-gray-100
dark:hover:bg-gray-800
text-black
dark:text-white
"


>

{product.title}


</Link>


))


}



</div>

)

}








{/* PRODUCTS GRID */}



{
filteredProducts.length===0 ?


(

<div className="
text-center
py-20
">


<h2 className="
text-3xl
font-bold
text-black
dark:text-white
">

No Products Found

</h2>


<p className="
text-gray-500
mt-3
">

Try changing filters

</p>


</div>

)


:

(


<div className="
grid
grid-cols-1
sm:grid-cols-2
md:grid-cols-4
gap-8
mt-12
">


{

filteredProducts.map((product)=>(


<ProductCard

key={product.id}

product={product}

/>


))


}


</div>


)

}







</section>


)


}


export default Products;