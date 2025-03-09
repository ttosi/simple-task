import { Saveable } from './Saveable'

export class Todo extends Saveable {
  constructor(name: string) {
    super()
    this.name = name
  }
}
