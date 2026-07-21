function ProductSkeleton() {


return (

<div

className="

group

rounded-[32px]

overflow-hidden


bg-white/80


dark:bg-slate-900/80


backdrop-blur-xl


border

border-slate-200

dark:border-slate-700



shadow-lg


animate-pulse


"

>



{/* IMAGE SKELETON */}


<div

className="

relative

h-72


bg-gradient-to-br


from-slate-200

to-slate-300


dark:from-slate-800

dark:to-slate-700


"

>


<div

className="

absolute

inset-0


bg-gradient-to-r


from-transparent


via-white/30


to-transparent


animate-[shimmer_2s_infinite]


"

>


</div>


</div>








{/* CONTENT */}



<div

className="

p-6

"

>



{/* Category */}


<div

className="

h-3


w-24


rounded-full


bg-slate-300


dark:bg-slate-700


mb-5

"

>

</div>







{/* Title */}


<div

className="

space-y-3

"

>


<div

className="

h-5


rounded-lg


bg-slate-300


dark:bg-slate-700


"

>

</div>



<div

className="

h-5


rounded-lg


bg-slate-300


dark:bg-slate-700


w-3/4


"

>

</div>



</div>









{/* Rating */}



<div

className="

mt-5


h-8


w-20


rounded-full


bg-slate-300


dark:bg-slate-700


"

>

</div>









{/* Price */}



<div

className="

mt-6


h-8


w-28


rounded-lg


bg-slate-300


dark:bg-slate-700


"

>

</div>









{/* Button */}


<div

className="

mt-6


h-12


rounded-2xl


bg-slate-300


dark:bg-slate-700


"

>

</div>





</div>



</div>


)


}


export default ProductSkeleton;