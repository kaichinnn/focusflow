import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Zap } from 'lucide-react';

export function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 20
      }}
      className="pb-3"
    >
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 px-6 shadow-lg">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 200
          }}
          className="flex items-center space-x-3 mb-3"
        >
          <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-semibold">FocusFlow231560</h1>
            <p className="text-sm text-white/90">Level 2</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            type: "spring",
            stiffness: 200
          }}
          className="flex justify-between items-center mb-2"
        >
          <div className="flex items-center space-x-2">
            <Trophy className="w-4 h-4 text-yellow-300" />
            <span className="text-sm">1 Day Streak</span>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="w-4 h-4 text-yellow-300" />
            <span className="text-sm">140 XP</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            delay: 0.4,
            type: "spring",
            stiffness: 200
          }}
          className="h-1.5 bg-white/20 rounded-full overflow-hidden"
        >
          <div 
            className="h-full bg-yellow-300 rounded-full transition-all duration-300"
            style={{ width: '40%' }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}