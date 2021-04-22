const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
} = require('graphql');
const { ReservationType } = require('./object');
const {  getReservation, getReservations, reservations } = require('./data');

const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
  fields: () => ({
    reservation: {
      type: ReservationType,
      description: 'A Single Reservation',
      args: {
        _id: { type: GraphQLString }
      },
      resolve: (parent, args) => reservations.find(reservations => reservations._id === args._id)
    },
    reservations: {
      type: new GraphQLList(ReservationType),
      description: 'List of All Reservations',
      resolve: () => getReservations()
    }
  })
})

module.exports = {
  RootQueryType
}