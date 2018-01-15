module.exports = function(sequelize, DataTypes) {
  var Message = sequelize.define("Message", {
    name: { // who is contacting me
     id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    email: { // whats their email
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    phone: { // phone number
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    body: { // body of the comment / review 
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });
 // give me back a Message
  return Message;
};
