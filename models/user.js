module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      user_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      },
      //identify returning users with googleId
      google_id: {
        type: DataTypes.STRING,
        defaultValue: false
      },
      thumbnail: {
        type: DataTypes.STRING
      },
    });

    User.associate = function(models) {
      User.hasOne(models.UserProfile, {
        onDelete: "cascade"
      });
    };

    User.associate = function(models) {
      User.hasOne(models.UserPreference, {
        onDelete: "cascade"
      });
    };

    return User;
  };


  //username: String,
  //password: String,
  //email: String,
  //gender: String,
  //address: String
  //User Model - represents our collection of information
  //so the user model represents the collection of user records in our db//
  // use the model to interact wtih the collection of data
  //User Schema - defines the structure of a particular record in that model
  //define properties stored in a record and their types