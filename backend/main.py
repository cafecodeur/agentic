
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from agents import run_agentic_pipeline

app = FastAPI()
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])

@app.post("/analyze")
async def analyze(req: Request):
    data = await req.json()
    result = run_agentic_pipeline(data["input"])
    return {"result": result}
