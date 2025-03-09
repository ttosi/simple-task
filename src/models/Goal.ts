import { Saveable } from './Saveable'

export class Goal extends Saveable {
  public description: string
  // public targetDate: Date = new Date()
  // public created: Date = new Date()
  // public completed: Date = new Date()

  constructor(name: string, target: Date, description: string) {
    super()
    // this.name = name
    this.description = description
    // this.targetDate = target
  }
}

const goals = []
goals.push(new Goal('test', new Date(), 'description'))
Goal.save('goals', goals)
