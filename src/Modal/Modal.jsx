import React from "react";
import { Sparkles } from "lucide-react"; // Optional icon lib (e.g., lucide)

export default function ModalForm({ isOpen, onClose }) {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-white/10 backdrop-blur-md z-40 transition-opacity"
        />
      )}

      {/* Modal */}
      <div
        className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-lg bg-white/90 backdrop-blur-md border border-indigo-200 rounded-2xl shadow-xl transition-all duration-500 ${
          isOpen ? "translate-y-28 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-indigo-600 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-indigo-500" />
              Automate with AI
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-red-500 text-2xl"
            >
              &times;
            </button>
          </div>

          {/* Form */}
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-indigo-800">
                Your Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-2 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-indigo-800">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-indigo-800">
                AI Task / Service
              </label>
              <input
                type="text"
                placeholder="Automation, Data Extraction, etc."
                className="w-full px-4 py-2 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition"
            >
              Request Automation
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
