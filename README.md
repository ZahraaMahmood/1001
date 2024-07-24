# Todo API


A simple RESTful API for managing Todos✨

## Requirements

- Node.js
- npm
## Setup

1. Clone the repository:
   git clone <repository-url>
2. Install dependencies:
To install the dependencies, use the command
`npm install`

3. Run the project
   Using the command: ```sh npm run dev```


## API Endpoints

- **POST /todos**: Create a new Todo.
- Body: `{ "title": "Todo Title", "description": "Todo Description" }`
- **GET /todos**: Retrieve a list of all Todos.
- **GET /todos/:id**: Retrieve a single Todo by its ID.
- **PUT /todos/:id**: Update a Todo by its ID.
- Body: `{ "title": "New Title", "description": "New Description", "completed": true }`
- **DELETE /todos/:id**: Delete a Todo by its ID.

## Example Usage

```sh
# Create a new Todo
curl -X POST -H "Content-Type: application/json" -d '{"title": "Learn Node.js", "description": "Complete the Node.js tutorial"}' http://localhost:3000/todos

# Retrieve all Todos
curl http://localhost:3000/todos

# Retrieve a single Todo
curl http://localhost:3000/todos/1

# Update a Todo
curl -X PUT -H "Content-Type: application/json" -d '{"title": "Learn Node.js", "description": "Complete the advanced Node.js tutorial", "completed": true}' http://localhost:3000/todos/1

# Delete a Todo
curl -X DELETE http://localhost:3000/todos/1
