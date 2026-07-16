import { Link } from "react-router-dom";
import useCartStore from "../store/cartStore";

function Cart() {

  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCartStore();


  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );


  const shipping = subtotal > 300 ? 0 : 40;

  const tax = subtotal * 0.18;

  const finalTotal = subtotal + shipping + tax;



  return (

    <section className="max-w-7xl mx-auto px-6 py-20 bg-gray-50 dark:bg-gray-950 min-h-screen">


      <h1 className="text-4xl font-bold mb-10 text-black dark:text-white">
        Shopping Cart
      </h1>



      {
        cart.length === 0 ? (

          <div className="text-center py-20">


            <h2 className="text-3xl font-semibold text-black dark:text-white">
              Your Cart is Empty
            </h2>


            <p className="text-gray-500 dark:text-gray-400 mt-3">
              Add some amazing products.
            </p>


          </div>


        ) : (


          <div className="space-y-6">


          {
            cart.map((item)=>(


              <div
                key={item.id}
                className="flex items-center justify-between 
                bg-white dark:bg-gray-900 
                rounded-2xl shadow-md p-5 
                border border-gray-200 dark:border-gray-800"
              >


                <div className="flex items-center gap-6">


                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-28 h-28 rounded-xl object-cover"
                  />



                  <div>


                    <h2 className="text-xl font-semibold text-black dark:text-white">
                      {item.title}
                    </h2>


                    <p className="text-gray-500 dark:text-gray-400 mt-2">
                      {item.category}
                    </p>


                    <p className="font-bold mt-3 text-black dark:text-white">
                      ₹{item.price}
                    </p>


                  </div>


                </div>




                <div className="text-right">


                  <div className="flex items-center gap-3 mt-3">


                    <button
                      onClick={()=>decreaseQuantity(item.id)}
                      className="w-8 h-8 rounded-full 
                      bg-gray-200 dark:bg-gray-700 
                      text-black dark:text-white"
                    >
                      -
                    </button>



                    <span className="font-semibold text-black dark:text-white">
                      {item.quantity}
                    </span>



                    <button
                      onClick={()=>increaseQuantity(item.id)}
                      className="w-8 h-8 rounded-full 
                      bg-black dark:bg-white 
                      text-white dark:text-black"
                    >
                      +
                    </button>


                  </div>




                  <p className="mt-3 font-bold text-xl text-black dark:text-white">
                    ₹{item.price * item.quantity}
                  </p>




                  <button
                    onClick={()=>removeFromCart(item.id)}
                    className="mt-4 text-red-600 hover:underline"
                  >
                    Remove
                  </button>


                </div>



              </div>


            ))
          }





          {/* SUMMARY */}


          <div className="
          mt-12 
          bg-gray-100 dark:bg-gray-900 
          rounded-2xl p-8 
          max-w-md ml-auto
          border border-gray-200 dark:border-gray-800
          ">


            <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">
              Order Summary
            </h2>



            <div className="flex justify-between mb-4 text-gray-700 dark:text-gray-300">

              <span>
                Subtotal
              </span>

              <span>
                ₹{subtotal.toFixed(2)}
              </span>

            </div>



            <div className="flex justify-between mb-4 text-gray-700 dark:text-gray-300">

              <span>
                Shipping
              </span>

              <span>
                {shipping === 0 ? "FREE" : `₹${shipping}`}
              </span>

            </div>




            <div className="flex justify-between mb-4 text-gray-700 dark:text-gray-300">

              <span>
                Tax (18%)
              </span>


              <span>
                ₹{tax.toFixed(2)}
              </span>


            </div>




            <hr className="my-4 border-gray-300 dark:border-gray-700"/>




            <div className="flex justify-between text-2xl font-bold text-black dark:text-white">

              <span>
                Total
              </span>


              <span>
                ₹{finalTotal.toFixed(2)}
              </span>


            </div>




            <Link
              to="/checkout"
              className="
              w-full mt-8 
              bg-black dark:bg-white
              text-white dark:text-black
              py-3 rounded-xl 
              text-center block 
              hover:opacity-80 transition
              "
            >

              Proceed To Checkout

            </Link>



          </div>


          </div>


        )
      }


    </section>

  )

}


export default Cart;