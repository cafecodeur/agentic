
import React from 'react';

const ResultCard = ({ result, agentLogs = {} }) => {
  if (!result) return null;

  return (
    <div className="border-t border-gray-200 bg-gray-50 mt-6 p-6 rounded-md">
      <h2 className="text-lg font-medium text-gray-900 mb-3">Analysis Results</h2>
      <div className="text-gray-800 leading-relaxed bg-white p-4 rounded-lg shadow-inner border border-gray-200 whitespace-pre-wrap mb-4">
        {result}
      </div>

      {Object.keys(agentLogs).length > 0 && (
        <div className="mt-6">
          <h3 className="text-md font-semibold text-gray-700 mb-2">Agent Logs</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            {Object.entries(agentLogs).map(([agent, output]) => (
              <li key={agent} className="bg-white border p-3 rounded-md shadow-sm">
                <span className="font-medium text-gray-800">{agent}</span>: {output}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ResultCard;
