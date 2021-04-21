import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ITodoList } from '../todo-item';


@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  lists: Array<ITodoList>;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getLists().subscribe(lists => this.lists = lists)
  }

}
