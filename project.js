const { date_diff_indays } = require("./date");

const projectFactory = ({ cost, start, end, neighbors }) => {
  return {
    start: start,
    end: end,
    rate: cost === "high" ? 85 : 75,
    travelRate: cost === "high" ? 55 : 45,
    neighbors: {
      prev: neighbors[0] && date_diff_indays(neighbors[0].end, start),
      next: neighbors[1] && date_diff_indays(end, neighbors[1].start)
    }
  };
};

module.exports = { projectFactory };
