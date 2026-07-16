import { Effects } from "../effects/effectsModel"

export interface Choice {
  choice_id: Choice
  text: string
  effects: Effects
}
