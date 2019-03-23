const set1 = [{ cost: "low", start: "9/1/15", end: "9/3/15" }];
const set2 = [
  { cost: "low", start: "9/1/15", end: "9/1/15" },
  { cost: "high", start: "9/2/15", end: "9/6/15" },
  { cost: "low", start: "9/6/15", end: "9/8/15" }
];
const set3 = [
  { cost: "low", start: "9/1/15", end: "9/3/15" },
  { cost: "high", start: "9/5/15", end: "9/7/15" },
  { cost: "ligh", start: "9/8/15", end: "9/8/15" }
]
const set4 = [
  { cost: "low", start: "9/1/15", end: "9/1/15" },
  { cost: "low", start: "9/1/15", end: "9/1/15" },
  { cost: "high", start: "9/2/15", end: "9/2/15" },
  { cost: "high", start: "9/2/15", end: "9/3/15" }
]

module.exports = {
  set1,
  set2,
  set3,
  set4
}