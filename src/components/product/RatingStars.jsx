import { Star } from "lucide-react";


function RatingStars({
rating,
setRating,
size=22
}){


return(

<div

className="
flex
gap-1
"

>


{

[1,2,3,4,5].map((star)=>(


<button

key={star}

type="button"

onClick={()=>setRating && setRating(star)}

>

<Star

size={size}

className={

star <= rating

?

"fill-yellow-400 text-yellow-400"

:

"text-slate-300"

}


/>


</button>


))


}


</div>


)

}


export default RatingStars;