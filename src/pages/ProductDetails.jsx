import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { getProducts } from "../services/productService";

import useCartStore from "../store/cartStore";
import useWishlistStore from "../store/wishlistStore";

import toast from "react-hot-toast";
import useRecentStore from "../store/recentStore";
import { useEffect } from "react";
import RecentlyViewed from "../components/product/RecentlyViewed";
import Reviews from "../components/product/Reviews";

function ProductDetails() {


  const { id } = useParams();

  const navigate = useNavigate();


  const { addToCart } = useCartStore();

  const { addToWishlist } = useWishlistStore();

  const addRecentlyViewed = useRecentStore(
   (state) => state.addRecentlyViewed
  );


  const [quantity,setQuantity] = useState(1);

  const {
    data: products = [],
    isLoading,
    error

  } = useQuery({

    queryKey:["products"],

    queryFn:getProducts

  });



  const product = products.find(
    (item)=> item.id === Number(id)
  );

  useEffect(()=>{

  if(product){

    addRecentlyViewed(product);

  }

},[product, addRecentlyViewed]);


 const relatedProducts = products.filter(
  (item)=>
    item.category === product?.category &&
    item.id !== product?.id
 ); 



  if(isLoading){

    return(
      <h1 className="text-center text-3xl py-20">
        Loading Product...
      </h1>
    )

  }



  if(error){

    return(
      <h1 className="text-center text-red-500 py-20">
        Failed to load product
      </h1>
    )

  }



  if(!product){

    return(
      <h1 className="text-center text-3xl py-20">
        Product Not Found
      </h1>
    )

  }





  const handleCart = ()=>{


    addToCart({

      ...product,

      quantity

    });


    toast.success("Added to cart 🛒");


  };





  const handleWishlist = ()=>{


   addToWishlist(product);


  };






return (

<section className="
max-w-7xl 
mx-auto 
px-6 
py-20
bg-gray-50
dark:bg-gray-950
min-h-screen
">


<div className="
grid 
md:grid-cols-2 
gap-16
items-center
">





{/* IMAGE */}


<div className="
bg-white
dark:bg-gray-900
rounded-3xl
p-10
shadow-xl
flex
justify-center
">


<img

src={product.image}

alt={product.title}

className="
w-full
max-w-md
h-[450px]
object-contain
rounded-2xl
"

/>


</div>







{/* DETAILS */}


<div>



<p className="
uppercase
tracking-widest
text-sm
text-gray-500
dark:text-gray-400
">

{product.category}

</p>





<h1 className="
text-4xl
md:text-5xl
font-extrabold
mt-4
text-black
dark:text-white
leading-tight
">

{product.title}

</h1>







<div className="flex items-center gap-3 mt-5">


<span className="text-yellow-500 text-xl">

{"★".repeat(
Math.round(product.rating?.rate || 5)
)}

{"☆".repeat(
5-Math.round(product.rating?.rate || 5)
)}

</span>


<span className="
text-gray-500
dark:text-gray-400
">

({product.rating?.count || 0} Reviews)

</span>


</div>








<h2 className="
text-4xl
font-bold
mt-8
text-black
dark:text-white
">

₹{product.price}

</h2>







<p className="
mt-6
leading-8
text-gray-600
dark:text-gray-300
">

{product.description}

</p>








<div className="
mt-8
space-y-3
text-gray-700
dark:text-gray-300
">


<p>✅ In Stock</p>

<p>🚚 Free Delivery</p>

<p>🔄 7 Days Return</p>

<p>🔒 Secure Payment</p>


</div>









{/* Quantity */}



<div className="
mt-8
flex
items-center
gap-6
">


<div className="
flex
items-center
border
dark:border-gray-700
rounded-full
overflow-hidden
bg-white
dark:bg-gray-900
">


<button

onClick={()=>
setQuantity(
quantity>1 ? quantity-1 : 1
)
}

className="
px-5
py-3
text-xl
dark:text-white
hover:bg-gray-100
dark:hover:bg-gray-800
"

>
-
</button>



<span className="
px-5
font-semibold
dark:text-white
">

{quantity}

</span>



<button

onClick={()=>setQuantity(quantity+1)}

className="
px-5
py-3
text-xl
dark:text-white
hover:bg-gray-100
dark:hover:bg-gray-800
"

>
+
</button>


</div>





<button

onClick={handleCart}

className="
bg-black
dark:bg-white
text-white
dark:text-black
px-10
py-3
rounded-full
font-semibold
shadow-lg
hover:scale-105
transition
"

>

Add To Cart

</button>



</div>









<div className="
flex
flex-wrap
gap-4
mt-6
">



<button

onClick={handleWishlist}

className="
border
border-black
dark:border-white
px-8
py-3
rounded-full
font-semibold
dark:text-white
hover:bg-black
hover:text-white
dark:hover:bg-white
dark:hover:text-black
transition
"

>

♡ Wishlist

</button>






<button

onClick={()=>{


addToCart({

...product,

quantity

});


navigate("/checkout");


}}

className="
bg-gradient-to-r
from-gray-800
to-black
text-white
px-8
py-3
rounded-full
font-semibold
shadow-lg
hover:scale-105
transition
"

>

⚡ Buy Now

</button>



</div>





</div>

{/* RELATED PRODUCTS */}

<section className="mt-24">

<h2 className="
text-3xl
font-bold
mb-8
text-black
dark:text-white
">

You May Also Like

</h2>


<div className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
gap-10
">


{
relatedProducts.slice(0,4).map((item)=>(

<div
key={item.id}
className="
bg-white
dark:bg-gray-900
rounded-3xl
shadow-md
border
border-gray-200
dark:border-gray-800
overflow-hidden
hover:shadow-xl
transition
"
>


<img
src={item.image}
alt={item.title}
className="
w-full
h-72
object-contain
p-6
bg-white
"
/>


<div className="p-6">


<p className="
text-sm
text-gray-500
dark:text-gray-400
uppercase
">

{item.category}

</p>


<h3 className="
mt-3
font-bold
text-lg
text-black
dark:text-white
line-clamp-2
">

{item.title}

</h3>


<p className="
text-xl
font-bold
mt-4
text-black
dark:text-white
">

₹{item.price}

</p>


<button

onClick={()=>{
 window.scrollTo(0,0);
 navigate(`/product/${item.id}`);
}}

className="
mt-5
w-full
bg-black
dark:bg-white
text-white
dark:text-black
py-3
rounded-full
font-semibold
hover:scale-105
transition
"

>

View Product

</button>


</div>


</div>

))

}




</div>
</section>


</div>
<RecentlyViewed />
<Reviews productId={product.id}/>

</section>



)


}


export default ProductDetails;