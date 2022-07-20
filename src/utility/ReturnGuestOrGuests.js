/* 
  funtionality in here will change, but the return format should 
  remain consistant
*/
// const baseRoute = "http://localhost:3001/"

// this simulates api call delay with test json
const jsonData = require("./guests.json")
const getData = (data) =>
  new Promise((resolve, reject) => {
    if (!data) {
      return setTimeout(
        () => reject(new Error('Users not found')),
        250
      );
    }
    setTimeout(() => resolve(Object.values(data)), 1000);
  });


// const getData = (baseUrl, route = "") =>
//   fetch(`${baseUrl}${route}`, {
//     "method": "GET",
//     "headers": {
//       "Content-Type": "application/json"
//     }
//   })
//     .then(
//       response => response.json()
//     )
//     .then(
//       data => {
//         return data
//       }
//     )
//     .catch(err => {
//       console.error(err)
//     })

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

    const result = await getData(jsonData) // for local json
    // const result = await getData(baseRoute) // for api

    if (obj?.id && result) {

      const filteredData = result.filter(guest => guest.id === obj.id) // for local json
      // const returnOne = await getData(baseRoute, `house_guests/${obj.id}`) // for api

      return filteredData // for local json
      // return returnOne // for api

    }
    else if (!obj.id && result) {
      /*  
        could make this a query
      */
      if (obj.start !== undefined | obj.end !== undefined) {
        return result.slice(obj.start !== undefined ? Number(obj.start)
          : 0, obj.end !== undefined ? Number(obj.end + 1) : result.length)
      }
      else {
        return result
      }
    }
  } catch (error) {
    console.error(error)
  }
}