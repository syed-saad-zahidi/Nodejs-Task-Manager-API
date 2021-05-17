require("../src/db/mongoose");

const Task = require("../src/models/task");

// Task.findByIdAndDelete("6085d783460ef523a44ff1f2")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => console.log(e));

const deleteTaskAndCount = async (id) => {
  const deleteTask = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount("6085e1d3369a0a32f0f753eb")
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
