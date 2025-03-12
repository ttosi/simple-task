import { Item } from './Item'

export abstract class Saveable implements Item {
  public name: string
  public completed: boolean
  public created: Date

  constructor(name: string) {
    this.name = name
    this.completed = false
    this.created = new Date()
  }

  static save<T>(type: string, items: T[]): void {
    localStorage.setItem(type, JSON.stringify(items))
  }
}
