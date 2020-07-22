import React, { useState, useContext, useEffect } from "react";
import Layout from "../Components/Layout"
import Breadcrumb from "../Components/Breadcrumb"
import Column from "../Components/Columns"
import Row from "../Components/Row"
import Form from "../Components/Form"
import FormItem from "../Components/FormItem"
import Card from "../Components/Card"
import DatePicker from "../Components/DatePicker"
import Select from "../Components/Select"
import Button from "../Components/Button"
import Alert from "../Components/Alert"
import axios from "axios";
import { PatientContext } from "../Context/PatientContext"
import { WoundContext } from "../Context/WoundContext"
import woundGoals from "../utils/goals.json"
import woundProducts from "../utils/products.json"


function WoundAssessmentPage() {
    //Context with current patient details:
    const { patient } = useContext(PatientContext)

    //Context with current wound details: 
    const { Wound } = useContext(WoundContext)

    //States for new wound assessment details:
    const [CurrentDate, setDate] = useState()
    const [Tissue, setTissue] = useState()
    const [Infection, setInfection] = useState()
    const [Odour, setOdour] = useState()
    const [Exudate, setExudate] = useState()
    const [Moisture, setMoisture] = useState()
    const [Edges, setEdges] = useState()
    const [Length, setLength] = useState()
    const [Width, setWidth] = useState()
    const [Depth, setDepth] = useState()
    //State for entered dressing regime:
    const [Cleanse, setCleanse] = useState()
    const [Primary, setPrimary] = useState()
    const [Secondary, setSecondary] = useState()
    const [Fixation, setFixation] = useState()
    const [Additional, setAdditional] = useState()

    //State to keep track of user entering assessment:
    const [assessmentStatus, setStatus] = useState(false)

    //States to store data for treatment goals and dressings
    const [Goals, setGoals] = useState({})
    const [Products, setProducts] = useState([])


    //On page load, set states for goals and products
    useEffect(() => {
        setGoals(woundGoals)
        setProducts(woundProducts)
    }, [Goals])

    //Arrays to be used for relevent drop boxes:
    const booleanChoices = ["Yes", "No"]
    const tissueArray = ["Granulation", "Slough", "Epithelialisation", "Necrotic", "Eschar", "Bone"]
    const moistureArray = ["Low", "Moderate", "High", "Nil"]
    const exudateArray = ["Serous", "Heamoserous", "Purulent", "Bloody"]
    const edgeArray = ["Healthy", "Macerated", "Tunnelling", "Undermined", "Inflammed", "Hyperkeratosis"]

    //Event handlers for assessment form submissions
    //Filter products according to user input
    const assessmentComplete = async (event) => {
        event.preventDefault()
        try {
            const filter = Products.filter((products) => (products.Tissue[Tissue] === true) && (products.Moisture[Moisture] === true) && (products.Infection === Infection) && (products.Edges[Edges] === true))
            setProducts(filter)
            setStatus(true)
        }
        catch (error) { console.log(error) }
    }

    //Assessment form and Regimen form submission to DB
    const handleInput = async (event) => {
        try {
            event.preventDefault()
            axios.post("/api/assessments", ({
                AssessmentDate: CurrentDate,
                TissueBase: Tissue,
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
                AdditionalIntervention: Additional,
                WoundId: Wound.id
            }))
        }
        catch (error) { console.log(error) }
    }

    return <>
        <Breadcrumb navArray={[{ label: `Patient: ${patient.FirstName} ${patient.LastName}`, link: "/patient" }, { label: `Wound: ${Wound.WoundLocation}(${Wound.DateDiscovered})`, link: "/wound" }, { label: "New Wound Assessment", link: "/wound_assessment" }]} />
        <Layout>
            <Row>
                <Column size={"is-4"}>
                    <Card title={"Objective Wound assessment:"}>
                        <Form >
                            <DatePicker label={"Date: "} onChange={(date, dateString) => setDate(dateString)} />
                            <Select label={"Tissue Base:"} array={tissueArray} onClick={(e) => setTissue(e)} />
                            <Select label={"Infection"} array={booleanChoices} onClick={(e) => { (e === "Yes") ? setInfection(true) : setInfection(false) }} />
                            <Select label={"Odour"} array={booleanChoices} onClick={(e) => { (e === "Yes") ? setOdour(true) : setOdour(false) }} />
                            <Select label={"Exudate Type:"} array={exudateArray} onClick={e => setExudate(e)} />
                            <Select label={"Moisture Level:"} array={moistureArray} onClick={e => setMoisture(e)} />
                            <Select label={"Edges:"} array={edgeArray} onClick={e => setEdges(e)} />
                            <hr></hr>
                            <Row><h4>Measurements: </h4></Row>
                            <FormItem label={"Length(mm):"} value={Length} onChange={e => setLength(e.target.value)} />
                            <FormItem label={"Width(mm):"} value={Width} onChange={e => setWidth(e.target.value)} />
                            <FormItem label={"Depth(mm):"} value={Depth} onChange={e => setDepth(e.target.value)} />
                        </Form>
                        {!assessmentStatus ? <>
                            <div><i>Submit assessment details to access treatment suggestions and proceed to dressing plan</i></div>
                            <Button onClick={(!CurrentDate || !Tissue || !Exudate || !Moisture || !Edges || !Length || !Width || !Depth) ? false : assessmentComplete}>Submit assessment</Button> </> :
                            <>
                                <hr></hr>
                                <Form >
                                    <Row >
                                        <h3>Dressing Plan:</h3>
                                    </Row>
                                    <FormItem label={"Cleanse:"} value={Cleanse} onChange={e => setCleanse(e.target.value)} />
                                    <FormItem label={"Primary Dressing:"} value={Primary} onChange={e => setPrimary(e.target.value)} />
                                    <FormItem label={"Secondary Dressing:"} value={Secondary} onChange={e => setSecondary(e.target.value)} />
                                    <FormItem label={"Fixation:"} value={Fixation} onChange={e => setFixation(e.target.value)} />
                                    <FormItem label={"Additional Interventions:"} value={Additional} onChange={e => setAdditional(e.target.value)} />
                                </Form>
                                <Button onClick={(!Cleanse || !Primary || !Secondary || !Fixation || !Additional) ? false : handleInput} link={(!Cleanse || !Primary || !Secondary || !Fixation || !Additional) ? false : "wound"}>Submit</Button>
                            </>}
                    </Card>
                </Column>
                {assessmentStatus ?
                    <Column size={"is-8"}>
                        <Card title={"Wound Care Recommendations"}>
                            <h3>Treatment Goals Suggestions:</h3>
                            <p>{Goals.Tissue[Tissue]}</p>
                            <p>{Goals.Moisture[Moisture]}</p>
                            <p>{Infection ? Goals.Infection["Yes"] : Goals.Infection["No"]}</p>
                            <p>{Goals.Edges[Edges]}</p>
                            <hr></hr>
                            <h3>Dressing recommendations: </h3>
                            <div>{Products.map((product) => (
                                <Alert title={product.Name} key={product.Name}>
                                    <div><b>Indications: </b>{product.Indications}</div>
                                    <br></br>
                                    <div><b>Contraindications: </b>{product.Contraindications}</div>
                                </Alert>))}
                            </div>
                            <br></br>
                            <div><i>Disclaimer: Please note, the above information is intended to provide guidance in clinical decision making. Please apply clinical judgement to individual cases when considering these guides during treatment.</i></div>
                        </Card>
                    </Column> : false}
            </Row>
        </Layout>
    </>
}

export default WoundAssessmentPage;

