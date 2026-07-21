import { create } from "zustand";
import { persist } from "zustand/middleware";


const useAdminStore = create(

persist(

(set)=>({

products: [],


setProducts:(products)=>set({

products

}),



selectedProduct:null,



setSelectedProduct:(product)=>set({

selectedProduct:product

}),



clearSelectedProduct:()=>set({

selectedProduct:null

}),




addProduct:(product)=>

set((state)=>({

products:[

...state.products,

{
...product,
id:Date.now()
}

]

})),




updateProduct:(id,updatedProduct)=>

set((state)=>({

products:

state.products.map((product)=>

product.id===id

?

{
...product,
...updatedProduct
}

:

product

),

selectedProduct:null

})),




deleteProduct:(id)=>

set((state)=>({

products:

state.products.filter(

(product)=>product.id!==id

)

}))


}),


{

name:"admin-products"

}

)

);


export default useAdminStore;