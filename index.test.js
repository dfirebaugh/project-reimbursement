const { set1, set2, set3, set4 } = require("./sets");
const { makeGraph, getReimbursement } = require("./makeGraph");

test("adds 1 + 2 to equal 3", () => {
  expect(3).toBe(3);
});

test("a two day project by itself would be two travel days", () => {
  expect(
    getReimbursement(
      makeGraph([{ cost: "high", start: "3/10/15", end: "3/12/15" }])
    )
  ).toBe(110);
});
test("expect set1 to be $90", () => {
  expect(getReimbursement(makeGraph(set1))).toBe(90);
});

test("expect set2 to be $520", () => {
  expect(getReimbursement(makeGraph(set2))).toBe(520);
});

test("expect set3 to be $310", () => {
  expect(getReimbursement(makeGraph(set3))).toBe(310);
});

test("expect set4 to be $310", () => {
  expect(getReimbursement(makeGraph(set3))).toBe(310);
});
