import React, { useState, useEffect, useContext } from "react";
import Layout from "../Components/Layout"
import Breadcrumb from "../Components/Breadcrumb"
import Row from "../Components/Row"
import Column from "../Components/Columns"
import Form from "../Components/Form"
import FormItem from "../Components/FormItem"
import Card from "../Components/Card"
import Select from "../Components/Select"
import DatePicker from "../Components/DatePicker"
import Button from "../Components/Button"
import { PatientContext } from "../Context/PatientContext";
import axios from "axios"

function InitialWoundEntry(props) {
    //Context with current patient information 
    const { patient } = useContext(PatientContext)

    //States for form input 
    const [Location, setLocation] = useState()
    const [Aetiology, setAetiology] = useState()
    const [DateDiscovered, setDate] = useState()
    const [AdditionalInfo, setInfo] = useState()

    //Array of choices to display in "Aetiology" dropdown
    const aetiologyChoices = ["Vascluar", "Neurological", "Venous", "Pressure Injury", "Skin Tear", "Surgical"]


    //Event handler for form submission
    const handleInput = async (event) => {
        try {
            event.preventDefault()
            const response = await axios.post("/api/wounds", ({
                WoundLocation: Location,
                Aetiology: Aetiology,
                DateDiscovered: DateDiscovered,
                AdditionalInfo: AdditionalInfo,
                PatientId: patient.id
            }))
            props.addWound(response.data)
            props.close()
        }
        catch (error) { console.log(error) }
    }


    // const incompleteForm = async () => {
    //     console.log("incomplete")
    // }
    // const [push, setPush] = useState([])
    // const [newItem, setItem] = useState([])

    // const pushArray = async () => {
    //     try {
    //         setPush(push.concat(newItem))
    //     }
    //     catch (error) { console.log(error) }
    // }

    // useEffect(() => { console.log(push) }, [push])

    return <Layout>
        <Breadcrumb navArray={[{ label: `Patient: ${patient.FirstName} ${patient.LastName}` }, { label: "New wound form" }]}></Breadcrumb>
        <Row justify={"center"}>
            <Column span={18}>
                <Card title="Initial Wound Entry">
                    <Form onClick={(!Location || !Aetiology || !DateDiscovered || !AdditionalInfo) ? false : handleInput} link={(!Location || !Aetiology || !DateDiscovered || !AdditionalInfo) ? false : "patient"} labelSpan={10}>
                        <FormItem label="Location:" value={Location} onChange={e => setLocation(e.target.value)}>
                        </FormItem>
                        <Select label={"Aetiology"} array={aetiologyChoices} onClick={(e) => setAetiology(e)}></Select>
                        <DatePicker label={"Date Discovered: "} onChange={(date, dateString) => setDate(dateString)}></DatePicker>
                        <FormItem label="Additional information:" value={AdditionalInfo} onChange={e => setInfo(e.target.value)}></FormItem>
                    </Form>
                </Card>
            </Column>
        </Row>
    </Layout>
}

export default InitialWoundEntry;
