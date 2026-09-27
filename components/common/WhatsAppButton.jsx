"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "7907703425";

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/91${phoneNumber}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <button
      onClick={openWhatsApp}
      aria-label="Chat on WhatsApp"
      className="fixed cursor-pointer bottom-20 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105"
    >
      <FaWhatsapp size={20} />
    </button>
  );
}