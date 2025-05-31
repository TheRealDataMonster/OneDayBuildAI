import React from 'react';
import { Search, ArrowRight, Loader2 } from 'lucide-react';

const foodExamples = [
  "Can cancer patients eat raw fish/sushi?",
  "Is turmeric safe during chemotherapy?",
  "Can I eat grapefruit while on cancer medication?",
  "Are probiotics safe for cancer patients?",
  "Can cancer patients drink green tea?",
  "Is it safe to eat leafy greens during treatment?"
];

export default function SearchSection({ query, setQuery, handleSearch, isSearching }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Is this food safe for cancer patients?
        </h2>
        <p className="text-lg text-gray-600">
          Get evidence-based safety ratings with peer-reviewed research scores
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            placeholder="Enter a food item... (e.g., raw fish, grapefruit, turmeric)"
            className="w-full pl-12 pr-32 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none"
          />
          <button
            onClick={handleSearch}
            disabled={isSearching || !query.trim()}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
          >
            {isSearching ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <>
                <span>Analyze</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>

        <div className="mt-6">
          <p className="text-sm text-gray-500 mb-3">Common questions:</p>
          <div className="flex flex-wrap gap-2">
            {foodExamples.map((example, index) => (
              <button
                key={index}
                onClick={() => setQuery(example)}
                className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-lg transition-colors"
              >
                {example}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}