import React, { useState, useEffect, useContext } from "react";
import Layout from "../Components/Layout"
import Row from "../Components/Row"
import Column from "../Components/Columns"
import Form from "../Components/Form"
import FormItem from "../Components/FormItem"
import Card from "../Components/Card"
// import Button from "../Components/Button"
// import Select from "../Components/Select"
// import DatePicker from "../Components/DatePicker"
import { PatientContext } from "../Context/PatientContext";
import axios from "axios"

function InitialWoundEntry() {
    const { patient } = useContext(PatientContext)

    const [Location, setLocation] = useState()
    const [Aetiology, setAetiology] = useState()
    const [DateDiscovered, setDate] = useState()
    const [AdditionalInfo, setInfo] = useState()

    const handleInput = async (event) => {
        try {
            event.preventDefault()
            axios.post("/api/wounds", ({
                WoundLocation: Location,
                Aetiology: Aetiology,
                DateDiscovered: DateDiscovered,
                AdditionalInfo: AdditionalInfo,
                PatientId: patient.id
            }))
        }
        catch (error) { console.log(error) }
    }

    return <Layout>
        <Row>
            <Column>
                <Card title="Initial Wound Entry">
                    <Form onClick={handleInput} link={"patient"}>
                        <FormItem label="Location:" value={Location} onChange={e => setLocation(e.target.value)}>
                        </FormItem>
                        <FormItem label="Aetiology:" value={Aetiology} onChange={e => setAetiology(e.target.value)}>
                        </FormItem>
                        <FormItem label="Date discovered" value={DateDiscovered} onChange={e => setDate(e.target.value)}>
                        </FormItem>
                        <FormItem label="Additional information:" value={AdditionalInfo} onChange={e => setInfo(e.target.value)}></FormItem>
                        {/* <DatePicker ></DatePicker> */}
                    </Form>
                </Card>
            </Column>
        </Row>
    </Layout>
}

export default InitialWoundEntry;
