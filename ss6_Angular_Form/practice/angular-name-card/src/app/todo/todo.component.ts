import {Component, OnInit} from '@angular/core';
import {Todo} from '../todo';
import {FormControl, FormGroup, Validators} from '@angular/forms';

let _id = 1;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  content = new FormControl();
  img = new FormControl();

  constructor() {
  }

  ngOnInit() {
  }

  toggleTodo(i: number) {
    this.todos[i].complete = !this.todos[i].complete;
  }

  change() {
    const value = this.content.value;
    const value2 = this.img.value;
    if (value) {
      if(value2){
        const todo: Todo = {
        id: _id++,
        content: value,
        img: value2,
        complete: false
      }
        this.todos.push(todo);
        this.content.reset();
        this.img.reset();
      }

    }
  }
}
