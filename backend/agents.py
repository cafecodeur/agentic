
import requests

def classify(input):
    if "passport" in input.lower():
        return ["KYCVerifierAgent"]
    elif "transfer" in input.lower():
        return ["RiskScorerAgent"]
    else:
        return ["KYCVerifierAgent", "RiskScorerAgent"]

def verify_kyc(input):
    return "KYC Verified ✅" if "passport" in input.lower() else "KYC Failed ❌"

def risk_score(input):
    return "Low Risk 🟢" if "safe" in input.lower() else "High Risk 🔴"

def call_llm(prompt):
    response = requests.post("http://localhost:11434/api/generate", json={
        "model": "mistral:7b-instruct",
        "prompt": prompt,
        "stream": False
    })
    return response.json()["response"]

def summarize(input, results):
    kyc = results.get('KYCVerifierAgent', 'N/A')
    risk = results.get('RiskScorerAgent', 'N/A')
    summary_prompt = f"KYC result: {kyc}. Risk result: {risk}. Write a user-friendly summary of the input: '{input}'"
    return call_llm(summary_prompt)

def run_agentic_pipeline(user_input):
    selected = classify(user_input)
    results = {}
    if "KYCVerifierAgent" in selected:
        results["KYCVerifierAgent"] = verify_kyc(user_input)
    if "RiskScorerAgent" in selected:
        results["RiskScorerAgent"] = risk_score(user_input)
    return summarize(user_input, results)
