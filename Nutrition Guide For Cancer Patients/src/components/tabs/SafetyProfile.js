import React from 'react';
import { AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

export default function SafetyProfile({ results }) {
  return (
    <div className="space-y-6">
      <div>
        <h4 className="text-xl font-semibold mb-4 flex items-center space-x-2">
          <AlertTriangle className="w-5 h-5 text-red-500" />
          <span>Primary Risk Factors</span>
        </h4>
        <div className="space-y-3">
          {results.safety.primaryConcerns.map((concern, index) => (
            <div key={index} className="flex items-start space-x-3 p-4 bg-red-50 border border-red-200 rounded-lg">
              <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
              <p className="text-red-800">{concern}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4 flex items-center space-x-2">
          <CheckCircle className="w-5 h-5 text-green-500" />
          <span>Safe Alternatives</span>
        </h4>
        <div className="space-y-3">
          {results.safety.safeAlternatives.map((alternative, index) => (
            <div key={index} className="flex items-start space-x-3 p-4 bg-green-50 border border-green-200 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <p className="text-green-800">{alternative}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}