/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("questionnaire").delete();

  // Inserts seed entries
  await knex("questionnaire").insert([
    {
      question_id: 1,
      question: "rowValue1",
    },
    {
      question_id: 2,
      question: "rowValue1",
    },
    {
      question_id: 3,
      question: "rowValue1",
    },
    {
      question_id: 4,
      question: "rowValue1",
    },
    {
      question_id: 5,
      question: "rowValue1",
    },
  ]);
};
