module.exports = function (sequelize, DataTypes) {
    var UserProfile = sequelize.define("UserProfile", {
        firstname: {
            type: DataTypes.STRING
        },
        lastname: {
            type: DataTypes.STRING
        },
        mobile: {
            type: DataTypes.STRING
        },
        img: {
            type: DataTypes.BLOB('long')
        },
        bio: {
            type: DataTypes.TEXT
        },
        interest1: {
            type: DataTypes.BOOLEAN
        },
        interest2: {
            type: DataTypes.BOOLEAN
        },
        interest3: {
            type: DataTypes.BOOLEAN
        },
        interest4: {
            type: DataTypes.BOOLEAN
        },
        interest5: {
            type: DataTypes.BOOLEAN
        },
        interest6: {
            type: DataTypes.BOOLEAN
        },
        interest7: {
            type: DataTypes.BOOLEAN
        },
        interest8: {
            type: DataTypes.BOOLEAN
        },
    });

    UserProfile.associate = function (models) {
        models.UserProfile.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    }

    return UserProfile;
};
