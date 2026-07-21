import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";

import "swiper/css";

import useRecentStore from "../../store/recentStore";



function RecentlyViewed(){


const navigate = useNavigate();



const recentProducts = useRecentStore(
(state)=>state.recentProducts
);



if(recentProducts.length===0)
return null;



return(


<section

className="

mt-24

"

>



<div

className="

flex

justify-between

items-center

mb-10

"

>


<h2

className="

text-4xl

font-black

dark:text-white

"

>

Recently Viewed 👀

</h2>



<p

className="

text-slate-500

dark:text-slate-400

hidden

md:block

"

>

Continue your shopping journey

</p>



</div>








<Swiper


modules={[Autoplay]}


spaceBetween={25}


slidesPerView={1}


autoplay={{

delay:2500

}}


breakpoints={{

640:{

slidesPerView:2

},


1024:{

slidesPerView:4

}

}}


>



{

recentProducts.map((product)=>(


<SwiperSlide

key={product.id}

>



<motion.div


whileHover={{

y:-12

}}


className="

bg-white

dark:bg-slate-900


rounded-3xl


overflow-hidden


border

border-slate-200

dark:border-slate-800


shadow-lg


transition


"


>



{/* IMAGE */}


<div

className="

h-60

bg-slate-100

dark:bg-slate-800

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

h-full

w-full

object-contain


hover:scale-110


transition


duration-500

"


/>


</div>






{/* CONTENT */}



<div

className="

p-5

"

>



<h3

className="

font-bold

dark:text-white

line-clamp-2

"

>

{product.title}

</h3>





<p

className="

mt-3

text-xl

font-black


bg-gradient-to-r

from-indigo-600

to-cyan-500


bg-clip-text

text-transparent

"

>

₹{product.price}

</p>







<button


onClick={()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


navigate(`/product/${product.id}`);


}}



className="

mt-5

w-full


py-3


rounded-full


bg-black

dark:bg-white


text-white

dark:text-black


font-bold


hover:scale-105


transition


"

>


View Product

</button>



</div>



</motion.div>



</SwiperSlide>


))


}


</Swiper>




</section>


)


}


export default RecentlyViewed;