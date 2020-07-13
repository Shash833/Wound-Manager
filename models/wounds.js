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
            type: DataTypes.STRING,
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
    },
        {
            timestamps: false
        });

    Wounds.associate = function (models) {
        Wounds.hasMany(models.Assessment, {
            foreignKey: {
                allowNull: false
            }
        });
        Wounds.belongsTo(models.Patient, {
            foreignKey: {
                allowNull: false
            },
        });
    };
    return Wounds;
};
