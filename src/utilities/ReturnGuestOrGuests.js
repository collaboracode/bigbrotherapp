/* 
  funtionality in here will change, but the return format should 
  remain consistant
*/
import guestService from '../services/GuestService';

const getGuests = async () => {
  const data = await guestService.getGuests();
  if (data?.length) {
    return data
  }
}
const getGuest = async (id) => {
  const data = await guestService.getGuest(id);
  console.log(data)
  if (data) {
    return data
  }
}


// this simulates api call delay with test json
// const jsonData = require("../utilities/guests.json")
// const getData = (data) =>
//   new Promise((resolve, reject) => {
//     if (!data) {
//       return setTimeout(
//         () => reject(new Error('Users not found')),
//         250
//       );
//     }
//     setTimeout(() => resolve(Object.values(data)), 1000);
//   });

/**
 * @param {object} obj **optional**
 * @param {number | undefined} obj.id **optional**
 * @param {number | undefined} obj.start **optional**
 * @param {number | undefined} obj.end **optional**
 * @returns {object[]} an array of guest objects
 * 
 * example structure
 * - ReturnGuests({ start: 1, end: 2 })
 */
export default async function ReturnGuests(obj = {
  id: undefined, start: undefined, end: undefined
}) {
  try {
    // const result = await getData(jsonData) // for local json
    const result = obj.id ? await getGuest(obj.id) : await getGuests()
     if (obj.start !== undefined | obj.end !== undefined) {
      return result.slice(obj.start !== undefined ? Number(obj.start)
        : 0, obj.end !== undefined ? Number(obj.end + 1) : result.length)

    } else {
      return result
    }
  } catch (error) {
    console.error(error)
  }
}