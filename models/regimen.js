module.exports = function (sequelize, DataTypes) {
    const Regimen = sequelize.define("Regimen", {
        Cleanse: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        Primary: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        Secondary: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        Fixation: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        AdditionalIntervention: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });

    // Regimen.associate = function (models) {
    //     Regimen.belongsTo(models.Assessment, {
    //         foreignKey: {
    //             allowNull: false
    //             //assessmentID
    //         }
    //     });
    // };
    return Regimen;
};
