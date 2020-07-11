module.exports = function (sequelize, DataTypes) {
    const Assessment = sequelize.define("Assessment", {
        TissueBase: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Infection: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        Odour: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        Moisture: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Edges: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Length: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        Width: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        Depth: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });

    // Assessment.associate = function (models) {
    //     Assessment.hasOne(models.Regimen, {
    //         foreignKey: {
    //             //assessmentID
    //         }
    //     });
    //     Assessment.belongsTo(models.Wounds, {
    //         foreignKey: {
    //             allowNull: false
    //             //woundID
    //         }
    //     });
    // };
    return Assessment;
};
