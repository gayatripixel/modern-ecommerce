import RatingStars from "./RatingStars";
import { ThumbsUp } from "lucide-react";



function ReviewCard({
review,
onHelpful
}){


return(


<div

className="

bg-white

dark:bg-slate-900

p-6

rounded-3xl

border

border-slate-200

dark:border-slate-800

shadow-md

"

>



<div

className="
flex
justify-between
"

>


<div>


<h3

className="
font-bold

dark:text-white

"

>

{review.name}

</h3>



{

review.verified &&

<span

className="
text-xs
text-emerald-500
font-bold

"

>

✓ Verified Buyer

</span>

}



</div>



<RatingStars

rating={review.rating}

/>



</div>




<p

className="
mt-5

text-slate-600

dark:text-slate-300

"

>

{review.comment}

</p>



<button


onClick={onHelpful}


className="

mt-5

flex

items-center

gap-2

text-sm

text-indigo-600

font-semibold

"

>

<ThumbsUp size={16}/>


Helpful {review.helpful || 0}


</button>



</div>


)


}


export default ReviewCard;