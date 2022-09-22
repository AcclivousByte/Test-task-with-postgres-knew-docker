/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("articles", function (table) {
    table.increments("id");
    table.string("heading", 255).notNullable();
    table.string("content", 10000).notNullable();
    table.timestamp("created_at").defaultTo(null);
    table.timestamp("updated_at").defaultTo(null);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("articles");
};
