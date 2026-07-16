import { Link } from "react-router-dom";
import useCartStore from "../../store/cartStore";
import useWishlistStore from "../../store/wishlistStore";
import toast from "react-hot-toast";


function ProductCard({product}) {


const {addToCart}=useCartStore();

const {addToWishlist}=useWishlistStore();





return (


<div

className="
bg-white
dark:bg-gray-900
rounded-3xl
overflow-hidden
shadow-md
border
border-gray-200
dark:border-gray-800
hover:shadow-xl
transition
duration-300
flex
flex-col
"


>





{/* IMAGE */}


<Link to={`/product/${product.id}`}

className="
bg-gray-100
dark:bg-gray-800
h-64
flex
items-center
justify-center
p-6
"

>


<img

src={product.image}

alt={product.title}

className="
h-52
w-full
object-contain
hover:scale-105
transition
duration-300
"

/>


</Link>









{/* CONTENT */}


<div className="
p-5
flex
flex-col
flex-1
">





<p

className="
text-xs
uppercase
tracking-wider
text-gray-500
dark:text-gray-400
mb-2
"

>

{product.category}

</p>







<h2

className="
text-base
font-bold
text-black
dark:text-white
line-clamp-2
min-h-[48px]
"

>

{product.title}

</h2>







<div className="
flex
items-center
gap-2
mt-3
">


<span className="
text-yellow-500
text-sm
">

⭐ {product.rating?.rate || 5}

</span>


<span className="
text-gray-400
text-xs
">

({product.rating?.count || 0})

</span>



</div>







<p

className="
text-xl
font-bold
text-black
dark:text-white
mt-4
"

>

₹{product.price}

</p>







<div className="
flex
gap-3
mt-auto
pt-5
">





<button


onClick={()=>{


addToCart(product);


toast.success("Added to cart 🛒");


}}



className="
flex-1
bg-black
dark:bg-white
text-white
dark:text-black
py-2
rounded-full
text-sm
font-semibold
hover:scale-105
transition
"

>

Cart

</button>







<button


onClick={()=>{


addToWishlist(product);


}}



className="
w-11
h-11
rounded-full
border
border-gray-300
dark:border-gray-700
text-xl
flex
items-center
justify-center
dark:text-white
hover:bg-gray-100
dark:hover:bg-gray-800
"

>

♡


</button>







</div>







</div>





</div>



)

}


export default ProductCard;