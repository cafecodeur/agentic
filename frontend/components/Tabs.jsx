
import React, { useState } from 'react';
import AnalysisInput from './AnalysisInput';
import ResultCard from './ResultCard';
import ValidatorOnboarding from './ValidatorOnboarding';

const Tabs = ({ input, setInput, handleSubmit, result, isLoading, error }) => {
  const [activeTab, setActiveTab] = useState('analyze');

  return (
    <div className="bg-white rounded-xl shadow-md">
<div className="flex border-b border-gray-200">
  <button
    onClick={() => setActiveTab('analyze')}
    className={`px-4 py-3 w-1/2 text-center font-medium text-sm transition-colors duration-200 ${
      activeTab === 'analyze'
        ? 'text-indigo-600 border-b-2 border-indigo-600 font-semibold'
        : 'text-gray-500 hover:text-gray-700'
    }`}
  >
    🧠 Analyze Text
  </button>
  <button
    onClick={() => setActiveTab('onboard')}
    className={`px-4 py-3 w-1/2 text-center font-medium text-sm transition-colors duration-200 ${
      activeTab === 'onboard'
        ? 'text-indigo-600 border-b-2 border-indigo-600 font-semibold'
        : 'text-gray-500 hover:text-gray-700'
    }`}
  >
    🛠️ Validator Onboarding
  </button>
</div>
      <div className="p-6">
        {activeTab === 'analyze' ? (
          <>
            <AnalysisInput
              input={input}
              setInput={setInput}
              handleSubmit={handleSubmit}
              isLoading={isLoading}
              error={error}
            />
            <ResultCard result={result} />
          </>
        ) : (
          <ValidatorOnboarding />
        )}
      </div>
    </div>
  );
};

export default Tabs;
