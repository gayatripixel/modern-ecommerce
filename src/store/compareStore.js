import {create} from "zustand";
import {persist} from "zustand/middleware";
import toast from "react-hot-toast";


const useCompareStore = create(

persist(

(set)=>({

compare: [],



addToCompare:(product)=>

set((state)=>{


const exists = state.compare.some(
(item)=>item.id === product.id
);


if(exists){

toast.error("Already added for comparison");

return state;

}


if(state.compare.length >= 3){

toast.error("Maximum 3 products can compare");

return state;

}



toast.success("Added to compare ⚖️");


return{

compare:[
...state.compare,
product
]

};


}),





removeFromCompare:(id)=>

set((state)=>({

compare:
state.compare.filter(
(item)=>item.id!==id
)

})),




clearCompare:()=>set({

compare:[]

})


}),

{

name:"compare-storage"

}

)

);


export default useCompareStore;