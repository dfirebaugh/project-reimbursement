const { set1, set2, set3, set4 } = require("./sets");
const { projectFactory } = require("./project");

const makeGraph = set => {
  const setWithNeighbors = set
    .sort((a, b) => {
      if (a.start === b.start) {
        return a.end > b.end;
      }
      return a.start > b.start;
    })
    .map((x, i) => {
      const project = {
        ...x,
        neighbors: [set[i - 1], set[i + 1]]
      };

      return projectFactory(project);
    });
  console.log(setWithNeighbors.map(x => x.neighbors));
  console.log(
    setWithNeighbors.map(x => x.reimbursement())
    // .reduce((acc, curr) => acc + curr)
  );
};

makeGraph(set3);
