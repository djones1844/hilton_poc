const PouchDB  = require('pouchdb');
var db = new PouchDB('hotel');

let reservations = [
  { "_id": "1", "name": "John Doe", "hotel": "hotel1234", "arrival": "2021-05-05", "departure": "2021-05-15" },
  { "_id": "2", "name": "John Doe", "hotel": "hotel1234", "arrival": "2021-05-07",  "departure": "2021-05-09" },
  { "_id": "3", "name": "John Doe", "hotel": "hotel2345", "arrival": "2021-06-01", "departure": "2021-06-02" },
  { "_id": "4", "name": "John Doe", "hotel": "motel777", "arrival": "2021-06-05", "departure": "2021-06-09" },
  { "_id": "5", "name": "John Doe", "hotel": "motel5579", "arrival": "2021-06-22", "departure": "2021-06-24" }
]

const init = async () => {
  try {
    let status =  await db.info()

    if (status.doc_count){
      console.log("Downloading Data")
      const { rows }= await db.allDocs({include_docs: true})
      let arr = rows.map(e => e.doc)
      reservations = arr
      console.log("Downloading Complete")
    } else { // no data
      console.log("Uploading Data")
      const result = await db.bulkDocs(reservations)
      console.log("Data Upload Complete")
    }

    const results = await db.info()
  } catch(err){
    console.log(err)
  }
}

const getReservation = async args => {
  let res = await db.get(args._id);
  res._id = res._id
  console.log(res)
  return res
}

const getReservations = () => {
  return reservations
}

const addReservation = async doc => {
  try{
    const info = await db.info();
    let id = info.doc_count + 1;
    doc._id = JSON.stringify(id);
    reservations.push(doc);
    const resolve = await db.post(doc);
    console.log(resolve)
    return doc
  } catch(err){
    console.log(err);
  }  
}

module.exports = {
  init,
  getReservation,
  getReservations,
  addReservation,
  reservations
}