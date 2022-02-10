const { Schema, model } = require('mongoose');
//const celebrity = require('../../starter-code/models/celebrity');

const celebritySchema = new Schema(
  {
    celName: String,
    occupation: String,
    catchPhrase: String,
  },
  {
    timestamps: true
  }
);

module.exports = model('Celebrity', celebritySchema);

//const Celebrity = mongoose.model('Celebrity', celebritySchema);
//module.exports = Celebrity;