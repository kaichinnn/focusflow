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
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 px-6 shadow-lg">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 200
          }}
          className="flex items-center space-x-4 mb-4"
        >
          <div className="w-11 h-11 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center
            border border-white/10 shadow-inner">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight">FocusFlow</h1>
            <div className="flex items-center space-x-2 mt-0.5">
              <span className="text-sm bg-white/10 px-2 py-0.5 rounded-full backdrop-blur-sm">Level 2</span>
              <span className="text-xs text-white/60">ID: 231560</span>
            </div>
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
          className="grid grid-cols-2 gap-4 mb-3"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/10">
            <div className="flex items-center space-x-2">
              <Trophy className="w-4 h-4 text-yellow-300" />
              <span className="text-sm font-medium">1 Day Streak</span>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/10">
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-yellow-300" />
              <span className="text-sm font-medium">140 XP</span>
            </div>
          </div>
        </motion.div>

        <div className="space-y-1.5">
          <div className="flex justify-between text-xs">
            <span className="text-white/60">Progress to Level 3</span>
            <span className="text-white/90 font-medium">40%</span>
          </div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              delay: 0.4,
              type: "spring",
              stiffness: 200
            }}
            className="h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm"
          >
            <div 
              className="h-full bg-gradient-to-r from-green-400 to-emerald-400 rounded-full transition-all duration-300
                shadow-lg"
              style={{ width: '40%' }}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}