import {
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import { motion } from "framer-motion";

function AdminCharts({ products, orders }) {
  const revenueData = orders.map((order, index) => ({
    name: `#${index + 1}`,
    revenue: order.total,
  }));

  const statusData = [
    {
      name: "Pending",
      value: orders.filter((o) => o.status === "Pending").length,
    },
    {
      name: "Confirmed",
      value: orders.filter((o) => o.status === "Confirmed").length,
    },
    {
      name: "Shipped",
      value: orders.filter((o) => o.status === "Shipped").length,
    },
    {
      name: "Delivered",
      value: orders.filter((o) => o.status === "Delivered").length,
    },
  ];

  const categoryMap = {};

  products.forEach((product) => {
    categoryMap[product.category] =
      (categoryMap[product.category] || 0) + 1;
  });

  const categoryData = Object.entries(categoryMap).map(
    ([name, value]) => ({
      name,
      value,
    })
  );

  const COLORS = [
    "#6366F1",
    "#8B5CF6",
    "#06B6D4",
    "#10B981",
  ];

  return (
    <div className="grid lg:grid-cols-2 gap-8 mt-12">

      {/* Revenue */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .5 }}
        whileHover={{ y: -6 }}
        className="
        rounded-[32px]
        p-8

        bg-white/70
        dark:bg-slate-900/70

        backdrop-blur-xl

        border
        border-slate-200
        dark:border-slate-800

        shadow-xl
        "
      >

        <h2
          className="
          text-2xl
          font-black

          bg-gradient-to-r
          from-indigo-600
          via-violet-600
          to-cyan-500

          bg-clip-text
          text-transparent

          mb-8
          "
        >
          Revenue Overview
        </h2>

        <ResponsiveContainer width="100%" height={320}>

          <BarChart data={revenueData}>

            <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.15} />

            <XAxis
              dataKey="name"
              tick={{ fill: "#94A3B8" }}
            />

            <YAxis
              tick={{ fill: "#94A3B8" }}
            />

            <Tooltip
              contentStyle={{
                borderRadius: 18,
                border: "none",
                background: "#0f172a",
                color: "#fff",
              }}
            />

            <Bar
              dataKey="revenue"
              radius={[12, 12, 0, 0]}
              fill="#6366F1"
            />

          </BarChart>

        </ResponsiveContainer>

      </motion.div>

      {/* Order Status */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: .15 }}
        whileHover={{ y: -6 }}
        className="
        rounded-[32px]
        p-8

        bg-white/70
        dark:bg-slate-900/70

        backdrop-blur-xl

        border
        border-slate-200
        dark:border-slate-800

        shadow-xl
        "
      >

        <h2
          className="
          text-2xl
          font-black

          bg-gradient-to-r
          from-violet-600
          to-cyan-500

          bg-clip-text
          text-transparent

          mb-8
          "
        >
          Orders Status
        </h2>

        <ResponsiveContainer width="100%" height={320}>

          <PieChart>

            <Pie
              data={statusData}
              dataKey="value"
              outerRadius={115}
              innerRadius={65}
              paddingAngle={5}
              label
            >
              {statusData.map((entry, index) => (

                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />

              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                borderRadius: 18,
                border: "none",
                background: "#0f172a",
                color: "#fff",
              }}
            />

          </PieChart>

        </ResponsiveContainer>

      </motion.div>

      {/* Categories */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: .25 }}
        whileHover={{ y: -6 }}
        className="
        lg:col-span-2

        rounded-[32px]
        p-8

        bg-white/70
        dark:bg-slate-900/70

        backdrop-blur-xl

        border
        border-slate-200
        dark:border-slate-800

        shadow-xl
        "
      >

        <h2
          className="
          text-2xl
          font-black

          bg-gradient-to-r
          from-indigo-600
          via-purple-600
          to-cyan-500

          bg-clip-text
          text-transparent

          mb-8
          "
        >
          Products By Category
        </h2>

        <ResponsiveContainer width="100%" height={350}>

          <BarChart data={categoryData}>

            <CartesianGrid
              strokeDasharray="3 3"
              strokeOpacity={0.15}
            />

            <XAxis
              dataKey="name"
              tick={{ fill: "#94A3B8" }}
            />

            <YAxis
              tick={{ fill: "#94A3B8" }}
            />

            <Tooltip
              contentStyle={{
                borderRadius: 18,
                border: "none",
                background: "#0f172a",
                color: "#fff",
              }}
            />

            <Bar
              dataKey="value"
              radius={[12, 12, 0, 0]}
              fill="#8B5CF6"
            />

          </BarChart>

        </ResponsiveContainer>

      </motion.div>

    </div>
  );
}

export default AdminCharts;