import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";

import {
  LayoutDashboard,
  Search,
  Filter,
  Sparkles,
} from "lucide-react";

import useAdminStore from "../store/adminStore";
import useOrderStore from "../store/orderStore";

import DashboardStats from "../components/admin/DashboardStats";
import AdminCharts from "../components/admin/AdminCharts";
import ProductForm from "../components/admin/ProductForm";
import ProductTable from "../components/admin/ProductTable";
import OrderTable from "../components/admin/OrderTable";

import { getProducts } from "../services/productService";

function AdminDashboard() {

  const products = useAdminStore(
    (state) => state.products
  );

  const setProducts = useAdminStore(
    (state) => state.setProducts
  );

  const setSelectedProduct = useAdminStore(
    (state) => state.setSelectedProduct
  );

  const clearSelectedProduct = useAdminStore(
    (state) => state.clearSelectedProduct
  );

  const deleteProduct = useAdminStore(
    (state) => state.deleteProduct
  );

  const orders = useOrderStore(
    (state) => state.orders
  );

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");

  const { data: apiProducts = [] } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  useEffect(() => {
    if (apiProducts.length > 0 && products.length === 0) {
      setProducts(apiProducts);
    }
  }, [apiProducts]);

  const categories = [
    "All",
    ...new Set(products.map((item) => item.category)),
  ];

  const filteredProducts = products.filter((product) => {

    const searchMatch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const categoryMatch =
      category === "All" ||
      product.category === category;

    return searchMatch && categoryMatch;
  });

  return (

    <section
      className="
      min-h-screen
      bg-slate-100
      dark:bg-slate-950
      transition-colors
      duration-300
      "
    >

      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        py-28
        "
      >

        {/* HERO */}

        <motion.div

          initial={{
            opacity:0,
            y:40
          }}

          animate={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:.6
          }}

          className="
          relative
          overflow-hidden

          rounded-[40px]

          border
          border-slate-200
          dark:border-slate-800

          bg-white/80
          dark:bg-slate-900/70

          backdrop-blur-xl

          shadow-2xl

          p-10
          mb-12
          "
        >

          {/* Gradient */}

          <div
            className="
            absolute
            inset-0

            bg-gradient-to-br

            from-indigo-500/10

            via-violet-500/10

            to-cyan-500/10
            "
          />

          <div
            className="
            relative
            z-10

            flex
            flex-col
            lg:flex-row

            justify-between
            items-center

            gap-10
            "
          >

            {/* LEFT */}

            <div>

              <div
                className="
                inline-flex
                items-center
                gap-2

                px-5
                py-2

                rounded-full

                bg-indigo-100
                dark:bg-indigo-900/40

                text-indigo-700
                dark:text-indigo-300

                font-semibold
                mb-6
                "
              >

                <Sparkles size={18} />

                Premium Admin Panel

              </div>

              <h1
                className="
                text-5xl
                md:text-6xl

                font-black

                text-slate-900
                dark:text-white
                "
              >
                Admin Dashboard
              </h1>

              <p
                className="
                mt-5

                max-w-2xl

                text-lg

                text-slate-600
                dark:text-slate-300
                "
              >
                Monitor products, orders, analytics and business
                performance with a beautiful premium dashboard.
              </p>

            </div>

            {/* RIGHT */}

            <motion.div

              animate={{
                y:[0,-10,0]
              }}

              transition={{
                duration:3,
                repeat:Infinity
              }}

              className="
              w-28
              h-28

              rounded-[30px]

              bg-gradient-to-br

              from-indigo-600

              via-violet-600

              to-cyan-500

              flex
              items-center
              justify-center

              shadow-2xl
              "
            >

              <LayoutDashboard
                size={50}
                className="text-white"
              />

            </motion.div>

          </div>

        </motion.div>

        {/* STATS */}

        <motion.div

          initial={{
            opacity:0,
            y:30
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

          transition={{
            duration:.5
          }}

        >

          <DashboardStats
            products={products}
            orders={orders}
          />

        </motion.div>

        {/* CHARTS */}

        <motion.div

          initial={{
            opacity:0,
            y:30
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

          transition={{
            delay:.2
          }}

        >

          <AdminCharts
            products={products}
            orders={orders}
          />

        </motion.div>

        {/* SEARCH */}

        <motion.div

          initial={{
            opacity:0,
            y:30
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

          transition={{
            delay:.3
          }}

          className="
          mt-12

          rounded-[32px]

          border
          border-slate-200
          dark:border-slate-800

          bg-white/80
          dark:bg-slate-900/70

          backdrop-blur-xl

          shadow-xl

          p-8
          "
        >

          <div
            className="
            flex
            flex-col
            lg:flex-row

            gap-5
            "
          >

            <div className="relative flex-1">

              <Search
                size={20}
                className="
                absolute
                left-5
                top-1/2
                -translate-y-1/2
                text-slate-400
                "
              />

              <input

                type="text"

                value={search}

                onChange={(e)=>setSearch(e.target.value)}

                placeholder="Search products..."

                className="
                w-full

                pl-14
                pr-5
                py-4

                rounded-2xl

                border

                bg-slate-50
                dark:bg-slate-800

                border-slate-200
                dark:border-slate-700

                text-slate-800
                dark:text-white

                outline-none

                focus:ring-2
                focus:ring-indigo-500
                "
              />

            </div>

            <div className="relative">

              <Filter
                size={18}
                className="
                absolute
                left-5
                top-1/2
                -translate-y-1/2
                text-slate-400
                "
              />

              <select

                value={category}

                onChange={(e)=>setCategory(e.target.value)}

                className="
                pl-12
                pr-10
                py-4

                rounded-2xl

                border

                bg-slate-50
                dark:bg-slate-800

                border-slate-200
                dark:border-slate-700

                text-slate-800
                dark:text-white

                outline-none
                "
              >

                {categories.map((cat)=>(
                  <option
                    key={cat}
                    value={cat}
                  >
                    {cat}
                  </option>
                ))}

              </select>

            </div>

                      </div>

        </motion.div>

        {/* PRODUCT FORM */}

        <motion.div

          initial={{
            opacity:0,
            y:30
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

          transition={{
            delay:.4
          }}

          className="mt-12"

        >

          <div
            className="
            rounded-[36px]

            border
            border-slate-200
            dark:border-slate-800

            bg-white/80
            dark:bg-slate-900/70

            backdrop-blur-xl

            shadow-2xl

            p-8
            "
          >

            <div className="flex items-center justify-between mb-8">

              <div>

                <h2
                  className="
                  text-3xl
                  font-black

                  text-slate-900
                  dark:text-white
                  "
                >
                  Product Management
                </h2>

                <p
                  className="
                  mt-2

                  text-slate-500
                  dark:text-slate-400
                  "
                >
                  Add new products or edit existing products.
                </p>

              </div>

            </div>

            <ProductForm />

          </div>

        </motion.div>

        {/* PRODUCT TABLE */}

        <motion.div

          initial={{
            opacity:0,
            y:30
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

          transition={{
            delay:.5
          }}

          className="mt-12"

        >

          <div
            className="
            rounded-[36px]

            border
            border-slate-200
            dark:border-slate-800

            bg-white/80
            dark:bg-slate-900/70

            backdrop-blur-xl

            shadow-2xl

            p-8
            "
          >

            <div className="flex items-center justify-between mb-8">

              <div>

                <h2
                  className="
                  text-3xl
                  font-black

                  text-slate-900
                  dark:text-white
                  "
                >
                  Products
                </h2>

                <p
                  className="
                  mt-2

                  text-slate-500
                  dark:text-slate-400
                  "
                >
                  Total Results : {filteredProducts.length}
                </p>

              </div>

            </div>

            <ProductTable

              products={filteredProducts}

              onEdit={(product)=>{

                setSelectedProduct(product);

                window.scrollTo({

                  top:0,

                  behavior:"smooth"

                });

              }}

              onDelete={deleteProduct}

              onAdd={()=>{

                clearSelectedProduct();

                window.scrollTo({

                  top:0,

                  behavior:"smooth"

                });

              }}

            />

          </div>

        </motion.div>

        {/* ORDERS */}

        <motion.div

          initial={{
            opacity:0,
            y:30
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

          transition={{
            delay:.6
          }}

          className="mt-12"

        >

          <div
            className="
            rounded-[36px]

            border
            border-slate-200
            dark:border-slate-800

            bg-white/80
            dark:bg-slate-900/70

            backdrop-blur-xl

            shadow-2xl

            p-8
            "
          >

            <div className="mb-8">

              <h2
                className="
                text-3xl
                font-black

                text-slate-900
                dark:text-white
                "
              >
                Orders Management
              </h2>

              <p
                className="
                mt-2

                text-slate-500
                dark:text-slate-400
                "
              >
                Track all customer orders from one place.
              </p>

            </div>

            <OrderTable />

          </div>

        </motion.div>

      </div>

    </section>

  );

}


export default AdminDashboard;