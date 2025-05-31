import React from 'react';

export default function TreatmentInteractions({ results }) {
  return (
    <div className="space-y-4">
      <h4 className="text-xl font-semibold mb-4">Cancer Treatment Interactions</h4>
      {results.interactions.withTreatments.map((interaction, index) => (
        <div key={index} className="border border-gray-200 rounded-lg p-5">
          <div className="flex items-center justify-between mb-3">
            <h5 className="font-semibold text-gray-900">{interaction.treatment}</h5>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              interaction.risk === 'High' ? 'bg-red-100 text-red-700' :
              interaction.risk === 'Moderate' ? 'bg-yellow-100 text-yellow-700' :
              'bg-green-100 text-green-700'
            }`}>
              {interaction.risk} Risk
            </span>
          </div>
          <p className="text-gray-700">{interaction.details}</p>
        </div>
      ))}
    </div>
  );
}