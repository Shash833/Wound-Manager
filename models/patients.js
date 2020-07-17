module.exports = function (sequelize, DataTypes) {
    const Patient = sequelize.define("Patient", {
        FirstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        LastName: {
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
        Phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        GPDetails: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        DOB: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        MedicalHistory: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        Medications: {
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

    Patient.associate = function (models) {
        Patient.hasMany(models.Wounds, {
            foreignKey: {
                allowNull: false,
            },
        })
        Patient.belongsTo(models.User, {
            foreignKey: {
                allowNull: false,
            },
        })
    };
    return Patient;
};
