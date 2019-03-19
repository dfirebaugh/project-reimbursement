const projectFactory = ({ cityCost, startDate, endDate }) => {
  return {
    start: startDate,
    end: endDate,
    rate: cityCost === "high" ? 85 : 75,
    travelRate: cityCost === "high" ? 55 : 45,
  }
}

export default projectFactory;