export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('scores').del()

  await knex('scores').insert([
    { id: 1, name: 'john', score: 12 },
    { id: 2, name: 'jane', score: 23 },
  ])
}
