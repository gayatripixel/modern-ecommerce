import { create } from "zustand";
import { persist } from "zustand/middleware";


const useActivityStore = create(

persist(

(set)=>({

viewHistory: [],


searchHistory: [],



addView:(product)=>


set((state)=>{


const already =
state.viewHistory.find(
(item)=>item.id===product.id
);



if(already){

return state;

}



return{

viewHistory:[
product,
...state.viewHistory
].slice(0,10)

};


}),




addSearch:(keyword)=>

set((state)=>({


searchHistory:[

keyword,

...state.searchHistory

].slice(0,10)


}))



}),

{

name:"activity-storage"

}

)

);


export default useActivityStore;