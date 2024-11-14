import mongoose from "mongoose";

const dbConnect = () => {
  // Need to read this from a configuration file
  if (!process.env.DB_CONNECTION_STRING) {
    throw new Error("Database connection string not configured in ENV file");
  }

  const dbUri = process.env.DB_CONNECTION_STRING;
  console.log("Connecting to MongoDB...", dbUri);

  return mongoose.connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

mongoose.set("debug", (collectionName, method, query, doc) => {
  console.log(
    `[MONGOOS]:${collectionName}.${method}`,
    JSON.stringify(query),
    doc
  );
});

export default dbConnect;
