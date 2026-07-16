import { useState } from "react";
import useReviewStore from "../../store/reviewStore";


function Reviews({productId}){


  const reviews = useReviewStore(
    (state)=>state.reviews
  );


  const addReview = useReviewStore(
    (state)=>state.addReview
  );


  const [rating,setRating] = useState(5);

  const [comment,setComment] = useState("");



  const productReviews = reviews.filter(
    (review)=>review.productId === productId
  );



  function handleSubmit(e){

    e.preventDefault();


    if(!comment.trim()) return;



    addReview({

      id:Date.now(),

      productId,

      user:"Gayatri",

      rating,

      comment,

      date:new Date().toLocaleDateString()

    });


    setComment("");

  }





return (

<section
className="
mt-20
bg-white
dark:bg-gray-900
rounded-3xl
p-8
shadow-lg
border
border-gray-200
dark:border-gray-800
"
>


<h2
className="
text-3xl
font-bold
text-black
dark:text-white
mb-8
"
>

Customer Reviews ⭐

</h2>





{/* Add Review */}


<form
onSubmit={handleSubmit}
className="
space-y-5
"
>


<div>

<p className="
text-gray-600
dark:text-gray-400
mb-3
">

Your Rating

</p>


<div className="flex gap-2">


{
[1,2,3,4,5].map((star)=>(


<button

type="button"

key={star}

onClick={()=>setRating(star)}

className="
text-3xl
"

>

{
star <= rating ? "⭐" : "☆"
}


</button>


))

}


</div>


</div>





<textarea

value={comment}

onChange={(e)=>setComment(e.target.value)}

placeholder="Write your review..."

className="
w-full
border
rounded-2xl
p-4
h-32
dark:bg-gray-800
dark:text-white
"

></textarea>




<button

className="
bg-black
dark:bg-white
text-white
dark:text-black
px-8
py-3
rounded-full
font-semibold
"

>

Submit Review

</button>



</form>







{/* Reviews List */}


<div className="
mt-10
space-y-5
">


{
productReviews.length === 0 ?


(

<p className="
text-gray-500
dark:text-gray-400
">

No reviews yet. Be the first one!

</p>

)


:


productReviews.map((review)=>(


<div

key={review.id}

className="
bg-gray-100
dark:bg-gray-800
rounded-2xl
p-5
"


>


<div className="
flex
justify-between
"
>


<h3 className="
font-bold
text-black
dark:text-white
">

{review.user}

</h3>


<span>

{"⭐".repeat(review.rating)}

</span>


</div>



<p className="
mt-3
text-gray-600
dark:text-gray-300
">

{review.comment}

</p>


<p className="
text-sm
text-gray-400
mt-3
">

{review.date}

</p>


</div>


))


}



</div>



</section>

)


}


export default Reviews;