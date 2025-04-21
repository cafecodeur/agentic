
import React from 'react';

const ResultCard = ({ result }) => {
  if (!result) return null;

  return (
    <div className="border-t border-gray-200 bg-gray-50 p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-3">Analysis Results</h2>
      <div className="text-gray-800 leading-relaxed bg-white p-4 rounded-lg shadow-inner border border-gray-200 whitespace-pre-wrap">
        {result}
      </div>
    </div>
  );
};

export default ResultCard;
