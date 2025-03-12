import { Saveable } from './Saveable'

export class Goal extends Saveable {
  public description: string
  public targetDate: Date
  public completedDate: Date

  constructor(name: string, target: Date = new Date(), description: string) {
    super(name)
    this.description = description
    this.targetDate = target
  }
}
