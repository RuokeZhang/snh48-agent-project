from fastapi import FastAPI

app = FastAPI(title="Starter API", version="0.1.0")


@app.get("/health")
def health():
    # TODO: add any readiness checks here
    return {"status": "ok"}


@app.get("/features")
def list_features():
    # TODO: return must-have/optional features from your plan
    return {"must_have": [], "optional": []}


@app.post("/generate")
def generate():
    # TODO: implement core generation logic for your idea
    return {"message": "stub"}
