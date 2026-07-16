export interface Scene {
  scene_id: number
  dialogues: { [key: number]: string };
}

// Scene {
// scene_id
// dialogues: {Dialogue[
// character/person id
// text
// next choice / dialogue
// ]}
//
// choices: {Choice{
//  choice_id,
//  text,
//  effect,
// }} 
//
// effects: { Effects{
//  effects_id,
//  load_scene(3)
//  player state change
//  pick dialogue
// }
// 
// }
//
// }
