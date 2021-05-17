// CRUD create read update delete
const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";

const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("unable to connect to the database");
    }
    db = client.db(databaseName);

    // for reading one data
    // db.collection("tasks").findOne(
    //   { _id: new ObjectID("60589fb72a87063aa8d0a18b") },
    //   (error, task) => {
    //     if (error) {
    //       return console.log("unable to find task");
    //     }
    //     console.log(task);
    //   }
    // );

    // for reading multiple data
    // db.collection('tasks').find({completed:false}).toArray((error , status) => {
    //   if (error) {
    //     return console.log("Unable to find the task status")
    //   }
    //   console.log(status)
    // })

    // for updating one document
    // db.collection("users")
    //   .updateOne(
    //     {
    //       _id: new ObjectID("6058985e58775a10e82ead80"),
    //     },
    //     {
    //       $set: {
    //         name: "benz",
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // // for updating many data
    // db.collection("tasks")
    //   .updateMany(
    //     {
    //       completed: false,
    //     },
    //     {
    //       $set: {
    //         completed: true,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // for deleting single data
    // db.collection("tasks")
    //   .deleteOne({
    //     description: "buy grocessory",
    //   })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    //for deleting multiple data:
    db.collection("users")
      .deleteMany({
        age: 26,
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);
