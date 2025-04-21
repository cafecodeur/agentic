
import React from 'react';

const AnalysisInput = ({ input, setInput, handleSubmit, isLoading, error }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="mb-4">
        <label htmlFor="analysis-input" className="block text-sm font-medium text-gray-700">
          Enter your text for analysis
        </label>
        <textarea
          id="analysis-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          rows={8}
          placeholder="Paste or type the content you want to analyze..."
          disabled={isLoading}
        />
      </div>
      {error && (
        <div className="mb-4 text-sm text-red-600">
          {error}
        </div>
      )}
      <button
        onClick={handleSubmit}
        disabled={isLoading}
        className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
          isLoading ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        }`}
      >
        {isLoading ? (
          <div className="flex items-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Analyzing...
          </div>
        ) : (
          'Analyze Text'
        )}
      </button>
    </div>
  );
};

export default AnalysisInput;
