import { create } from "zustand";
import { persist } from "zustand/middleware";


const useReviewStore = create(

persist(

(set)=>({

reviews: [],


addReview:(review)=>

set((state)=>({

reviews:[
...state.reviews,
review
]

})),



}),


{
name:"review-storage"
}

)

);


export default useReviewStore;