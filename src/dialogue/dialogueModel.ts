import { Choice } from "../choice/choiceModel"

export interface Dialogue {
  dialogue_id: number
  character_id: number
  text: string
  next_dialogue_id: number
  is_choice: boolean
  choices: Choice[]
} 
