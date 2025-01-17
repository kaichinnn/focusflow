import React, { useEffect, useState } from 'react';
import { X, Trash2 } from 'lucide-react';

export function EditTaskModal({ task, isOpen, onClose }) {
  const [shouldRender, setShouldRender] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      const animationTimer = setTimeout(() => setIsAnimating(true), 10);
      return () => clearTimeout(animationTimer);
    } else {
      setIsAnimating(false);
      const unmountTimer = setTimeout(() => setShouldRender(false), 300);
      return () => clearTimeout(unmountTimer);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(onClose, 300);
  };

  return (
    <div className="fixed inset-0 z-30">
      {/* Backdrop */}
      <div 
        onClick={handleClose}
        className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300
          ${isAnimating ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* Modal */}
      <div 
        className={`fixed inset-x-0 bottom-14 transform transition-transform duration-300 ease-out translate-y-full
          ${isAnimating ? '!translate-y-0' : ''}`}
        onClick={e => e.stopPropagation()}
      >
        <div className="bg-white rounded-t-2xl p-4 shadow-xl max-h-[85vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-3">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Edit Routine</h2>
              <p className="text-sm text-gray-500 mt-1">Update your routine details</p>
            </div>
            <button 
              onClick={handleClose}
              className="rounded-full p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input
                type="text"
                className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-purple-500 focus:ring-1 focus:ring-purple-200 transition-all outline-none text-sm"
                placeholder="Enter routine title"
                defaultValue={task?.title}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-purple-500 focus:ring-1 focus:ring-purple-200 transition-all outline-none resize-none text-sm"
                rows={2}
                placeholder="Add some details about your routine"
                defaultValue={task?.description}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Recurring Interval</label>
              <select
                className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-purple-500 focus:ring-1 focus:ring-purple-200 transition-all outline-none text-sm"
                defaultValue={task?.recurring?.toLowerCase()}
              >
                <option value="daily">Daily</option>
                <option value="bidaily">Twice a Day</option>
                <option value="weekly">Weekly</option>
                <option value="biweekly">Bi-weekly</option>
                <option value="monthly">Monthly</option>
                <option value="bimonthly">Bi-monthly</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 pt-2">
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-50 border border-gray-200 transition-colors text-sm font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors shadow-sm text-sm font-medium"
                >
                  Save Changes
                </button>
              </div>
              <button
                type="button"
                className="mt-2 text-sm flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-md transition-all duration-200 text-gray-500 hover:text-red-600 hover:bg-gray-50"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span className="font-medium">Delete routine</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}