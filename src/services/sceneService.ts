import type { Scene } from "../models/sceneModel.ts"

const scene_array: Scene[] = [
  { scene_id: 1, dialogues: { 1: "hello", 2: "howdy", 3: "sup", 4: "nigger" } },
  { scene_id: 2, dialogues: { 1: "good morning", 2: "hey there", 3: "morning", 4: "how's it going" } },
  { scene_id: 3, dialogues: { 1: "what's new", 2: "not much", 3: "same old", 4: "anything exciting" } },
  { scene_id: 4, dialogues: { 1: "nice weather", 2: "yeah it's great", 3: "sunny today", 4: "perfect for a walk" } },
  { scene_id: 5, dialogues: { 1: "coffee time", 2: "i need one", 3: "me too", 4: "let's grab some" } },
  { scene_id: 6, dialogues: { 1: "good night", 2: "sleep well", 3: "sweet dreams", 4: "see you tomorrow" } }
]

export function loadScene(scene_id: number): Scene {
  let chosen_scene = scene_array.find(scene => scene.scene_id === scene_id)
  if (chosen_scene == undefined) throw new Error("User not found")
  return chosen_scene
}
