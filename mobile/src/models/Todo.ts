import { Saveable } from './Saveable'

export class Todo extends Saveable {
  public createdDate: Date = new Date()
  public completedDate: Date = new Date()

  constructor(name: string) {
    super()
    this.name = name
    this.completed = false
  }
}
