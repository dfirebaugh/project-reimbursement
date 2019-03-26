const { set1, set2, set3, set4 } = require("./sets");
const { makeGraph, getReimbursement } = require("./makeGraph");

test("a single day project is a full day if it is standing alone", () => {
  expect(
    getReimbursement(
      makeGraph([{ cost: "high", start: "3/08/15", end: "3/08/15" }])
    )
  ).toBe(85);
});
test("a single day project on the end of a series of projects is a travel day", () => {
  expect(
    getReimbursement(
      makeGraph([
        { cost: "high", start: "3/08/15", end: "3/11/15" },
        { cost: "high", start: "3/12/15", end: "3/12/15" }
      ])
    )
  ).toBe(365);
});

test("a single day project at the begining of a series of projects is a travel day", () => {
  expect(
    getReimbursement(
      makeGraph([
        { cost: "high", start: "3/11/15", end: "3/11/15" },
        { cost: "high", start: "3/12/15", end: "3/15/15" }
      ])
    )
  ).toBe(365);
});

test("a two day project by itself would be two travel days", () => {
  expect(
    getReimbursement(
      makeGraph([{ cost: "high", start: "3/11/15", end: "3/12/15" }])
    )
  ).toBe(110);
});

test("expect set1 to be $165", () => {
  expect(getReimbursement(makeGraph(set1))).toBe(165);
});

test("expect set2 to be $590", () => {
  expect(getReimbursement(makeGraph(set2))).toBe(590);
});

test("expect set3 to be $445", () => {
  expect(getReimbursement(makeGraph(set3))).toBe(445);
});

test("expect set4 to be $185", () => {
  expect(getReimbursement(makeGraph(set3))).toBe(185);
});
