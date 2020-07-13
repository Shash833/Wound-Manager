module.exports = function (sequelize, DataTypes) {
    const Assessment = sequelize.define("Assessment", {
        AssessmentDate: {
            type: DataTypes.STRING,
            allowNull: false,
        },
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
        Exudate: {
            type: DataTypes.STRING,
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
        },
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
    },
        {
            timestamps: false
        });

    Assessment.associate = function (models) {
        Assessment.belongsTo(models.Wounds, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Assessment;
};
