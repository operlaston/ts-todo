from datetime import datetime
from fastapi import FastAPI
from pydantic.main import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:3001"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,         # List of allowed origins
    allow_credentials=True,        # Allow cookies to be sent with requests
    allow_methods=["*"],           # Allow all methods (GET, POST, PUT, DELETE, etc.)
    allow_headers=["*"],           # Allow all headers
)

class Todo(BaseModel):
    id: int | None = None
    title: str
    status: str = "not started"
    dueDate: str

global_todos: list[Todo] = []
global_id_ctr: int = 0

@app.get("/todos", response_model=list[Todo])
async def get_todos():
    return global_todos

@app.get("/todos/{id}", response_model=Todo)
async def get_todo_by_id(id: int):
    return global_todos[id]

@app.post("/todos", response_model=Todo)
async def create_todo(todo: Todo):
    global global_id_ctr
    todo.id = global_id_ctr
    global_id_ctr += 1
    global_todos.append(todo)
    return todo
