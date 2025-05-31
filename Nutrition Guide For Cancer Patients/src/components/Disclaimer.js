import React from 'react';
import { AlertTriangle } from 'lucide-react';

export default function Disclaimer() {
  return (
    <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
      <div className="flex items-start space-x-3">
        <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
        <div className="text-sm text-yellow-800">
          <p className="font-medium mb-1">Medical Disclaimer</p>
          <p>This tool provides research-based information but is not a substitute for professional medical advice. Always consult your oncologist, dietitian, or healthcare provider before making dietary changes during cancer treatment.</p>
        </div>
      </div>
    </div>
  );
}
