require("../src/db/mongoose");

const User = require("../src/models/user");

// 608582a60361380cc413ab95

// User.findByIdAndUpdate("6085d73058426b0c686a2d6a", { age: 1 })
//   .then((user) => {
//     console.log(user);

//     return User.countDocuments({ age: 1 });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });

  return count;
};

updateAgeAndCount("608582a60361380cc413ab95", 2)
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
