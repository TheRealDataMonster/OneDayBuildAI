import { CheckCircle, AlertCircle, XCircle, AlertTriangle } from 'lucide-react';

export const getScoreColor = (score) => {
  if (score >= 8.5) return 'text-green-600 bg-green-50 border-green-200';
  if (score >= 7.0) return 'text-blue-600 bg-blue-50 border-blue-200';
  if (score >= 5.0) return 'text-yellow-600 bg-yellow-50 border-yellow-200';
  return 'text-red-600 bg-red-50 border-red-200';
};

export const getSafetyIcon = (rating) => {
  switch(rating) {
    case 'SAFE': 
      return <CheckCircle className="w-6 h-6 text-green-500" />;
    case 'CAUTION': 
      return <AlertCircle className="w-6 h-6 text-yellow-500" />;
    case 'HIGH RISK': 
      return <XCircle className="w-6 h-6 text-red-500" />;
    default: 
      return <AlertTriangle className="w-6 h-6 text-gray-500" />;
  }
};