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
import axios from "axios";
import { PatientContext } from "../Context/PatientContext"
import { WoundContext } from "../Context/WoundContext"
import woundGoals from "../utils/goals.json"
import woundProducts from "../utils/products.json"


function WoundAssessmentPage() {
    const { patient } = useContext(PatientContext)

    //COntext with current wound details: 
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
    const tissueArray = ["Granulation", "Slough", "Epithelialisation", "Hyper-Granulation", "Necrotic", "Eschar", "Bone"]
    const moistureArray = ["Low", "Moderate", "High", "Nil"]
    const exudateArray = ["Serous", "Heamoserous", "Purulent", "Bloody"]
    const edgeArray = ["Healthy", "Macerated", "Tunnelling", "Undermined", "Inflammed", "Hyperkeratosis"]

    //Event handlers for assessment form submissions
    //Filter products according to user input
    const assessmentComplete = async (event) => {
        event.preventDefault()
        try {
            const filter = Products.filter((products) => (products.Tissue[Tissue] === true) && (products.Moisture[Moisture] === true))
            setProducts(filter)
            setStatus(true)
        }
        catch (error) { console.log(error) }

    }

    // useEffect(() => {
    //     console.log(Products)
    // }, [Products])

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

    return <Layout>
        <Breadcrumb navArray={[{ label: `Patient: ${patient.FirstName} ${patient.LastName}`, link: "/patient" }, { label: `Wound: ${Wound.WoundLocation}(${Wound.DateDiscovered})`, link: "/wound" }, { label: "New Wound Assessment", link: "/wound_assessment" }]}></Breadcrumb>
        <Row>
            <Column>
                <h1>
                    Wound Review Form
                </h1>
            </Column>
        </Row>
        <Row gutter={18}>
            <Column span={12}>
                <Card>
                    <Row >
                        <h3>Objective Wound assessment:</h3>
                    </Row>
                    <br></br>
                    <Form onClick={(!CurrentDate || !Tissue || !Infection || !Odour || !Exudate || !Moisture || !Edges || !Length || !Width || !Depth) ? false : assessmentComplete}>
                        <DatePicker label={"Date: "} onChange={(date, dateString) => setDate(dateString)} />
                        <Select label={"Tissue Base:"} array={tissueArray} onClick={(e) => setTissue(e)}></Select>
                        <Select label={"Infection"} array={booleanChoices} onClick={(e) => { (e === "Yes") ? setInfection(true) : setInfection(false) }}></Select>
                        <Select label={"Odour"} array={booleanChoices} onClick={(e) => { (e === "Yes") ? setOdour(true) : setOdour(false) }}></Select>
                        <Select label={"Exudate Type:"} array={exudateArray} onClick={e => setExudate(e)}></Select>
                        <Select label={"Moisture Level:"} array={moistureArray} onClick={e => setMoisture(e)}></Select>
                        <Select label={"Edges:"} array={edgeArray} onClick={e => setEdges(e)}></Select>
                        <Row justify={"center"}><h4>Measurements: </h4></Row>
                        <FormItem label={"Length(mm):"} value={Length} onChange={e => setLength(e.target.value)} />
                        <FormItem label={"Width(mm):"} value={Width} onChange={e => setWidth(e.target.value)} />
                        <FormItem label={"Depth(mm):"} value={Depth} onChange={e => setDepth(e.target.value)} />
                    </Form></Card>

            </Column>
            {assessmentStatus ?
                <Column span={12}>
                    <Card title={"WOUND CARE RECOMMENDATIONS"}>
                        <h3>Treatment Goals Suggestions:</h3>
                        <p>{Goals.Tissue[Tissue]}</p>
                        <p>{Goals.Moisture[Moisture]}</p>
                        <p>{Infection ? Goals.Infection["Yes"] : Goals.Infection["No"]}</p>
                        <p>{Goals.Edges[Edges]}</p>
                    </Card>
                </Column> : false}
        </Row>

        {assessmentStatus ? <Row gutter={18}>
            <Column span={12}>
                <Card>
                    <Row >
                        <h3>Dressing Plan:</h3>
                    </Row>
                    <Form onClick={(!Cleanse || !Primary || !Secondary || !Fixation || !Additional) ? false : handleInput} link={(!Cleanse || !Primary || !Secondary || !Fixation || !Additional) ? false : "wound"}>
                        <FormItem label={"Cleanse:"} value={Cleanse} onChange={e => setCleanse(e.target.value)} />
                        <FormItem label={"Primary Dressing:"} value={Primary} onChange={e => setPrimary(e.target.value)} />
                        <FormItem label={"Secondary Dressing:"} value={Secondary} onChange={e => setSecondary(e.target.value)} />
                        <FormItem label={"Fixation:"} value={Fixation} onChange={e => setFixation(e.target.value)} />
                        <FormItem label={"Additional Interventions:"} value={Additional} onChange={e => setAdditional(e.target.value)} />
                    </Form></Card>

            </Column>
            <Column span={12}>
                <Card title={"WOUND CARE RECOMMENDATIONS"}>
                    <h3>Dressing recommendations: </h3>
                    <ul>{Products.map((product) => (<li>{product.Name} <br></br>Product description, indications, contraindications </li>))}</ul>

                    <br></br>
                    <h3>References: </h3>
                </Card></Column>

        </Row> : false}
    </Layout>
}

export default WoundAssessmentPage;

