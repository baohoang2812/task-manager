// CRUD create read update delete
const { MongoClient: mongoClient, ObjectID } = require("mongodb");

const id = ObjectID();
console.log(id);

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";
mongoClient.connect(connectionURL, { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log("Unable to connect to database");
  }
  console.log("Connected correctly!");
  const db = client.db(databaseName);
  // insert one
  // db.collection('users').insertOne({
  //     name: 'Eden',
  //     age: 23
  // }, (error, result) => {
  //     if(error){
  //         return console.log("Unable to insert user")
  //     }

  //     console.log(result.ops)
  // })

  // insert many
  //   db.collection("users").insertMany(
  //     [
  //       {
  //         name: "Eden",
  //         age: 23,
  //       },
  //       {
  //         name: "Tracie",
  //         age: 22,
  //       },
  //     ],
  //     (error, result) => {
  //       if (error) {
  //         return console.log("Unable to insert documents");
  //       }

  //       console.log(result.ops);
  //     }
  //   );
  // Insert task
  //   db.collection("tasks").insertMany(
  //     [
  //       {
  //         name: "Fix bug 1",
  //         description: "Bug FE",
  //         completed: true,
  //       },
  //       {
  //         name: "Fix bug 2",
  //         description: "Bug FE",
  //         completed: false,
  //       },
  //       {
  //         name: "Fix bug 3",
  //         description: "Bug BE",
  //         completed: true,
  //       },
  //     ],
  //     (err, result) => {
  //       console.log(result.ops);
  //     }
  //   );
  // Find One
  //   db.collection("users").findOne(
  //     { _id: new ObjectID("60b4c2b0a7778949603863af") },
  //     (err, result) => {
  //       console.log(result);
  //     }
  //   );
  // Find
  //   db.collection("tasks")
  //     .find({ completed: true })
  //     .toArray((err, result) => {
  //       console.log(result);
  //     });
  // Update one
  //   db.collection("users")
  //     .updateOne(
  //       {
  //         _id: new ObjectID("60b4c2b0a7778949603863af"),
  //       },
  //       {
  //         $set: {
  //           name: "Mike",
  //         },
  //       }
  //     )
  //     .then((result) => {
  //       console.log(result);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  // update many
  //   db.collection("tasks")
  //     .updateMany(
  //       {
  //         completed: true,
  //       },
  //       {
  //         $set: {
  //           completed: false,
  //         },
  //       }
  //     )
  //     .then((result) => {
  //       console.log(result);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // Delete Many
  //   db.collection("users")
  //     .deleteMany({
  //       age: 22,
  //     })
  //     .then((result) => {
  //       console.log(result);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // Delete One
  // db.collection("tasks")
  //   .deleteOne({
  //     description: "Bug FE",
  //   })
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
});
