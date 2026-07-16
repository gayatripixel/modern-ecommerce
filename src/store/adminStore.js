import { create } from "zustand";
import { persist } from "zustand/middleware";


const useAdminStore = create(

persist(

(set)=>({

    products: [],

selectedProduct:null,

setSelectedProduct:(product)=>set({
 selectedProduct:product
}),


clearSelectedProduct:()=>set({
 selectedProduct:null
}),






    // Add Product

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







    // Update Product

    updateProduct:(id, updatedProduct)=>

        set((state)=>({

            products:

            state.products.map((product)=>

                product.id === id

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







    // Delete Product

    deleteProduct:(id)=>

        set((state)=>({

            products:

            state.products.filter(

                (product)=>

                product.id !== id

            )

        })),








    // Clear selected product

    clearSelectedProduct:()=>


        set({

            selectedProduct:null

        })



}),


{

    name:"admin-products"

}


)

);


export default useAdminStore;