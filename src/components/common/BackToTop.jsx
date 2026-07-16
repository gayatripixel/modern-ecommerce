import { useEffect, useState } from "react";

function BackToTop(){

  const [show, setShow] = useState(false);


  useEffect(()=>{

    const handleScroll = ()=>{

      if(window.scrollY > 400){
        setShow(true);
      }
      else{
        setShow(false);
      }

    };


    window.addEventListener(
      "scroll",
      handleScroll
    );


    return ()=>{

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };


  },[]);



  const scrollTop = ()=>{

    window.scrollTo({

      top:0,

      behavior:"smooth"

    });

  };



  if(!show) return null;


  return (

    <button

      onClick={scrollTop}

      className="
      fixed
      bottom-18
      right-4
      w-12
      h-12
      rounded-full
      bg-black
      text-white
      text-xl
      shadow-xl
      hover:scale-110
      transition
      z-50
      "

    >

      ↑

    </button>

  )

}


export default BackToTop;