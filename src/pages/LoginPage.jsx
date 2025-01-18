import React from 'react';
import { Home, Sparkles } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <div className="p-4">
        <div className="flex items-center space-x-2 text-purple-200">
          <Home className="w-5 h-5" />
          <span>Welcome</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-8 pt-12">
        <div className="flex flex-col items-center">
          {/* Logo Container */}
          <div className="relative w-32 h-32 flex items-center justify-center mb-8">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-purple-600 rounded-xl blur-xl opacity-20"></div>
            {/* Logo background with gradient */}
            <div className="relative w-full h-full bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl shadow-lg 
              flex items-center justify-center border border-purple-500/20">
              <div className="w-24 h-24 flex items-center justify-center">
                <Sparkles className="w-16 h-16 text-purple-100" />
              </div>
            </div>
          </div>

          {/* Welcome Text */}
          <h1 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-200 to-indigo-200 text-transparent bg-clip-text">
            Welcome to Routinely
          </h1>
          <p className="text-purple-200/60 text-sm mb-8">Build better habits, one day at a time</p>

          {/* Sign In Form */}
          <div className="w-full max-w-sm space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-purple-500/20 
                  text-white placeholder-purple-200/30 focus:outline-none focus:border-purple-500/50 
                  focus:ring-2 focus:ring-purple-500/20 transition-all"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-purple-500/20 
                  text-white placeholder-purple-200/30 focus:outline-none focus:border-purple-500/50 
                  focus:ring-2 focus:ring-purple-500/20 transition-all"
              />
            </div>
            
            {/* Forgot Password */}
            <div className="text-right">
              <button className="text-sm text-purple-200/60 hover:text-purple-200 transition-colors">
                Forgot Password?
              </button>
            </div>

            {/* Sign In Button */}
            <button className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 
              text-white font-semibold hover:from-purple-500 hover:to-indigo-500 
              transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]
              shadow-lg shadow-purple-500/20">
              Sign In
            </button>

            {/* Sign Up Link */}
            <div className="text-center pt-4">
              <p className="text-purple-200/60">
                Don't have an account?{' '}
                <button className="text-green-400 hover:text-green-300 font-medium transition-colors">
                  Sign Up
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Success Progress Elements */}
      <div className="absolute bottom-20 left-4 right-4 flex justify-center space-x-2">
        <div className="w-2 h-2 rounded-full bg-green-400/20"></div>
        <div className="w-2 h-2 rounded-full bg-green-400/40"></div>
        <div className="w-2 h-2 rounded-full bg-green-400"></div>
      </div>

      {/* Version Number */}
      <div className="absolute bottom-6 left-0 right-0 text-center">
        <span className="text-xs text-purple-200/40">Version 1.0.0</span>
      </div>
    </div>
  );
}