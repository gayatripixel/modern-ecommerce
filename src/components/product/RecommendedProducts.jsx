import { motion } from "framer-motion";
import ProductCard from "./ProductCard";


function RecommendedProducts({products=[]}){


if(products.length===0){
return null;
}



return(


<section className="
mt-24
">


<h2

className="
text-4xl
font-black
dark:text-white
mb-10
"

>

✨ Recommended For You

</h2>



<div

className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-4
gap-8
"

>


{

products.slice(0,4).map((product)=>(


<motion.div

key={product.id}

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

>


<ProductCard

product={product}

/>


</motion.div>


))


}


</div>


</section>


)

}


export default RecommendedProducts;