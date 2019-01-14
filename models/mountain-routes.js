module.exports = function(sequelize, DataTypes) {
    var Mountain_route = sequelize.define("Mountain_route", {
        routeNumber: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        routeName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len:[1, 100]
            }
        },
        trailHeadParkingLotName: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1, 100]
            }
        },
        latitude: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                len: [1, 16]
            }
        },
        longitude: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                len: [1, 16]
            }
        },
        trailHeadLocation: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 100]
            }
        },
        mileage: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                len: [1, 10]
            }
        },
        gain: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1, 10]
            }
        },
        difficulty: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        exposure: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        routeMapEmbed: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    });

    Mountain_route.associate = function(models) {
        models.Mountain_route.belongsTo(models.Mountain, {
            foreignKey: {
                allowNull: false
            }
        });
    }


    return Mountain_route;
};
