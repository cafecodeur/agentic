
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import requests
import datetime
import time
from pydantic import BaseModel

app = FastAPI()
origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["*"],
    allow_headers=["*"],
)

class WalletInput(BaseModel):
    wallet: str

def fetch_wallet_info(address):
    # Stubbed with mock data, replace with Alchemy/Etherscan for real
    now = int(time.time())
    created = now - (86400 * 30)  # 30 days old
    return {
        "address": address,
        "eth_balance": "0.42",
        "tx_count": 12,
        "token_count": 3,
        "created": created,
        "now": now
    }

def call_ollama(prompt, model):
    res = requests.post("http://localhost:11434/api/generate", json={
        "model": model,
        "prompt": prompt,
        "stream": False
    })
    return res.json()["response"]

@app.post("/analyzeWallet")
async def analyze_wallet(data: WalletInput):
    addr = data.wallet
    info = fetch_wallet_info(addr)

    age_days = (info["now"] - info["created"]) // 86400

    risk_prompt = f"""
Evaluate this wallet for risk:
- ETH Balance: {info['eth_balance']}
- Transactions: {info['tx_count']}
- Tokens: {info['token_count']}
- Age: {age_days} days

Respond with: Low Risk / Moderate Risk / High Risk and explain why.
"""
    risk_result = call_ollama(risk_prompt, "phi")

    summary_prompt = f"""
Given the following agent results:

RiskScorerAgent: {risk_result}

Final judgment: Choose one of [Trusted, Caution, Block] and explain why in 2-3 sentences.
"""
    final_summary = call_ollama(summary_prompt, "mistral")

    return {
        "verdict": (
            "Trusted" if "Trusted" in final_summary else
            "Caution" if "Caution" in final_summary else
            "Block"
        ),
        "agentLogs": {
            "RiskScorerAgent": risk_result.strip()
        },
        "summary": final_summary.strip()
    }
