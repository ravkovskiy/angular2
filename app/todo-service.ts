//import {Injectable} from "angular2/core";
import {TodoModel} from "./todo-model";
export class TodoService {
    todos = [
        new TodoModel("eat"),
        new TodoModel("sleep"),
        new TodoModel("code")
    ];
    addTodo(todo) {
        this.todos = [...this.todos, todo];
    }
}