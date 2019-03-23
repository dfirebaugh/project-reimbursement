const { set1, set2, set3, set4 } = require("./sets");
const { projectFactory } = require("./project");

const makeGraph = set => {
  const setWithNeighbors = set.map((x, i) => {
    const project = Object.assign({}, x, {
      neighbors: [set[i - 1], set[i + 1]]
    });

    return projectFactory(project);
  });
  console.log(setWithNeighbors);
};

makeGraph(set2);
