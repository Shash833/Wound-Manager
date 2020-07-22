const db = require("../models");
const router = require("express").Router();
const passport = require("../config/passport");

//USER API ROUTES:
//To GET user by id: 
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
//To POST new user:
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
//To authenticate user on login:
router.post("/api/login", passport.authenticate("local"), async function (req, res) {
    try {
        const userData = { ...req.user, Password: undefined }
        return res.json(userData);
    }
    catch (error) { return res.status(404).send("the user details are incorrect") }
});

//PATIENT API ROUTES:
//To GET all patients by user id:
router.get("/api/patients/:userID", async function (req, res) {
    try {
        const dbPatient = await db.Patient.findAll({
            where: {
                UserId: req.params.userID
            }
        })
        res.json(dbPatient)
    }
    catch (error) { console.log(error) }
});
//To POST new patient:
router.post("/api/patients", async function ({ body: { FirstName, LastName, Address, Phone, GPDetails, DOB, MedicalHistory, Medications, OrgID } }, res) {
    console.log(FirstName, LastName, Address, Phone, GPDetails, DOB, MedicalHistory, Medications, OrgID)
    try {
        const dbPatient = await db.Patient.create({
            FirstName: FirstName,
            LastName: LastName,
            Address: Address,
            Phone: +Phone,
            GPDetails: GPDetails,
            DOB: DOB,
            MedicalHistory: MedicalHistory,
            Medications: Medications,
            UserId: OrgID
        })
        res.json(dbPatient)
    }
    catch (error) { console.log(error) }
})

//WOUND API ROUTES:
//To get wound by patient id:
router.get("/api/wounds/:id", async function (req, res) {
    try {
        const dbWound = await db.Wounds.findAll({
            where: {
                PatientId: req.params.id
            }
        })
        res.json(dbWound)
    }
    catch (error) { console.log(error) }
});
//To POST new wound:
router.post("/api/wounds", async function ({ body: { WoundLocation, Aetiology, DateDiscovered, AdditionalInfo, PatientId } }, res) {
    try {
        const dbWound = await db.Wounds.create({
            WoundLocation: WoundLocation,
            Aetiology: Aetiology,
            DateDiscovered: DateDiscovered,
            AdditionalInfo: AdditionalInfo,
            PatientId: PatientId
        })
        res.json(dbWound)
    }
    catch (error) { console.log(error) }
})

//ASSESSMENT API ROUTES:
//To GET all wound assessment by wound id:
router.get("/api/AllAssessments/:id", async function (req, res) {
    try {
        const dbAssessment = await db.Assessment.findAll({
            where: {
                WoundId: req.params.id
            }
        })
        res.json(dbAssessment)
    }
    catch (error) { console.log(error) }
});

//To GET single wound assessment by id:
router.get("/api/assessment/:id", async function (req, res) {
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

//To POST new wound assessment:
router.post("/api/assessments", async function ({ body: { AssessmentDate, TissueBase, Infection, Odour, Exudate, Moisture, Edges, Length, Width, Depth, Cleanse, Primary, Secondary, Fixation, AdditionalIntervention, WoundId } }, res) {
    try {
        const dbAssessment = await db.Assessment.create({
            AssessmentDate: AssessmentDate,
            TissueBase: TissueBase,
            Infection: Infection,
            Odour: Odour,
            Exudate: Exudate,
            Moisture: Moisture,
            Edges: Edges,
            Length: Length,
            Width: Width,
            Depth: Depth,
            Cleanse: Cleanse,
            Primary: Primary,
            Secondary: Secondary,
            Fixation: Fixation,
            AdditionalIntervention: AdditionalIntervention,
            WoundId: WoundId
        })
        res.json(dbAssessment);
    }
    catch (error) { console.log(error) }
})

//To retreive authenticated user id and username:
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
