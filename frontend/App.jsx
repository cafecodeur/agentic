import { useState } from 'react';
import Tabs from './components/Tabs';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    if (!input.trim()) {
      setError('Please enter some text to analyze');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("http://localhost:8000/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input })
      });

      if (!res.ok) throw new Error('Analysis failed');
      const data = await res.json();
      setResult(data.result);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white text-gray-900">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold tracking-tight">🧠 Agentic Validator</h1>
          <p className="mt-2 text-indigo-600 text-lg font-semibold">Advanced Text Analysis</p>
        </div>
        <Tabs
          input={input}
          setInput={setInput}
          handleSubmit={handleSubmit}
          result={result}
          isLoading={isLoading}
          error={error}
        />
        <p className="mt-8 text-center text-sm text-gray-500">Powered by AI agents</p>
      </div>
    </div>
  );
}

export default App;
