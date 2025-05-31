import React from 'react';
import { BookOpen, Shield, Heart } from 'lucide-react';

export default function FeaturesSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
          <BookOpen className="w-6 h-6 text-blue-600" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Rigorous Scoring</h3>
        <p className="text-gray-600">
          Every study rated on peer-review quality and reproducibility with transparent methodology.
        </p>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-lg">
        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
          <Shield className="w-6 h-6 text-purple-600" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Cancer-Specific</h3>
        <p className="text-gray-600">
          Focused on immunocompromised patients with treatment-specific risk assessments.
        </p>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-lg">
        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
          <Heart className="w-6 h-6 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Safe Alternatives</h3>
        <p className="text-gray-600">
          Not just warnings - practical alternatives to help maintain nutrition and quality of life.
        </p>
      </div>
    </div>
  );
}