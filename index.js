const { set1, set2, set3, set4 } = require("./sets");
const { makeGraph } = require("./makeGraph");
const { logger } = require("./logger");

logger(makeGraph(set3).map(x => x.full * x.fullRate + x.travel * x.travelRate));
