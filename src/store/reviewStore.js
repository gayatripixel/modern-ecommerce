import { create } from "zustand";
import { persist } from "zustand/middleware";
import toast from "react-hot-toast";


const useReviewStore = create(

persist(

(set)=>({

reviews:{},



addReview:(productId,review)=>


set((state)=>{


const oldReviews =
state.reviews[productId] || [];



toast.success(
"Review added ⭐"
);



return{


reviews:{


...state.reviews,


[productId]:[

review,

...oldReviews

]


}



}


}),






markHelpful:(productId,index)=>

set((state)=>{


const updated =
[...state.reviews[productId]];


updated[index]={

...updated[index],

helpful:
(updated[index].helpful || 0)+1

};



return{


reviews:{


...state.reviews,


[productId]:updated


}



}


})





}),


{

name:"review-storage"

}


)

);



export default useReviewStore;