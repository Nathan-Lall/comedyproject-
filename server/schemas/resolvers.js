const {  Comedian, Show } = require('../models');

const resolvers = {
  Query: {
    comedians: async () => {
      return Comedian.find({});
    },
  },
	Comedian: {
		shows: async (parent) => {
			return Show.find({ comedian: parent._id });
		},
	},
  Mutation: {
    createComedian: async (parent, args) => {
      return  await Comedian.create(args);
    },
	  updateComedian: async (parent, { comedianId, first_name, last_name }) => {
		  return Comedian.findOneAndUpdate({ _id: comedianId}, { first_name, last_name })
	  },
	deleteComedian: async (parent, { comedianId }) => {
		return await Comedian.findOneAndDelete({ _id: comedianId})
	},
	createShow: async (parent, args) => {
		return await Show.create(args);
	}
  },
};

module.exports = resolvers;
