import { Item } from './Item'

export class Grocery extends Item {
  public recurring?: boolean = false

  constructor(name: string, recurring: boolean) {
    super()
    this.name = name
    this.recurring = recurring
  }
}
