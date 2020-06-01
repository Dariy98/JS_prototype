function Todos() {
  this.array = [];
}
Todos.prototype.addTodo = function(title, description) {
  this.array.push({ title, description, completed: false });
  return this;
};
Todos.prototype.toggleTodo = function(index) {
  this.array = this.array.map((todo, i) => {
    if (i === index) {
      return { ...todo, completed: !todo.completed };
    }
    return todo;
  });
};
Todos.prototype.deleteTodo = function(index) {
  this.array = this.array.filter((_, i) => i !== index);
};
Todos.prototype.updateTodo = function(index, todo) {
  let newObj = {
    title: todo.title,
    description: todo.description
  };
  this.array = this.array.map((todo, i) => {
    if (i === index) {
      if (newObj.title === undefined) newObj.title = todo.title;
      if (newObj.description === undefined)
        newObj.description = todo.description;
      if (newObj.completed === undefined) newObj.completed = todo.completed;
      return (todo = newObj);
    }
    return todo;
  });
};
Todos.prototype.filterTodos = function(filter) {
  this.array = this.array.filter(todo => {
    if (filter === "active") return todo.completed === false;
    if (filter === "completed") return todo.completed === true;
    return this.todos;
  });
};
Todos.prototype.searchTodos = function(search) {
  this.array = this.array.filter(todo => {
    return todo.title.includes(search);
  });
};
Todos.prototype.toggleTodos = function(completed) {
  this.array = this.array.map(todo => {
    todo.completed = completed;
    return todo;
  });
};
Todos.prototype.clearCompletedTodos = function() {
  this.array = this.array.filter(todo => todo.completed === false);
};

const todos = new Todos();
todos.addTodo("Test", "testdesc");
todos.addTodo("удалить", "удалить описание");
todos.addTodo("задача 3", "описание");
todos.addTodo("задача ачаача", "деск");
// todos.toggleTodo(0);
// todos.deleteTodo(1);
// todos.updateTodo(1, { title: "Новый титул", description: "Новое описание" });
// todos.filterTodos("completed");
// todos.searchTodos("3");
// todos.toggleTodos(true);
// todos.clearCompletedTodos();
console.log(todos);
