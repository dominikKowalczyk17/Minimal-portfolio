export function processTimelineData(timeline) {
  const groupedData = {}

  timeline.forEach((item) => {
    if (groupedData[item.title]) {
      groupedData[item.title].details.push(item.details)
      groupedData[item.title].years.push(item.year)
    } else {
      groupedData[item.title] = {
        title: item.title,
        duration: item.duration,
        details: [item.details],
        years: [item.year],
      }
    }
  })

  return Object.values(groupedData).map((group) => ({
    ...group,
    year: group.years.join(' - '),
    details: group.details.map((detail, index) => ({
      detail,
      year: group.years[index],
    })),
  }))
}
