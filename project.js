const { date_diff_indays } = require("./date");

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
    reimbursement: () => {
      const { prev, next } = project.neighbors;
      let days = date_diff_indays(start, end);
      let travelDays = 0;

      if (!prev || prev.offset > 0) {
        travelDays++;
        days > 0 && days--;
      }

      if (!prev || prev.offset > 0) {
        travelDays++;
        days > 0 && days--;
      }

      // TODO--handle overlap
      if (prev && prev.offset < 0 && prev.cost === "high") {
      }

      if (next && next.offset < 0 && next.cost === "high") {
      }
      console.log(
        "\n-------------------\n",
        "projectRate: ",
        project.rate,
        "\nstandard work days: ",
        days,
        "\ntravelRate: ",
        project.travelRate,
        "\ntravelDays: ",
        travelDays,
        "\n-------------------\n"
      );
      return project.rate * days + project.travelRate * travelDays;
    }
  };
};

module.exports = { projectFactory };
