import { IItem } from './IItem'

export abstract class Saveable implements IItem {
  public name: string | ''
  public completed: boolean | false

  static save<T>(type: string, items: T[]): void {
    localStorage.setItem(type, JSON.stringify(items))
  }
}
