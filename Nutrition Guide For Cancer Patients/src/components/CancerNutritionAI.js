import React, { useState } from 'react';
import { Search, Heart, BookOpen, Users, Shield, ArrowRight, Loader2, ExternalLink, ChevronDown, ChevronUp, AlertTriangle, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { mockData } from '../data/mockData';
import Header from './Header';
import SearchSection from './SearchSection';
import ResultsSection from './ResultsSection';
import FeaturesSection from './FeaturesSection';
import Disclaimer from './Disclaimer';

export default function CancerNutritionAI() {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState(null);
  const [activeTab, setActiveTab] = useState('safety');
  const [expandedSources, setExpandedSources] = useState({});

  const handleSearch = async () => {
    if (!query.trim()) return;
    
    setIsSearching(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    // Get mock data based on query (in real app, this would be an API call)
    const mockResults = mockData.getFoodSafetyData(query);
    setResults(mockResults);
    setIsSearching(false);
  };

  const toggleSource = (index) => {
    setExpandedSources(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header />
      <div className="max-w-6xl mx-auto px-6 py-8">
        <SearchSection 
          query={query}
          setQuery={setQuery}
          handleSearch={handleSearch}
          isSearching={isSearching}
        />
        
        {results ? (
          <ResultsSection 
            results={results}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            expandedSources={expandedSources}
            toggleSource={toggleSource}
          />
        ) : (
          <FeaturesSection />
        )}
        
        <Disclaimer />
      </div>
    </div>
  );
}