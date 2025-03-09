import { Item } from './Item'

export abstract class Saveable implements Item {
  public name: string
  public completed: boolean = false
  public created: Date = new Date()

  static save<T>(type: string, items: T[]): void {
    localStorage.setItem(type, JSON.stringify(items))
  }
}
