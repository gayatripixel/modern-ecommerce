import { create } from "zustand";
import { persist } from "zustand/middleware";
import toast from "react-hot-toast";


const useWishlistStore = create(

persist(

(set)=>({

wishlist: [],



toggleWishlist:(product)=>

set((state)=>{


const exists = state.wishlist.some(
(item)=>item.id === product.id
);



if(exists){


toast.success("Removed from wishlist 💔");


return{

wishlist: state.wishlist.filter(
(item)=>item.id !== product.id
)

};


}



toast.success("Added to wishlist ❤️");


return{

wishlist:[
...state.wishlist,
product
]

};


}),




removeFromWishlist:(id)=>

set((state)=>({

wishlist:
state.wishlist.filter(
(item)=>item.id !== id
)

}))



}),


{

name:"wishlist-storage"

}


)


);


export default useWishlistStore;