import {Component} from "angular2/core";

@Component({
    selector: 'todo-input',
    template: `<div>
    <input type="text" #myInput>
    <button (click)="onClick(myInput.value, $event)">Click me</button>
    </div>`
})
export class TodoInput{
    onClick(value, event){
        console.log(value, event);
    }
}