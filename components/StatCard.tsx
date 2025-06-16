import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { Sparkles } from "lucide-react"; // ou Heroicons / FontAwesome

type StatCardProps = {
  value: string;
  label: string;
};

export default function StatCard({ value, label }: StatCardProps) {
  const ref = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) controls.start("visible");
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative group bg-white dark:bg-[#1a1a1a] rounded-3xl px-6 py-6 text-center w-full max-w-xs sm:max-w-[200px] 
                 shadow-lg hover:shadow-indigo-500/30 border border-transparent hover:border-indigo-400
                 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 overflow-hidden"
    >
      {/* Icône Sparkles animée */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute top-3 right-3 text-indigo-500 group-hover:animate-bounce"
      >
        <Sparkles size={20} />
      </motion.div>

      <div className="text-3xl sm:text-4xl font-extrabold text-black dark:text-white">
        {value}
      </div>
      <div className="text-gray-700 dark:text-gray-300 mt-2 text-sm sm:text-base">
        {label}
      </div>
    </motion.div>
  );
}
