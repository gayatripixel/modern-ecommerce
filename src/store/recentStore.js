import { create } from "zustand";
import { persist } from "zustand/middleware";


const useRecentStore = create(

persist(

(set)=>({

recentProducts: [],


addRecentlyViewed:(product)=>

set((state)=>{


const filtered = state.recentProducts.filter(
(item)=> item.id !== product.id
);


return {

recentProducts:[
product,
...filtered
].slice(0,5)

};


})


}),

{
name:"recent-products"
}

)

);


export default useRecentStore;