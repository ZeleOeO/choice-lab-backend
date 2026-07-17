import { prisma } from "../src/lib/prisma.ts";

// Seeds a tiny, self-contained story that exercises every relation:
// Scene -> Dialogue -> Choice -> Effect -> Scene.
async function main() {
  const existing = await prisma.scene.count();
  if (existing > 0) {
    console.log(`Database already has ${existing} scene(s); skipping seed.`);
    return;
  }

  // The scene a choice can load into via an effect.
  const forest = await prisma.scene.create({
    data: {
      dialogues: {
        create: [
          { character_id: 1, text: "You step into the quiet forest.", is_choice: false },
        ],
      },
    },
  });

  // The opening scene: a single dialogue that branches into two choices.
  const intro = await prisma.scene.create({
    data: {
      dialogues: {
        create: [
          {
            character_id: 1,
            text: "A crossroads appears before you.",
            is_choice: true,
            choices: {
              create: [
                {
                  text: "Take the forest path.",
                  effect: {
                    create: {
                      load_scene_id: forest.scene_id,
                      player_state_change: { courage: 1 },
                    },
                  },
                },
                {
                  text: "Turn back home.",
                  effect: {
                    create: {
                      player_state_change: { courage: -1 },
                    },
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });

  console.log(`Seeded scene ${intro.scene_id} (intro) and scene ${forest.scene_id} (forest).`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
