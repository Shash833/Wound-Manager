const db = require("../models");
const router = require("express").Router();
const passport = require("../config/passport");
var isAuthenticated = require("../config/middleware/isAuthenticated");


//USER API ROUTES:

router.get("/home", isAuthenticated, function (req, res) {
    res.redirect('/home');
});


router.get("/api/users", async function (req, res) {
    try {
        const dbUsers = await db.User.findAll({
            where: {
                //OrganisationName = entered username
            }
        })
        res.json(dbUsers)
    }
    catch (error) { console.log(error) }
});

router.get("/api/users/:id", async function (req, res) {
    try {
        const dbUser = await db.User.findOne({
            where: {
                id: req.params.id
            }
        })
        res.json(dbUser)
    }
    catch (error) {
        console.log(error)
    }
});

router.post("/api/users", async function ({ body: { username, Password, Address, ContactName, ContactNumber } }, res) {
    try {
        const dbUser = await db.User.create({
            username: username,
            Password: Password,
            Address: Address,
            ContactName: ContactName,
            ContactNumber: ContactNumber
        })
        res.json(dbUser)
    }
    catch (error) { console.log(error) }
})

router.post("/api/login", passport.authenticate("local"), async function (req, res) {
    try {
        const userData = { ...req.user, Password: undefined }
        return res.json(userData);
    }
    catch (error) { return res.status(404).send("the user details are incorrect") }
});

//PATIENT API ROUTES:
router.get("/api/patients", async function (req, res) {
    try {
        const dbPatient = await db.Patient.findAll({
            where: {
                //organisationID = logged in orginisationID
            }
        })
        res.json(dbPatient)
    }
    catch (error) { console.log(error) }
});

router.get("/api/patients/:id", async function (req, res) {
    try {
        const dbPatient = await db.Patient.findOne({
            where: {
                id: req.params.id
            }
        })
        res.json(dbPatient)
    }
    catch (error) { console.log(error) }
});

router.post("/api/patients", async function ({ body: { Name, Address, Phone, GPDetails, DOB, MedicalHistory, Medications, OrgID } }, res) {
    try {
        const dbPatient = await db.Patient.create({
            Name: Name,
            Address: Address,
            Phone: Phone,
            GPDetails: GPDetails,
            DOB: DOB,
            MedicalHistory: MedicalHistory,
            Medications: Medications,
            organisation_id: OrgID
        })
        res.json(dbPatient)
    }
    catch (error) { console.log(error) }
})

//WOUND API ROUTES:
router.get("/api/wounds", async function (req, res) {
    try {
        const dbWounds = await db.Wound.findAll({
            where: {
                //patient ID = selected patientID
            }
        })
        res.json(dbWounds)
    }
    catch (error) { console.log(error) }
});

router.get("/api/wounds/:id", async function (req, res) {
    try {
        const dbWound = await db.Wound.findOne({
            where: {
                id: req.params.id
            }
        })
        res.json(dbWound)
    }
    catch (error) { console.log(error) }
});

router.post("/api/wounds", async function ({ body: { WoundLocation, Aetiology, DateDiscovered, AdditionalInfo } }, res) {
    try {
        const dbWound = await db.Wound.create({
            WoundLocation: WoundLocation,
            Aetiology: Aetiology,
            DateDiscovered: DateDiscovered,
            AdditionalInfo: AdditionalInfo
        })
        res.json(dbWound)
    }
    catch (error) { console.log(error) }
})

//ASSESSMENT API ROUTES:
router.get("/api/assessments", async function (req, res) {
    try {
        const dbAssessment = await db.Assessment.findAll({
            where: {
                //woundID = current woundiD
            }
        })
        res.json(dbAssessment)
    }
    catch (error) { console.log(error) }
});

router.get("/api/assessments/:id", async function (req, res) {
    try {
        const dbAssessment = await db.Assessment.findOne({
            where: {
                id: req.params.id
            }
        })
        res.json(dbAssessment)
    }
    catch (error) { console.log(error) }
});

router.post("/api/assessments", async function ({ body: { TissueBase, Infection, Odour, Moisture, Edges, Length, Width, Depth } }, res) {
    try {
        const dbAssessment = await db.Assessment.create({
            TissueBase: TissueBase,
            Infection: Infection,
            Odour: Odour,
            Moisture: Moisture,
            Edges: Edges,
            Length: Length,
            Width: Width,
            Depth: Depth
        })
        res.json(dbAssessment);
    }
    catch (error) { console.log(error) }
})

//REGIMEN API ROUTES: 
router.get("/api/regimen", async function (req, res) {
    try {
        const dbRegimen = await db.Regimen.findAll({
            where: {
                //assessmentID = current assessmentID
            }
        })
        res.json(dbRegimen);
    }
    catch (error) { console.log(error) }
});

router.get("/api/regimen/:id", async function (req, res) {
    try {
        const dbRegimen = await db.Regimen.findOne({
            where: {
                id: req.params.id
            }
        })
        res.json(dbRegimen)
    }
    catch (error) { console.log(error) }
});

router.post("/api/regimen", async function ({ body: { Cleanse, Primary, Secondary, Fixation, AdditionalIntervention } }, res) {
    try {
        const dbRegimen = await db.Regimen.create({
            Cleanse: Cleanse,
            Primary: Primary,
            Secondary: Secondary,
            Fixation: Fixation,
            AdditionalIntervention: AdditionalIntervention
        })
        res.json(dbRegimen)
    }
    catch (error) { console.log(error) }
})

router.get("/api/user_data", async function (req, res) {
    try {
        if (!req.user) {
            res.json({});
        } else {
            res.json({
                username: req.user.username,
                id: req.user.id
            });
        }
    }
    catch (error) { console.log(error) }
});


module.exports = router;
