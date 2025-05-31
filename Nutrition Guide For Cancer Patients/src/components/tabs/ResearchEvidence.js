import React from 'react';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { getScoreColor } from '../../utils/helpers';

export default function ResearchEvidence({ results, expandedSources, toggleSource }) {
  return (
    <div className="space-y-4">
      <div className="mb-6">
        <h4 className="text-xl font-semibold mb-2">Research Quality Scoring</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h5 className="font-medium mb-2">Peer Review Score (0-10)</h5>
            <p className="text-gray-600">Based on journal impact factor, reviewer expertise, and editorial rigor</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h5 className="font-medium mb-2">Reproducibility Score (0-10)</h5>
            <p className="text-gray-600">Sample size, methodology transparency, and replication potential</p>
          </div>
        </div>
      </div>

      {results.evidence.map((study, index) => (
        <div key={index} className="border border-gray-200 rounded-lg p-5">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h5 className="font-semibold text-gray-900 mb-1">{study.title}</h5>
              <p className="text-sm text-gray-600">
                {study.authors} • {study.journal} • {study.year}
              </p>
            </div>
            <div className="flex items-center space-x-2 ml-4">
              <div className={`px-3 py-1 rounded-lg border ${getScoreColor(study.overallScore)}`}>
                <span className="font-bold">{study.overallScore}/10</span>
              </div>
              <button
                onClick={() => toggleSource(index)}
                className="text-gray-400 hover:text-gray-600"
              >
                {expandedSources[index] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            </div>
          </div>
          
          <p className="text-gray-700 mb-3 font-medium">{study.finding}</p>
          
          <div className="grid grid-cols-2 gap-4 mb-3">
            <div className="text-sm">
              <span className="text-gray-600">Peer Review Score:</span>
              <span className="ml-2 font-semibold text-blue-600">{study.peerReviewScore}/10</span>
            </div>
            <div className="text-sm">
              <span className="text-gray-600">Reproducibility:</span>
              <span className="ml-2 font-semibold text-purple-600">{study.reproducibilityScore}/10</span>
            </div>
          </div>
          
          {expandedSources[index] && (
            <div className="bg-gray-50 rounded-lg p-4 mt-3 space-y-3">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-600">Study Type:</span>
                  <span className="ml-2 text-gray-800">{study.studyType}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-600">Participants:</span>
                  <span className="ml-2 text-gray-800">{study.participants}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-600">Follow-up:</span>
                  <span className="ml-2 text-gray-800">{study.followUpTime}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-600">Conflicts:</span>
                  <span className="ml-2 text-gray-800">{study.conflictsOfInterest}</span>
                </div>
              </div>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center space-x-1">
                <span>View full study</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}