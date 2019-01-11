module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      user_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      //identify returning users with googleId
      google_id: {
        type: DataTypes.INTEGER,
        defaultValue: false
      },
      thumbnail: {
        type: DataTypes.STRING
      },
    });

    return User;
  };

  //User Model - represents our collection of information
  //so the user model represents the collection of user records in our db//
  // use the model to interact wtih the collection of data
  //User Schema - defines the structure of a particular record in that model
  //define properties stored in a record and their types