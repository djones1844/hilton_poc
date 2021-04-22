const PouchDB  = require('pouchdb');
var db = new PouchDB('hotel');

let reservations = [
  { _id: "1", name: "John Doe", hotel: "hotel1234", "arrival": "2021-05-05", "departure": "2021-05-15" },
  { _id: "2", name: "Jane Doe", hotel: "hotel1234", "arrival": "2021-05-07", "departure": "2021-05-09" },
  { _id: "3", name: "Mike Doe", hotel: "hotel2345", "arrival": "2021-06-01", "departure": "2021-06-02" },
  { _id: "4", name: "James Doe", hotel: "motel777",  "arrival": "2021-06-05", "departure": "2021-06-09" },
  { _id: "5", name: "Allie Doe", hotel: "motel5579", "arrival": "2021-06-22", "departure": "2021-06-24" }
];

const init = async () => {
  try {
    let status = await db.info();
    if (status.doc_count) return console.log("Data Upload Complete");
    console.log("Uploading Data");
    await db.post(reservations[0]);
    await db.post(reservations[1]);
    await db.post(reservations[2]);
    await db.post(reservations[3]);
    await db.post(reservations[4]);
    console.log("Data Upload Complete");
  } catch(err){
    console.log(err);
  }
}

const getReservation = async args => {
  try {
    const { rows } = await db.allDocs({include_docs: true});
    let result = rows.filter(e => e.id ==  args.id)[0];
    let { doc } = result; 
    doc.id = args.id;
    return doc;
  } catch(err){
    console.log(err);
  }  
}

const getReservations = async () => {
  try {
    let { rows } = await db.allDocs({include_docs: true});
    docs = rows.map(e => e = e.doc );
    docs.forEach(e => e.id = e._id);
    console.log("ALL", docs);
    return docs;
  } catch(err) {
    console.log(err);
  }  
} 

const addReservation = async doc => {
  try {
    const { rows } = await db.allDocs({include_docs: true});
    let id = JSON.stringify(rows.length + 1);
    doc.id = id;
    doc._id = id;
    await db.post(doc);
    return doc;
  } catch(err) {
    console.log(err);
  }
}

module.exports = {
  init,
  getReservation,
  getReservations,
  addReservation
}