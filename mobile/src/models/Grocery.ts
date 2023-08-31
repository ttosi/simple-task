import { Saveable } from './Saveable'

export class Grocery extends Saveable {
  public recurring: boolean

  constructor(name: string, recurring: boolean = false) {
    super()
    this.name = name
    this.recurring = recurring
    this.completed = false
  }
}
