import React, { useState, useContext } from "react";
import Layout from "../Components/Layout"
import Column from "../Components/Columns"
import Row from "../Components/Row"
import Form from "../Components/Form"
import FormItem from "../Components/FormItem"
import Card from "../Components/Card"
import DatePicker from "../Components/DatePicker"
import Select from "../Components/Select"
import axios from "axios";
import { WoundContext } from "../Context/WoundContext"

function WoundAssessmentPage() {

    const { Wound } = useContext(WoundContext)

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

    const [Cleanse, setCleanse] = useState()
    const [Primary, setPrimary] = useState()
    const [Secondary, setSecondary] = useState()
    const [Fixation, setFixation] = useState()
    const [Additional, setAdditional] = useState()

    const [assessmentStatus, setStatus] = useState(false)

    const booleanChoices = ["Yes", "No"]
    const tissueArray = ["Granulation", "Slough", "Epithelialisation", "Hyper-Granulation", "Necrotic", "Eschar", "Bone"]
    const moistureArray = ["Low", "Moderate", "High", "Nil"]
    const exudateArray = ["Serous", "Heamoserous", "Purulent", "Bloody"]

    const edgeArray = ["Healthy", "Macerated", "Tunnelling", "Undermined", "Inflammed", "Hyperkeratosis"]

    const assessmentComplete = async (event) => {
        event.preventDefault()
        try { setStatus(true) }
        catch (error) { console.log(error) }
    }

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
        <Row justify={"center"}>
            <h2>Wound assessment:</h2>
        </Row>
        <Row>
            <Column offset={8}>
                <Form onClick={assessmentComplete}>
                    <DatePicker label={"Date: "} onChange={(date, dateString) => setDate(dateString)} />
                    <Select label={"Tissue Base:"} array={tissueArray} onClick={(e) => setTissue(e)}></Select>
                    <Select label={"Infection"} array={booleanChoices} onClick={(e) => { if (e === "Yes") { setInfection(true) } else { setInfection(false) } }}></Select>
                    <Select label={"Odour"} array={booleanChoices} onClick={(e) => { if (e === "Yes") { setOdour(true) } else { setOdour(false) } }}></Select>
                    <Select label={"Exudate Type:"} array={exudateArray} onClick={e => setExudate(e)}></Select>
                    <Select label={"Moisture Level:"} array={moistureArray} onClick={e => setMoisture(e)}></Select>
                    <Select label={"Edges:"} array={edgeArray} onClick={e => setEdges(e)}></Select>
                    <h4>Measurements: </h4>
                    <FormItem label={"Length(mm):"} value={Length} onChange={e => setLength(e.target.value)} />
                    <FormItem label={"Width(mm):"} value={Width} onChange={e => setWidth(e.target.value)} />
                    <FormItem label={"Depth(mm):"} value={Depth} onChange={e => setDepth(e.target.value)} />
                </Form>
            </Column>
        </Row>

        {assessmentStatus ? <><Row>
            <Card title={"WOUND CARE RECOMMENDATIONS"}>
                <h3>Render Recommendations:</h3>

            </Card>
        </Row>
            <Row justify={"center"}>
                <h2>Dressing Regime:</h2>
            </Row>
            <Row>
                <Column offset={8}>
                    <Form onClick={handleInput} link={"wound"}>
                        <FormItem label={"Cleanse:"} value={Cleanse} onChange={e => setCleanse(e.target.value)} />
                        <FormItem label={"Primary Dressing:"} value={Primary} onChange={e => setPrimary(e.target.value)} />
                        <FormItem label={"Secondary Dressing:"} value={Secondary} onChange={e => setSecondary(e.target.value)} />
                        <FormItem label={"Fixation:"} value={Fixation} onChange={e => setFixation(e.target.value)} />
                        <FormItem label={"Additional Interventions:"} value={Additional} onChange={e => setAdditional(e.target.value)} />
                    </Form>
                </Column>
            </Row></> : false}

    </Layout>
}

export default WoundAssessmentPage;

