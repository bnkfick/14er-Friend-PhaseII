module.exports = function(sequelize, DataTypes) {
    var Mountain = sequelize.define("Mountain", {
      peakName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 140]
        }
      },
      rank: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1]
        }
      }
    }); 

/*     Mtn.associate = function (models) {
      Mtn.belongsTo(models.Routes, { 
        foreignKey: {
          allowNull: false
        }
      });
    } */
    return Mountain;
  };