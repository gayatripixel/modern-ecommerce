import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

import {
Search,
SlidersHorizontal,
X,
Sparkles
} from "lucide-react";

import { motion } from "framer-motion";

import { getProducts } from "../services/productService";

import ProductCard from "../components/product/ProductCard";
import ProductSkeleton from "../components/common/ProductSkeleton";

import SEO from "../components/common/SEO";



function Products(){



const [search,setSearch]=useState("");

const [category,setCategory]=useState("All");

const [sort,setSort]=useState("");





const categories=[

"All",

"electronics",

"jewelery",

"men's clothing",

"women's clothing"

];







const {
data:products=[],
isLoading,
error

}=useQuery({

queryKey:["products"],

queryFn:getProducts

});








let filteredProducts = products.filter(product=>{


const searchMatch =

product.title
.toLowerCase()
.includes(
search.toLowerCase()
);



const categoryMatch =

category==="All"

||

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



if(sort==="rating"){


filteredProducts.sort(

(a,b)=>

(b.rating?.rate || 0)

-

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

min-h-screen

bg-slate-50

dark:bg-slate-950

px-6

py-20

">


<div className="

max-w-7xl

mx-auto

grid

grid-cols-1

sm:grid-cols-2

lg:grid-cols-4

gap-8

">


{

Array.from({
length:8
})
.map((_,i)=>(


<ProductSkeleton

key={i}

/>


))

}


</div>


</section>


)


}







if(error){


return(

<h1

className="

text-center

py-20

text-red-500

text-2xl

"

>

Failed to load products

</h1>

)

}








return(

<>

<SEO

title="Products | Nexora"

description="
Explore premium products across multiple categories.
"

/>


<section

className="

min-h-screen

bg-slate-50

dark:bg-slate-950

px-6

pt-10

pb-20

"

>

<div

className="

max-w-7xl

mx-auto

"

>






{/* HEADER */}



<motion.div

initial={{
opacity:0,
y:30
}}

animate={{
opacity:1,
y:0
}}


className="

mb-12

"

>


<div

className="

flex

items-center

gap-2

text-indigo-600

font-bold

mb-4

"

>

<Sparkles size={20}/>

Premium Collection

</div>





<h1

className="

text-5xl

font-black


text-slate-900

dark:text-white

"

>

Explore

<span

className="

bg-gradient-to-r

from-indigo-600

via-violet-600

to-cyan-500

bg-clip-text

text-transparent

"

>

 Products

</span>


</h1>





<p

className="

mt-4

text-slate-500

dark:text-slate-400

text-lg

"

>

Discover premium products crafted for modern lifestyle.

</p>


</motion.div>









{/* FILTER CARD */}



<motion.div


initial={{
opacity:0,
scale:.95
}}


animate={{
opacity:1,
scale:1
}}



className="

bg-white/80

dark:bg-slate-900/80


backdrop-blur-xl


rounded-[32px]


p-6


border

border-slate-200

dark:border-slate-800


shadow-xl


"

>



<div

className="

flex

flex-col

lg:flex-row

gap-5

"

>







{/* SEARCH */}



<div

className="

relative

flex-1

"

>


<Search

className="

absolute

left-5

top-1/2

-translate-y-1/2

text-slate-400

"

/>



<input


type="text"


placeholder="Search premium products..."


value={search}


onChange={(e)=>
setSearch(e.target.value)
}



className="

w-full

pl-14

pr-5

py-4


rounded-2xl


bg-slate-100


dark:bg-slate-800


dark:text-white


outline-none


focus:ring-2

focus:ring-indigo-500


"


/>



</div>





{/* SORT */}



<select


value={sort}


onChange={(e)=>
setSort(e.target.value)
}



className="

px-6

py-4


rounded-2xl


bg-slate-100


dark:bg-slate-800


dark:text-white


outline-none


"

>


<option value="">

Sort Products

</option>


<option value="low">

Price Low → High

</option>


<option value="high">

Price High → Low

</option>


<option value="rating">

Top Rated

</option>


</select>





<button


onClick={clearFilters}


className="

flex

items-center

justify-center

gap-2


px-6

py-4


rounded-2xl


bg-slate-900


dark:bg-white


text-white


dark:text-black


font-bold


hover:scale-105


transition


"

>

<X size={18}/>

Clear

</button>




</div>







{/* CATEGORY PILLS */}



<div

className="

flex

flex-wrap

gap-3

mt-6

"

>


{

categories.map(cat=>(


<button


key={cat}


onClick={()=>
setCategory(cat)
}



className={`

px-5

py-2

rounded-full

font-semibold

transition


${

category===cat

?

"bg-indigo-600 text-white shadow-lg"

:

"bg-slate-100 dark:bg-slate-800 dark:text-white"

}

`}


>

{cat}

</button>


))

}



</div>



</motion.div>




{
search && (

<motion.div

initial={{
opacity:0,
y:-10
}}

animate={{
opacity:1,
y:0
}}

className="

mt-5

bg-white

dark:bg-slate-900


rounded-3xl


overflow-hidden


border

border-slate-200


dark:border-slate-800


shadow-xl


"


>


{

filteredProducts
.slice(0,5)
.map(product=>(


<Link


key={product.id}


to={`/product/${product.id}`}



className="

block

px-6

py-4


hover:bg-slate-100


dark:hover:bg-slate-800


text-slate-900


dark:text-white


transition


"


>


{product.title}


</Link>



))


}


</motion.div>


)

}









{/* PRODUCT GRID */}





{

filteredProducts.length===0 ?


(



<div

className="

mt-20

text-center

bg-white

dark:bg-slate-900


rounded-[40px]


p-16


border

border-slate-200


dark:border-slate-800


shadow-xl


"

>


<div

className="

text-6xl

mb-6

"

>

🔍

</div>



<h2

className="

text-3xl

font-black


dark:text-white

"

>

No Products Found

</h2>




<p

className="

mt-3

text-slate-500


dark:text-slate-400

"

>

Try changing your search or filters

</p>




<button


onClick={clearFilters}


className="

mt-8

px-8

py-3


rounded-full


bg-indigo-600


text-white


font-bold


hover:scale-105


transition


"

>


Reset Filters


</button>




</div>


)



:



(


<div


className="

grid

grid-cols-1

sm:grid-cols-2

lg:grid-cols-4


gap-8


mt-12


"

>


{

filteredProducts.map((product,index)=>(


<motion.div


key={product.id}


initial={{

opacity:0,

y:30

}}


animate={{

opacity:1,

y:0

}}



transition={{

delay:index*0.05

}}



>


<ProductCard

product={product}

/>


</motion.div>



))


}



</div>


)

}





</div>


</section>

</>

)


}


export default Products;