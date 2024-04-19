const fs = require('fs');
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const Movie = require('./../../models/movieModel');


dotenv.config({ path: './config.env' }); 

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Database connected successfully`));


// READ JSON FILE
const movies = JSON.parse(fs.readFileSync(`${__dirname}/movies.json`, 'utf-8'));

// IMPORT DATA INTO DATABASE
const importData = async () => {
  try {
    await Movie.create(movies);
    console.log('Data successfully loaded!');
  } catch (err) {
    console.error(err);
  }
  process.exit();
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    await Movie.deleteMany();
    console.log('Data successfully deleted!');
  } catch (err) {
    console.error(err);
  }
  process.exit();
};


if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}