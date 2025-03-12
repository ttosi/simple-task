import { Item } from './Item'
import { Saveable } from './Saveable'

export class Todos extends Saveable {
  public updated: Date
  public items: Item[]

  constructor(name: string) {
    super(name)
  }
}
