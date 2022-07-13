const jsonData = require("./guests.json")

/**
 * this is a temp way of getting this, will change with api,
 * but this should abstract away the implementation of it,
 * so the format of the return should probably stay the same.
 * 
 * @param {Object} obj **optional**
 * @param {number | undefined} obj.id **optional**
 * @param {number | undefined} obj.end **optional**
 */
export default function getGuests(obj = { id: undefined, start: undefined, end: undefined }) {
  if (obj.id && jsonData) {
    const filteredData = jsonData.filter(guest => guest.id === obj.id)
    return filteredData
  } else if (!obj.id && jsonData) {
    if (obj.start !== undefined | obj.end !== undefined) {
      return jsonData.slice(obj.start !== undefined ? Number(obj.start)
      : 0, obj.end !== undefined ? Number(obj.end + 1) : jsonData.length)
    } else {
      return jsonData
    }
  } else return console.error("something went wrong")
}