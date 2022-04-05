const sequelize = require('../config/connection.js');

// const seedComments = require('./comment-seed');
// const seedPosts = require('./post-seed');
// const seedUsername = require('./username-seed');


const seedAll = async () => {
  await sequelize.sync({
    force: true
  });
  console.log('\n----- DATABASE SYNCED -----\n');

  // await seedUsername();
  console.log('\n----- ## SEEDED -----\n');

  // await seedComments();
  console.log('\n----- ## SEEDED -----\n');

  // await seedPosts();
  console.log('\n----- ## SEEDED -----\n');


  process.exit(0);
};

seedAll();