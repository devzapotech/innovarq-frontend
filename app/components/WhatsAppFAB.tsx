"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { CONTACT_WHATSAPP, MESSAGE_TEMPLATE } from "@/app/constants";

export const WhatsAppFAB = () => {
  const [inContact, setInContact] = useState(false);
  const [inFooter, setInFooter] = useState(false);

  useEffect(() => {
    const contactSection = document.getElementById("contacto");
    const footerSection = document.querySelector("footer");

    const contactObserver = contactSection
      ? new IntersectionObserver(
          ([entry]) => setInContact(entry.isIntersecting),
          { threshold: 0.15 }
        )
      : null;
    const footerObserver = footerSection
      ? new IntersectionObserver(
          ([entry]) => setInFooter(entry.isIntersecting),
          { threshold: 0.05 }
        )
      : null;

    if (contactSection) contactObserver!.observe(contactSection);
    if (footerSection) footerObserver!.observe(footerSection);

    return () => {
      contactObserver?.disconnect();
      footerObserver?.disconnect();
    };
  }, []);

  const isHidden = inContact && !inFooter;

  return (
    <AnimatePresence>
      {!isHidden && (
        <motion.a
          href={CONTACT_WHATSAPP(MESSAGE_TEMPLATE)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chatear por WhatsApp"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center shadow-lg"
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            backgroundColor: "#25D366",
            textDecoration: "none",
          }}
        >
          <span
            className="absolute inset-0 animate-ping"
            style={{ borderRadius: "50%", backgroundColor: "#25D366", opacity: 0.5 }}
          />
          <MessageCircle size={26} color="#ffffff" className="relative" />
        </motion.a>
      )}
    </AnimatePresence>
  );
};
