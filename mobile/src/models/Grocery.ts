import { Saveable } from './Saveable'

export class Grocery extends Saveable {
  public departmentId: number
  public recurring: boolean

  constructor(name: string, departmentId: number = 1, recurring: boolean = false) {
    super()
    this.name = name
    this.departmentId = departmentId
    this.recurring = recurring
    this.completed = false
  }
}
