
This is available at by:
- npm i
- npm run start
- access by browser at http://localhost:3001

````
# Feel free to use these queries

# single reservation
{
	reservation(id: "1") {
	  id,
  	name,
    hotel,
    arrival,
    departure
	}
}

# all reservations
{
  reservations {
   	id,
  	name,
    hotel,
		arrival,
		departure
  }
}

# add reservation
mutation {
  addReservation(
    name: "Boby Dole",
    hotel: "hotel1234",
    arrival: "2021-06-25",
    departure: "2021-06-27"
  ) {
    id,
    name,
    hotel,
    arrival,
    departure
  }
}
````
