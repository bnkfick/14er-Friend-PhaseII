module.exports = function(sequelize, DataTypes) {
    var Mtn = sequelize.define("Mtn", {
      mtn_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 140]
        }
      },
      rank: {
        type: DataTypes.INTEGER,
        defaultValue: false
      }
    });

/*     Mtn.associate = function (models) {
      Mtn.belongsTo(models.Routes, { 
        foreignKey: {
          allowNull: false
        }
      });
    } */
    return Mtn;
  };