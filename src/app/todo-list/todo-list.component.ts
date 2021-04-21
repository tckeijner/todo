import { Component, OnInit } from '@angular/core';
import { ITodoItem, ITodoList } from '../todo-item';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../data.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoList: ITodoList;
  itemsForm: FormGroup;
  itemsFormArray: FormArray;

  get items(): FormArray {
    return this.itemsForm.get('items') as FormArray;
  }

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.dataService.getList(id).subscribe(
      list => {
        this.todoList = list;
        this.itemsForm = this.fb.group({
          listTitle: this.todoList.listTitle,
          items: this.fb.array([]),
          newItem: this.fb.group({ title: '' })
        })
        this.todoList.items.forEach(item => this.addItem(item))
      }
    )
  }

  createItem(item: ITodoItem) {
    return this.fb.group({
      title: item.title,
      description: item.description,
      completed: item.dateCompleted !== undefined,
      dateGenerated: item.dateGenerated.toISOString()
    })
  }

  addItem(item: ITodoItem) {
    const newItem = this.createItem(item);
    this.itemsFormArray = this.itemsForm.get('items') as FormArray;
    this.itemsFormArray.push(newItem);
  }

  onAddNew(event: any) {
    let ids = this.todoList.items.map(item => item.id)
    const newTitle: string = event.target.value;
    const newDate: Date = new Date();
    const todoItem: ITodoItem = {
      id: Math.max(...ids) + 1,
      title: newTitle,
      dateGenerated: newDate
    };
    this.addItem(todoItem);
    this.itemsForm.get('newItem')?.reset();
    this.todoList.items.push(todoItem);
    this.dataService.updateList(this.todoList).subscribe();
  }

  onListNameUpdate(event: any) {
    this.itemsForm.patchValue({ listTitle: event.target.value })
  }

  onSubmit(value: string): void {
    console.log('you saved: ', value)
  }

}
