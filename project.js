const { date_diff_indays } = require("./date");
const { logger } = require("./logger");

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

      const hasPrevGap = prev ? prev.offset > 1 : true;
      const hasNextGap = next ? next.offset > 1 : true;
      logger(
        "\n-------------------\n",
        "projectRate: ",
        project.rate,
        "\nstandard work days: ",
        days,
        "\ntravelRate: ",
        project.travelRate,
        "\ntravelDays: ",
        travelDays,
        "\nprevOffset:",
        prev && prev.offset,
        "\nnextOffset:",
        next && next.offset,
        "\n-------------------\n"
      );

      logger("noGap: ", days === 0 && (!hasPrevGap || !hasNextGap));
      if (days === 0 && (!hasPrevGap || !hasNextGap)) {
        // if days equal 0 but there is no gap,
        // then we need to charge as a travel day
        // return project.travelRate * 1;
        return {
          full: 0,
          travel: 1,
          fullRate: project.rate,
          travelRate: project.travelRate
        };
      } else if (days === 0 && hasPrevGap && hasNextGap) {
        // if it is only a one day project
        // and offset is not 0
        // charge for full project day
        return {
          full: 1,
          travel: 0,
          fullRate: project.rate,
          travelRate: project.travelRate
        };
      }

      // if project is only two isolated days
      // it's two travel days
      if (days === 1 && hasPrevGap && hasNextGap) {
        return {
          full: 0,
          travel: 2,
          fullRate: project.rate,
          travelRate: project.travelRate
        };
      }

      if (!prev || prev.offset > 1) {
        travelDays++;
        days > 1 && days--;
      }

      if (!next || next.offset > 1) {
        travelDays++;
        days > 1 && days--;
      }

      if ((next && next.offset === 1) || (prev && prev.offset === 1)) {
        logger("adding a day");
        days++;
      }

      // TODO--handle overlap
      if (prev && prev.offset < 0 && prev.cost === "high") {
      }

      if (next && next.offset < 0 && next.cost === "high") {
      }

      return {
        full: days,
        travel: travelDays,
        fullRate: project.rate,
        travelRate: project.travelRate
      };
    }
  };
};

module.exports = { projectFactory };
