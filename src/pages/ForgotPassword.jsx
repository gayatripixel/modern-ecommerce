import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function ForgotPassword() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!email) {

      toast.error("Please enter your email");

      return;

    }

    setLoading(true);

    setTimeout(() => {

      toast.success("Reset link sent successfully 📩");

      navigate(
        "/reset-password",
        {
          state: { email }
        }
      );

      setLoading(false);

    }, 1500);

  };

  return (

    <section className="
    min-h-screen
    flex
    items-center
    justify-center
    bg-gray-50
    dark:bg-gray-950
    px-6
    ">

      <form
      onSubmit={handleSubmit}
      className="
      w-full
      max-w-md
      bg-white
      dark:bg-gray-900
      p-8
      rounded-3xl
      shadow-xl
      border
      border-gray-200
      dark:border-gray-800
      ">

        <h1 className="
        text-4xl
        font-bold
        text-center
        text-black
        dark:text-white
        ">
          Forgot Password
        </h1>

        <p className="
        text-center
        text-gray-500
        dark:text-gray-400
        mt-3
        mb-8
        ">
          Enter your registered email.
        </p>

        <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        className="
        w-full
        px-5
        py-3
        rounded-xl
        border
        dark:bg-gray-800
        dark:text-white
        dark:border-gray-700
        outline-none
        "
        />

        <button
        disabled={loading}
        className="
        mt-8
        w-full
        bg-black
        dark:bg-white
        text-white
        dark:text-black
        py-3
        rounded-xl
        font-semibold
        ">

          {

            loading

            ?

            "Sending..."

            :

            "Send Reset Link"

          }

        </button>

      </form>

    </section>

  );

}

export default ForgotPassword;