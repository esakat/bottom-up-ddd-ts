/**
 * Test for the add function.
 *
 * @test
 */
import { add } from "./index";

/**
 * Adds two numbers together.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of the two numbers.
 */
test("add test", () => {
  const result = add(1, 2);
  expect(result).toBe(3);
});
