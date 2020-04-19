const getDataForWeekday = (tracks) => {
  const dataWeekday = [{day: "Sunday", count: 0, percentage:0},{day: "Monday", count: 0, percentage:0},{day: "Tuesday", count: 0, percentage:0},{day: "Wednesday", count: 0, percentage:0},{day: "Thursday", count: 0, percentage:0},{day: "Friday", count: 0, percentage:0},{day: "Saturday", count: 0, percentage:0}]
  tracks.forEach((track) => {
    let d = new Date(track.added_at)
    dataWeekday[d.getDay()].count++
  })
  dataWeekday.forEach((day) => {
    day.percentage = (day.count/tracks.length)*100
  })
  return dataWeekday
}

const getDataForValence = (tracks) => {
  const data = [{day: "Sad", count: 0, percentage:0},{day: "OK", count: 0, percentage:0},{day: "Happy", count: 0, percentage:0}]
  tracks.forEach((x) => {
    if(x.track.valence < 0.33){
      data[0].count++
    }else if(x.track.valence > 0.66){
      data[2].count++
    }else{
      data[1].count++
    }
  })
  data.forEach((day) => {
    day.percentage = (day.count/tracks.length)*100
  })
  return data
}

const getDataForEnergy = (tracks) => {
  const data = [{day: "Low", count: 0, percentage:0},{day: "OK", count: 0, percentage:0},{day: "High", count: 0, percentage:0}]
  tracks.forEach((x) => {
    if(x.track.energy < 0.33){
      data[0].count++
    }else if(x.track.energy > 0.66){
      data[2].count++
    }else{
      data[1].count++
    }
  })
  data.forEach((day) => {
    day.percentage = (day.count/tracks.length)*100
  })
  return data
}

const getDataForDanceability = (tracks) => {
  const data = [{day: "Chill Music", count: 0, percentage:0},{day: "Do what you want", count: 0, percentage:0},{day: "Party Song", count: 0, percentage:0}]
  tracks.forEach((x) => {
    if(x.track.danceability < 0.60){
      data[0].count++
    }else if(x.track.danceability > 0.80){
      data[2].count++
    }else{
      data[1].count++
    }
  })
  data.forEach((day) => {
    day.percentage = (day.count/tracks.length)*100
  })
  return data
}

const getMeanData = (tracks) => {
  const total = tracks.length
  const organiser = (type) => val => val.track[type]
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const getDataForValue = x => Number((tracks.map(organiser(x)).reduce(reducer)/total).toFixed(2))
  return [{day: 'Valence', percentage: getDataForValue("valence")},{day: 'Danceability', percentage: getDataForValue("danceability")},{day: 'Energy', percentage: getDataForValue("energy")},{day: 'Instrumentalness', percentage: getDataForValue("instrumentalness")},{day: 'Acousticness', percentage: getDataForValue("acousticness")},{day: 'Liveness', percentage: getDataForValue("liveness")},{day: 'Speechiness', percentage: getDataForValue("speechiness")}]
}

const getStdDeviation = (tracks, means) => {
  means.forEach((val) => { 
    const mean = val.percentage
    val.percentage = Number((Math.sqrt(tracks.map((x) => {
      const result = (Number(x.track[val.day.toLowerCase()] - mean).toFixed(2)*100)
      return Math.pow(result,2)
    }).reduce((acc, cur) => acc+cur)/tracks.length)/100).toFixed(2))
  })
  return means
}

const getDataSet = (tracks) => {

}

export {getDataForDanceability, getDataForEnergy, getDataForValence, getDataForWeekday, getMeanData, getStdDeviation}