import React, { useEffect, useState } from 'react';
import { X, AlertTriangle } from 'lucide-react';

export function ConfirmModal({ isOpen, onClose, onConfirm }) {
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
        className={`fixed inset-x-0 bottom-16 transform transition-transform duration-300 ease-out
          ${isMounted ? 'translate-y-0' : 'translate-y-full'}`}
        onClick={e => e.stopPropagation()}
      >
        <div className="bg-white rounded-t-2xl p-6 shadow-xl">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3 text-red-600">
              <AlertTriangle className="w-6 h-6" />
              <h2 className="text-2xl font-bold">Uncomplete Task?</h2>
            </div>
            <button 
              onClick={handleClose}
              className="rounded-full p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <p className="text-gray-600 mb-8 text-lg">
            Are you sure you want to mark this task as incomplete? This will reset your progress.
          </p>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={handleClose}
              className="w-full px-6 py-3 rounded-lg text-gray-700 hover:bg-gray-50 border border-gray-200 transition-colors font-medium"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                onConfirm();
                handleClose();
              }}
              className="w-full px-6 py-3 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors shadow-sm font-medium"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}