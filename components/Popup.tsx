"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, AlertCircle } from "lucide-react";

interface PopupProps {
  show: boolean;
  type: 'success' | 'error';
  message: string;
  onClose: () => void;
  title?: string;
}

export default function Popup({ 
  show, 
  type, 
  message, 
  onClose, 
  title 
}: PopupProps) {
  const getTitle = () => {
    if (title) return title;
    return type === 'success' ? 'Success!' : 'Error';
  };

  const getButtonText = () => {
    return type === 'success' ? 'Great!' : 'Try Again';
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="glass-card p-8 rounded-2xl max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label="Close popup"
            >
              <X size={20} className="text-gray-500 dark:text-gray-400" />
            </button>

            {/* Icon */}
            <div className="flex justify-center mb-6">
              <motion.div
                className={`w-16 h-16 rounded-full flex items-center justify-center ${
                  type === 'success' 
                    ? 'bg-green-100 dark:bg-green-900' 
                    : 'bg-red-100 dark:bg-red-900'
                }`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1 }}
              >
                {type === 'success' ? (
                  <CheckCircle size={32} className="text-green-600 dark:text-green-400" />
                ) : (
                  <AlertCircle size={32} className="text-red-600 dark:text-red-400" />
                )}
              </motion.div>
            </div>

            {/* Message */}
            <div className="text-center">
              <h3 className={`text-xl font-bold mb-2 ${
                type === 'success' 
                  ? 'text-green-600 dark:text-green-400' 
                  : 'text-red-600 dark:text-red-400'
              }`}>
                {getTitle()}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {message}
              </p>
            </div>

            {/* Action Button */}
            <div className="mt-6 flex justify-center">
              <motion.button
                onClick={onClose}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                  type === 'success'
                    ? 'bg-green-600 hover:bg-green-700 text-white'
                    : 'bg-red-600 hover:bg-red-700 text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {getButtonText()}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 