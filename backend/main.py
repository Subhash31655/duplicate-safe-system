from fastapi import FastAPI

app = FastAPI(
    title="Duplicate-Safe Data Merge API",
    description="Backend API for duplicate detection and safe data merging",
    version="1.0.0"
)


@app.get("/")
def home():
    return {
        "message": "Duplicate-Safe Data Merge API is running",
        "status": "success"
    }


@app.get("/health")
def health_check():
    return {
        "status": "healthy"
    }