const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
} = require('graphql');
const { ReservationType } = require('./object');
const {  getReservations, getReservation } = require('./data');

const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
  fields: () => ({
    reservation: {
      type: ReservationType,
      description: 'A Single Reservation',
      args: {
        id: { type: GraphQLString }
      },
      resolve: (parent, args) => getReservation(args)
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