import React, { useEffect, useState } from 'react';
import { X, AlertCircle } from 'lucide-react';

export function AddTaskModal({ isOpen, onClose }) {
  const [isMounted, setIsMounted] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      // Trigger slide up after mount
      const timer = setTimeout(() => setIsMounted(true), 10);
      return () => clearTimeout(timer);
    } else {
      setIsMounted(false);
      // Remove from DOM after animation
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
        className={`fixed inset-x-0 bottom-14 transform transition-transform duration-300 ease-out
          ${isMounted ? 'translate-y-0' : 'translate-y-full'}`}
        onClick={e => e.stopPropagation()}
      >
        <div className="bg-white rounded-t-2xl p-6 shadow-xl max-h-[85vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Add New Routine</h2>
              <p className="text-sm text-gray-500 mt-1">Create a new routine to track</p>
            </div>
            <button 
              onClick={handleClose}
              className="rounded-full p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all outline-none"
                placeholder="Enter routine title"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all outline-none resize-none"
                rows={3}
                placeholder="Add some details about your routine"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Recurring Interval</label>
              <select
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all outline-none"
              >
                <option value="daily">Daily</option>
                <option value="bidaily">Twice a Day</option>
                <option value="weekly">Weekly</option>
                <option value="biweekly">Bi-weekly</option>
                <option value="monthly">Monthly</option>
                <option value="bimonthly">Bi-monthly</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-4">
              <button
                type="button"
                onClick={handleClose}
                className="w-full px-6 py-3 rounded-lg text-gray-700 hover:bg-gray-50 border border-gray-200 transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors shadow-sm font-medium"
              >
                Add Routine
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}