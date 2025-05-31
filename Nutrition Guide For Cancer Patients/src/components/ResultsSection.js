import React from 'react';
import { Shield, BookOpen, Users, AlertTriangle } from 'lucide-react';
import SafetyProfile from './tabs/SafetyProfile';
import ResearchEvidence from './tabs/ResearchEvidence';
import ClinicalGuidelines from './tabs/ClinicalGuidelines';
import TreatmentInteractions from './tabs/TreatmentInteractions';
import { getSafetyIcon } from '../utils/helpers';

const tabs = [
  { id: 'safety', label: 'Safety Profile', icon: Shield },
  { id: 'evidence', label: 'Research Evidence', icon: BookOpen },
  { id: 'guidelines', label: 'Clinical Guidelines', icon: Users },
  { id: 'interactions', label: 'Treatment Interactions', icon: AlertTriangle }
];

export default function ResultsSection({ results, activeTab, setActiveTab, expandedSources, toggleSource }) {
  const renderTabContent = () => {
    switch(activeTab) {
      case 'safety':
        return <SafetyProfile results={results} />;
      case 'evidence':
        return <ResearchEvidence results={results} expandedSources={expandedSources} toggleSource={toggleSource} />;
      case 'guidelines':
        return <ClinicalGuidelines results={results} />;
      case 'interactions':
        return <TreatmentInteractions results={results} />;
      default:
        return <SafetyProfile results={results} />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">{results.foodItem}</h3>
              <p className="opacity-90">Safety Analysis for Cancer Patients</p>
            </div>
            <div className="text-right">
              <div className="flex items-center space-x-2 mb-2">
                {getSafetyIcon(results.safetyRating)}
                <span className="text-xl font-bold">{results.safetyRating}</span>
              </div>
              <div className="text-sm opacity-90">Overall Evidence Score</div>
              <div className="text-2xl font-bold">{results.overallScore}/10</div>
            </div>
          </div>
        </div>

        {/* Quick Summary */}
        <div className="p-6 bg-gray-50 border-b">
          <div className="flex items-start space-x-4">
            <div className={`px-4 py-2 rounded-full font-bold text-sm ${
              results.recommendation === 'AVOID' ? 'bg-red-100 text-red-800' :
              results.recommendation === 'CAUTION' ? 'bg-yellow-100 text-yellow-800' :
              'bg-green-100 text-green-800'
            }`}>
              {results.recommendation}
            </div>
            <p className="text-gray-700 flex-1">{results.summary}</p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                  activeTab === id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}