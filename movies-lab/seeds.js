/*const mongoose = require('mongoose');
const Celebrity = require("./models/celebrity")

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost/movies-lab';
 
mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
*/
const mongoose = require('mongoose');

const Celebrity = require('./models/celebrity');

mongoose.connect('mongodb://localhost/movies-lab');

  const celebrities = [
      {celName: "Hermione Granger",
        occupation: "Actress",
        catchPhrase: "whithout me those two woudnt have made half a book",},
    {celName: "Ron Weasley",
        occupation: "Actor",
        catchPhrase: "Spiders?? coudlnt it be follow the butterfly "

    },
    {celName: "Harry Potter",
        occupation: "Actor",
        catchPhrase: "Spelliarmus, i just dont know any other spell",
    }
  ]


  Celebrity.create(celebrities)
  .then((celebrities) => {
    console.log(
      `Success - ${celebrities.length} celebs seeded to the database`
    );
  })
  .catch((err) => {
    console.log(err);
  });