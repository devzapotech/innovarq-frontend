"use client";

import { AnimatePresence, motion } from "motion/react";
import { LoadingScreen } from "./components/LoadingScreen";
import { Footer } from "./components/Footer/Footer";
import { useState } from "react";
import Header from "./components/Header/Header";
import { GrainOverlay } from "./components/GrainOverlay";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setContentVisible(true);
  };
  return (
    <div>
      {/* Grain texture overlay */}
      <GrainOverlay />
      {/* Loading screen */}
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: contentVisible ? 1 : 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        >
        <Header />
          {children}
        <Footer />
      </motion.div>
    </div>
  )
};

export default LayoutWrapper;

