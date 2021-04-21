const resolver = {
    Query: {
        books: async (parent, args, context) => await context.mongoDataMethods.getAllBooks(),
        authors: async (parent, args, {mongoDataMethods}) => await mongoDataMethods.getAllAuthors(),
		book: async (parent, args, context) => await context.mongoDataMethods.getBook(args.id),
		author: async (parent, args, {mongoDataMethods}) => await mongoDataMethods.getAuthor(args.id)
    },
	Book: {
		author: async (parent, args, {mongoDataMethods}) =>{
			 return await mongoDataMethods.getAuthor(parent.authorId)
		}
	},
	Author: {
		books: async (parent, args, {mongoDataMethods}) => await mongoDataMethods.getAllBooks(parent.authorId)
	},
	Mutation: {
		createAuthor: async (parent, args, context) => await context.mongoDataMethods.createAuthor(args),
		createBook: async (parent, args, context) => await context.mongoDataMethods.createBook(args)
	}
}

module.exports = resolver