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
  return setWithNeighbors.map(x => x.reimbursement());
};

const getReimbursement = graph => {
  return graph.reduce((acc, curr) => acc + curr);
};

module.exports = {
  makeGraph,
  getReimbursement
};
