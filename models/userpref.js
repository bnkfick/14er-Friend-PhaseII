module.exports = function(sequelize, DataTypes) {
    var UserPreference = sequelize.define("UserPreference", {
      user_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      windLimit: {
        type: DataTypes.STRING,
        allowNull: false
      },
      precipLimit: {
        type: DataTypes.STRING,
        allowNull: false
      },
      tempMin: {
        type: DataTypes.STRING,
        allowNull: false
      },
      tempMax: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

UserPreference.associate = function(models) {
  models.UserPreference.belongsTo(models.User, {
      foreignKey: {
          allowNull: false
      }
  });
}

return UserPreference;
};

// userId: currentUserId,
// userName: userName,
// windLimit: windLimit,
// precipLimit: precipLimit,
// tempMin: tempMin,
// tempMax: tempMax