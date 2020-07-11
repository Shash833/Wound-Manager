module.exports = function (sequelize, DataTypes) {
    const Wounds = sequelize.define("Wounds", {
        WoundLocation: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        Aetiology: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        DateDiscovered: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        AdditionalInfo: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });

    // Wounds.associate = function (models) {
    //     Wounds.hasMany(models.Assessments, {
    //         foreignKey: {
    //             //woundID
    //         }
    //     });
    //     Wounds.belongsTo(models.Patient, {
    //         foreignKey: {
    //             allowNull: false
    //             //PatientID
    //         }
    //     });
    // };
    return Wounds;
};
