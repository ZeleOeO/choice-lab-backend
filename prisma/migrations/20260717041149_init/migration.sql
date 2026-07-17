-- CreateTable
CREATE TABLE "Scene" (
    "scene_id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Scene_pkey" PRIMARY KEY ("scene_id")
);

-- CreateTable
CREATE TABLE "Dialogue" (
    "dialogue_id" SERIAL NOT NULL,
    "character_id" INTEGER,
    "text" TEXT NOT NULL,
    "is_choice" BOOLEAN NOT NULL DEFAULT false,
    "scene_id" INTEGER NOT NULL,
    "next_dialogue_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Dialogue_pkey" PRIMARY KEY ("dialogue_id")
);

-- CreateTable
CREATE TABLE "Choice" (
    "choice_id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "dialogue_id" INTEGER NOT NULL,
    "effect_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Choice_pkey" PRIMARY KEY ("choice_id")
);

-- CreateTable
CREATE TABLE "Effect" (
    "effects_id" SERIAL NOT NULL,
    "load_scene_id" INTEGER,
    "pick_dialogue_id" INTEGER,
    "player_state_change" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Effect_pkey" PRIMARY KEY ("effects_id")
);

-- AddForeignKey
ALTER TABLE "Dialogue" ADD CONSTRAINT "Dialogue_scene_id_fkey" FOREIGN KEY ("scene_id") REFERENCES "Scene"("scene_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dialogue" ADD CONSTRAINT "Dialogue_next_dialogue_id_fkey" FOREIGN KEY ("next_dialogue_id") REFERENCES "Dialogue"("dialogue_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Choice" ADD CONSTRAINT "Choice_dialogue_id_fkey" FOREIGN KEY ("dialogue_id") REFERENCES "Dialogue"("dialogue_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Choice" ADD CONSTRAINT "Choice_effect_id_fkey" FOREIGN KEY ("effect_id") REFERENCES "Effect"("effects_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Effect" ADD CONSTRAINT "Effect_load_scene_id_fkey" FOREIGN KEY ("load_scene_id") REFERENCES "Scene"("scene_id") ON DELETE SET NULL ON UPDATE CASCADE;
