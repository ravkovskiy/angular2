import {Component} from 'angular2/core';
import {TodoInput} from "./todo-input";

@Component({
    selector: 'my-app',
    directives: [TodoInput],
    template: 'Hello world!<todo-input></todo-input>'
})
export class AppComponent { }
