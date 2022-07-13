const jsonData = require("./guests.json")

/**
 * this is a temp way of getting this, will change with api,
 * but this should abstract away the implementation of it
 * 
 * @param {Object} obj
 * @param {number | undefined} obj.id **optional**
 * @param {number | undefined} obj.end **optional**
 * 
 */
export default function getGuests(obj = { id: undefined, start: undefined, end: undefined }) {
  if (obj.id && jsonData) {
    const filteredData = jsonData.filter(guest => guest.id === obj.id)
    console.log(filteredData)
    return filteredData
  } else if (!obj.id && jsonData) {
    if (obj.end) {
      return jsonData.slice(obj.start ? obj.start : 0, Number(obj.end))
    } else {
      return jsonData
    }
  } else return console.error("something went wrong")
}