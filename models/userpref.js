module.exports = function(sequelize, DataTypes) {
    var UserPreference = sequelize.define("UserPreference", {
      user_name: {
        type: DataTypes.STRING
      },
      windLimit: {
        type: DataTypes.STRING
      },
      precipLimit: {
        type: DataTypes.STRING
      },
      tempMin: {
        type: DataTypes.STRING
      },
      distMax: {
        type: DataTypes.STRING
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