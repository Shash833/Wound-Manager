const bcrypt = require("bcryptjs");

module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        Password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        Address: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        ContactName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        ContactNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    },
        {
            timestamps: false
        }
    );

    User.associate = function (models) {
        User.hasMany(models.Patient, {
            foreignKey: {
                allowNull: false,
            },
        });
    };
    User.prototype.validPassword = function (Password) {
        return bcrypt.compareSync(Password, this.Password);
    };

    User.addHook("beforeCreate", function (user) {
        user.Password = bcrypt.hashSync(user.Password, bcrypt.genSaltSync(10), null);
    });
    return User;
};
