const { date_diff_indays } = require("./date");
const { reimbursement } = require("./reimbursement");

const projectFactory = ({ cost, start, end, neighbors }) => {
  const project = {
    start: start,
    end: end,
    rate: cost === "high" ? 85 : 75,
    travelRate: cost === "high" ? 55 : 45,
    neighbors: {
      prev: neighbors[0] && {
        offset: date_diff_indays(neighbors[0].end, start),
        ...neighbors[0]
      },
      next: neighbors[1] && {
        offset: date_diff_indays(end, neighbors[1].start),
        ...neighbors[1]
      }
    }
  };
  return {
    ...project,
    reimbursement: () => reimbursement({ project, start, end })
  };
};

module.exports = { projectFactory };
