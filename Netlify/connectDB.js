// netlify/functions/connectDB.js
const { MongoClient } = require('mongodb');

exports.handler = async function(event, context) {
  const uri = "mongodb+srv://nityakansal39:<db_password>@cluster0.yyavwtl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const collection = client.db("yourDB").collection("yourCollection");
    const docs = await collection.find({}).toArray();
    return {
      statusCode: 200,
      body: JSON.stringify(docs)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: error.toString()
    };
  } finally {
    await client.close();
  }
};
