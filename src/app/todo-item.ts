export interface ITodoItem {
  id: number,
  title: string,
  description?: string,
  dateGenerated: Date,
  dateCompleted?: Date
}

export interface ITodoList {
  id: number,
  listTitle: string,
  items: Array<ITodoItem>
}
