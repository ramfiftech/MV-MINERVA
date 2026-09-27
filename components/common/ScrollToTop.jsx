"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      aria-label="Scroll to top"
      className="fixed cursor-pointer bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#b99a63] text-[#071923] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#c8ad7d]"
    >
      <ArrowUp size={20} />
    </button>
  );
}