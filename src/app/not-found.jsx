"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-gray-900 to-black text-white px-6">
      <div className="text-center max-w-xl">
        {/* Animated 404 */}
        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-7xl md:text-9xl font-extrabold bg-linear-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text"
        >
          404
        </motion.h1>

        {/* Floating subtitle */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: [0, -10, 0], opacity: 1 }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-4 text-lg text-gray-300"
        >
          
            Oops! The page you&apos;re looking for doesn&apos;t exist.
          
        </motion.p>

        {/* Animated divider */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "120px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="h-1 bg-cyan-400 mx-auto my-6 rounded-full"
        />

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-6 flex-wrap">
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-xl font-semibold shadow-lg transition"
            >
              <Home size={18} />
              Go Home
            </motion.button>
          </Link>

          <motion.button
            onClick={() => window.history.back()}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 border border-gray-600 hover:bg-gray-800 rounded-xl font-semibold transition"
          >
            <ArrowLeft size={18} />
            Go Back
          </motion.button>
        </div>

        {/* Floating background glow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1 }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-72 h-72 bg-cyan-500 blur-[120px] rounded-full -z-10"
        />
      </div>
    </div>
  );
}
