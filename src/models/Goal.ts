import { Saveable } from './Saveable'

export class Goal extends Saveable {
  public description: string
  public targetDate: Date = new Date()
  public createdDate: Date = new Date()
  public completedDate: Date = new Date()

  constructor(name: string, target: Date, description: string) {
    super()
    this.name = name
    this.description = description
    this.targetDate = target
  }
}
