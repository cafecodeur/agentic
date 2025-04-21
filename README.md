
# Agentic AI PoC: Cintara Validator Simulation

This PoC demonstrates agentic AI concepts using AgentScope.
It includes:
- A React+Vite frontend
- A Python backend with AgentScope agents (Classifier, KYCVerifier, RiskScorer, ResponseSynthesizer)
- Ollama (MiniLM) integration for local inference

To run:
1. Start the backend: `cd backend && pip install -r requirements.txt && python main.py`
2. Start the frontend: `cd frontend && npm install && npm run dev`

Note: Requires Ollama running with `ollama run miniLM`.
