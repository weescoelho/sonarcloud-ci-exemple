const sum = require("./sum");

it("should be return 5", () => {
  const result = sum(2, 3);
  expect(result).toBe(5);
});
