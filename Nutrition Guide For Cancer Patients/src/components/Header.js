import React from 'react';
import { Heart } from 'lucide-react';

export default function Header() {
  return (
    <div className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                CancerNutrition.ai
              </h1>
              <p className="text-sm text-gray-600">Evidence-based food safety for cancer patients</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-500">Always consult your oncologist</p>
            <p className="text-xs text-gray-500">before making dietary changes</p>
          </div>
        </div>
      </div>
    </div>
  );
}