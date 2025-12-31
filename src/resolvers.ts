export const resolvers = {
  Query: {
    featuredListings: async (_, __, { dataSources }) => {
      return dataSources.listingAPI.getFeaturedListings();
    },
  },
};