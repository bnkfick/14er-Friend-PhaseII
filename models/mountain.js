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
      },
      elevation: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1,16]
        }
      },
      latitude: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          len: [1,16]
        }
      },
      longitude: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          len: [1,16]
        }
      },
      mountainRange: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1,140]
        }
      }
    });

    return Mountain;
  };