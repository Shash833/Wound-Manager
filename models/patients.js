module.exports = function (sequelize, DataTypes) {
    const Patient = sequelize.define("Patient", {
        Name: {
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
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        GPDetails: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        DOB: {
            type: DataTypes.DATE,
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
    });

    Patient.associate = function (models) {
        Patient.hasMany(models.Wounds, {
            foreignKey: {
                //patientID
            }
        });
        Patient.belongsTo(models.Organisation, {
            foreignKey: {
                allowNull: false
                //orginisationID
            }
        });
    };
    return Patient;
};
