from typing import Union
from fastapi import FastAPI

app = FastAPI()

@app.post('/chat')
async def chatbot():
    return {"Hello": "World"}
