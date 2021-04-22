const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
} = require('graphql');
// const { GraphQLDate, GraphQLDateTime, Grap } = require('graphql-scalars');

const ReservationType = new GraphQLObjectType({
  name: 'Reservation',
  description: 'This represents intended time at a Hotel',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLString) },
    name: { type: GraphQLNonNull(GraphQLString) },
    hotel: { type: GraphQLNonNull(GraphQLString) },
    arrival: {type: GraphQLNonNull(GraphQLString)},
    departure: {type: GraphQLNonNull(GraphQLString)}
  })
})

module.exports = {
  ReservationType
}