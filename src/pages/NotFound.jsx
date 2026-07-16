import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 px-6">

      <div className="text-center">

        <h1 className="text-8xl font-extrabold text-black dark:text-white">
          404
        </h1>

        <h2 className="text-3xl font-bold mt-6 text-black dark:text-white">
          Page Not Found
        </h2>

        <p className="text-gray-500 dark:text-gray-400 mt-4">
          Sorry, the page you're looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="inline-block mt-8 bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-xl hover:opacity-80 transition"
        >
          Back To Home
        </Link>

      </div>

    </section>
  );
}

export default NotFound;