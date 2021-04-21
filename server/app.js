const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const mongoose = require('mongoose');

// Load schema & resolve
const typeDefs = require('./schema/schema')
const resolvers = require('./resolver/resolver')

// Load Db method
const mongoDataMethods = require('./data/db');

// Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://tantano:tantano@tutorialgraphql.jagjk.mongodb.net/TutorialGraphQL?retryWrites=true&w=majority', {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }    
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({mongoDataMethods})
});


connectDB();

const app = express();

server.applyMiddleware({app});

app.listen({port: 7777}, () => {
    console.log('dang nghe: http://localhost:7777');
});