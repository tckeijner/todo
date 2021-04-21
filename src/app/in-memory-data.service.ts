import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ITodoList } from './todo-item'

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const allLists: Array<ITodoList> = [
      {
        id: 1,
        listTitle: "My first todo list",
        items: [{
          id: 1,
          title: 'dishes',
          description: 'do the dishes',
          dateGenerated: new Date('2021-04-13T12:00:00')
        },
        {
          id: 2,
          title: 'trash',
          description: 'take out the trash',
          dateGenerated: new Date('2021-04-13T13:00:00')
        },
        {
          id: 3,
          title: 'groceries',
          description: 'do some shopping',
          dateGenerated: new Date('2021-04-13T13:00:00'),
          dateCompleted: new Date('2021-04-14T18:00:00')
        }]
      },
      {
        id: 2,
        listTitle: "My second todo list",
        items: [{
          id: 1,
          title: 'gheseg',
          description: 'do the dishes',
          dateGenerated: new Date('2021-04-13T12:00:00')
        },
        {
          id: 2,
          title: 'trasedgassh',
          description: 'take out the trash',
          dateGenerated: new Date('2021-04-13T13:00:00')
        },
        {
          id: 3,
          title: 'grogwawaceries',
          description: 'do some shopping',
          dateGenerated: new Date('2021-04-13T13:00:00'),
          dateCompleted: new Date('2021-04-14T18:00:00')
        }]
      },
      {
        id: 3,
        listTitle: "My third todo list",
        items: [{
          id: 1,
          title: 'ghebaswdwsaseg',
          description: 'do the dishes',
          dateGenerated: new Date('2021-04-13T12:00:00')
        },
        {
          id: 2,
          title: 'trasedbdzsvgassh',
          description: 'take out the trash',
          dateGenerated: new Date('2021-04-13T13:00:00')
        },
        {
          id: 3,
          title: 'grogwawsagvwaceries',
          description: 'do some shopping',
          dateGenerated: new Date('2021-04-13T13:00:00'),
          dateCompleted: new Date('2021-04-14T18:00:00')
        }]
      },
    ];
    return {allLists};

  }
  constructor() { }
}
