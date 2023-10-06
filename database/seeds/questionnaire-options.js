/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("options").delete();

  await knex("options").insert([
    { id: 1, question_id: "1", option: "option1" },
    { id: 2, question_id: "1", option: "option2" },
    { id: 3, question_id: "1", option: "option3" },
  ]);
};
