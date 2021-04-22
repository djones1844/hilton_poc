const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
} = require('graphql');
const { ReservationType } = require('./object');
const { addReservation } = require('./data');

const RootMutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Root Mutation',
  fields: () => ({
    addReservation: {
      type: ReservationType,
      description: 'Add a Reservation',
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        hotel: { type: GraphQLNonNull(GraphQLString) },
        arrival: { type: GraphQLNonNull(GraphQLString)},
        departure: { type: GraphQLNonNull(GraphQLString)}
      },
      resolve: (parent, args) => {
        return addReservation({ 
          name: args.name, 
          hotel: args.hotel,
          arrival: args.arrival,
          departure: args.departure 
        })
      }
    }
  })
})

module.exports = {
  RootMutationType
}