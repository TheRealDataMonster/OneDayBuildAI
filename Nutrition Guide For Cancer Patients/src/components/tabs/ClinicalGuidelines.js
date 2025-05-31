import React from 'react';

export default function ClinicalGuidelines({ results }) {
  return (
    <div className="space-y-4">
      <h4 className="text-xl font-semibold mb-4">Professional Organization Guidelines</h4>
      {results.guidelines.map((guideline, index) => (
        <div key={index} className="border border-gray-200 rounded-lg p-5">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h5 className="font-semibold text-gray-900">{guideline.organization}</h5>
              <p className="text-lg font-medium text-gray-800 mt-2">{guideline.recommendation}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              guideline.strength === 'Strong' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
            }`}>
              {guideline.strength} Recommendation
            </span>
          </div>
          <p className="text-gray-600">{guideline.reasoning}</p>
        </div>
      ))}
    </div>
  );
}