import React, { useEffect, useState } from 'react';
import { X, AlertCircle, Heart, Droplet, Briefcase, Brain, Coffee, Home } from 'lucide-react';

export function AddTaskModal({ isOpen, onClose }) {
  const [isMounted, setIsMounted] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = [
    { id: 'health', name: 'Health', icon: Heart, color: 'text-red-400', bgColor: 'bg-red-400/10' },
    { id: 'hygiene', name: 'Hygiene', icon: Droplet, color: 'text-blue-400', bgColor: 'bg-blue-400/10' },
    { id: 'work', name: 'Work', icon: Briefcase, color: 'text-amber-400', bgColor: 'bg-amber-400/10' },
    { id: 'mental', name: 'Mental', icon: Brain, color: 'text-green-400', bgColor: 'bg-green-400/10' },
    { id: 'social', name: 'Social', icon: Coffee, color: 'text-purple-400', bgColor: 'bg-purple-400/10' },
    { id: 'home', name: 'Home', icon: Home, color: 'text-indigo-400', bgColor: 'bg-indigo-400/10' },
  ];

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      const timer = setTimeout(() => setIsMounted(true), 10);
      return () => clearTimeout(timer);
    } else {
      setIsMounted(false);
      const timer = setTimeout(() => setShouldRender(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsMounted(false);
    onClose();
  };

  if (!shouldRender) return null;

  return (
    <div className="fixed inset-0 z-30">
      {/* Backdrop */}
      <div 
        onClick={handleClose}
        className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300
          ${isMounted ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* Modal */}
      <div 
        className="fixed inset-x-0 bottom-16 flex items-end transform transition-transform duration-300 ease-out"
        onClick={e => e.stopPropagation()}
      >
        <div 
          className={`w-full transform transition-transform duration-300 ease-out
            ${isMounted ? 'translate-y-0' : 'translate-y-full'}`}
        >
          <div className="bg-slate-800/95 backdrop-blur-sm rounded-t-2xl p-6 shadow-xl 
            border border-purple-500/20 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-purple-200">Add New Routine</h2>
                <p className="text-sm text-purple-200/60 mt-1">Create a new routine to track</p>
              </div>
              <button 
                onClick={handleClose}
                className="rounded-full p-2 text-purple-400 hover:text-purple-300 hover:bg-purple-500/20 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              {/* Category Selection */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-purple-200/80">Category</label>
                <div className="grid grid-cols-3 gap-2">
                  {categories.map(category => {
                    const Icon = category.icon;
                    return (
                      <button
                        key={category.id}
                        type="button"
                        onClick={() => setSelectedCategory(category.id)}
                        className={`p-3 rounded-xl flex flex-col items-center gap-2 transition-all duration-200
                          ${selectedCategory === category.id 
                            ? `${category.bgColor} border-2 border-${category.color} scale-95`
                            : 'border border-purple-500/20 hover:border-purple-500/40 hover:bg-purple-500/10'}`}
                      >
                        <Icon className={`w-6 h-6 ${category.color}`} />
                        <span className="text-xs font-medium text-purple-200/80">{category.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-purple-200/80 mb-1">Title</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-purple-500/20 
                    text-purple-200 placeholder-purple-200/30
                    focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 
                    transition-all outline-none"
                  placeholder="Enter routine title"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-purple-200/80 mb-1">Description</label>
                <textarea
                  className="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-purple-500/20 
                    text-purple-200 placeholder-purple-200/30
                    focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 
                    transition-all outline-none resize-none"
                  rows={3}
                  placeholder="Add some details about your routine"
                />
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-purple-200/80 mb-1">Recurring Interval</label>
                <div className="relative">
                  <select
                    defaultValue=""
                    className="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-purple-500/20 
                      text-purple-200 appearance-none cursor-pointer
                      focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 
                      transition-all outline-none"
                  >
                    <option value="" disabled>Select frequency</option>
                    <option value="daily">Daily</option>
                    <option value="bidaily">Twice a Day</option>
                    <option value="weekly">Weekly</option>
                    <option value="biweekly">Bi-weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="bimonthly">Bi-monthly</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-purple-200/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-4">
                <button
                  type="button"
                  onClick={handleClose}
                  className="w-full px-6 py-3 rounded-xl text-purple-200/80 
                    bg-purple-500/10 hover:bg-purple-500/20 
                    border border-purple-500/20 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600
                    text-white hover:from-purple-500 hover:to-indigo-500
                    transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]
                    font-medium shadow-lg shadow-purple-500/20"
                >
                  Add Routine
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}